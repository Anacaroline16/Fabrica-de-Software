// app/receitas/[tipo]/[dia]/ChecklistClient.js
"use client";


import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./dia.module.css";

function formatarDia(dia) {
  const formatos = {
    segunda: "Segunda-feira",
    terca: "Terça-feira",
    quarta: "Quarta-feira",
    quinta: "Quinta-feira",
    sexta: "Sexta-feira",
    sabado: "Sábado"
  };
  return formatos[dia];
}

export default function ChecklistClient({ exercicios, tipo, dia }) {
  const router = useRouter();
  const checkboxesRef = useRef([]);
  const [progresso, setProgresso] = useState({});

  // Carrega o progresso salvo
  useEffect(() => {
    const progressoSalvo = localStorage.getItem(`progresso-${tipo}-${dia}`);
    if (progressoSalvo) {
      setProgresso(JSON.parse(progressoSalvo));
    }
  }, [tipo, dia]);

  const handleCheckboxChange = (index) => {
    const novoProgresso = {
      ...progresso,
      [index]: !progresso[index]
    };
    setProgresso(novoProgresso);
  };

  const salvarProgresso = () => {
    localStorage.setItem(`progresso-${tipo}-${dia}`, JSON.stringify(progresso));
    alert('Progresso salvo!');
  };

  const desmarcarTudo = () => {
    const novoProgresso = {};
    setProgresso(novoProgresso);
    checkboxesRef.current.forEach(checkbox => {
      if (checkbox) checkbox.checked = false;
    });
  };

  const voltarPagina = () => {
    router.back();
  };

  return (
    <div className={styles.checklistPage}>
      <button onClick={voltarPagina} className={styles.botaoVoltar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <h1>Checklist para {formatarDia(dia)} - {tipo}</h1>
      
      <div className={styles.exerciciosList}>
        {exercicios.map((exercicio, index) => (
          <div key={index} className={styles.exercicioItem}>
            <input 
              type="checkbox" 
              id={`ex-${index}`}
              ref={el => checkboxesRef.current[index] = el}
              checked={progresso[index] || false}
              onChange={() => handleCheckboxChange(index)}
            />
            <label htmlFor={`ex-${index}`}>
              {exercicio.nome} - {exercicio.series}x{exercicio.repeticoes}
              {exercicio.descanso && exercicio.descanso !== "N/A" && (
                <span className={styles.descanso}> | Descanso: {exercicio.descanso}</span>
              )}
            </label>
          </div>
        ))}
      </div>
      
      <div className={styles.botoesContainer}>
        <button 
          className={styles.desmarcarButton}
          onClick={desmarcarTudo}
        >
          Desmarcar Tudo
        </button>
        
        <button 
          className={styles.salvarButton}
          onClick={salvarProgresso}
        >
          Salvar Progresso
        </button>
      </div>
    </div>
  );
}
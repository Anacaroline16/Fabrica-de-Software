'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './checklist.module.css';
import { ChevronRight, CornerUpLeft } from 'lucide-react';

// Dados completos de exercícios por grupo muscular
const exerciciosPorGrupo = {
  Lombares: [
    { id: 1, nome: "Extensão Lombar", series: "4", reps: "12", img: "/images/lombar1.png" },
    { id: 2, nome: "Prancha Abdominal", series: "3", reps: "30s", img: "/images/lombar2.png" },
    { id: 3, nome: "Good Morning", series: "4", reps: "10", img: "/images/lombar3.png" },
    { id: 4, nome: "Hiperextensão", series: "3", reps: "15", img: "/images/lombar4.png" },
    { id: 5, nome: "Ponte Glúteos", series: "3", reps: "12", img: "/images/lombar5.png" },
    { id: 6, nome: "Superman", series: "3", reps: "10", img: "/images/lombar6.png" }
  ],
  Superior: [
    { id: 1, nome: "Supino Reto", series: "4", reps: "12", img: "/images/superior1.png" },
    { id: 2, nome: "Remada Curvada", series: "4", reps: "12", img: "/images/superior2.png" },
    { id: 3, nome: "Desenvolvimento", series: "4", reps: "10", img: "/images/superior3.png" },
    { id: 4, nome: "Puxada Frontal", series: "4", reps: "12", img: "/images/superior4.png" },
    { id: 5, nome: "Rosca Direta", series: "3", reps: "12", img: "/images/superior5.png" },
    { id: 6, nome: "Tríceps Corda", series: "3", reps: "15", img: "/images/superior6.png" }
  ],
  Inferiores: [
    { id: 1, nome: "Agachamento Livre", series: "4", reps: "12", img: "/images/inferior1.png" },
    { id: 2, nome: "Leg Press", series: "4", reps: "15", img: "/images/inferior2.png" },
    { id: 3, nome: "Cadeira Extensora", series: "4", reps: "12", img: "/images/inferior3.png" },
    { id: 4, nome: "Mesa Flexora", series: "4", reps: "12", img: "/images/inferior4.png" },
    { id: 5, nome: "Panturrilha Sentado", series: "4", reps: "20", img: "/images/inferior5.png" },
    { id: 6, nome: "Afundo", series: "3", reps: "10", img: "/images/inferior6.png" }
  ],
  Cardio: [
    { id: 1, nome: "Esteira", series: "1", reps: "20min", img: "/images/cardio1.png" },
    { id: 2, nome: "Bicicleta", series: "1", reps: "25min", img: "/images/cardio2.png" },
    { id: 3, nome: "Elíptico", series: "1", reps: "15min", img: "/images/cardio3.png" },
    { id: 4, nome: "Corda Naval", series: "3", reps: "1min", img: "/images/cardio4.png" },
    { id: 5, nome: "Burpee", series: "3", reps: "15", img: "/images/cardio5.png" },
    { id: 6, nome: "Step", series: "3", reps: "10min", img: "/images/cardio6.png" }
  ],
  Abdomen: [
    { id: 1, nome: "Abdominal Supra", series: "4", reps: "20", img: "/images/abdomen1.png" },
    { id: 2, nome: "Prancha Frontal", series: "3", reps: "45s", img: "/images/abdomen2.png" },
    { id: 3, nome: "Abdominal Infra", series: "4", reps: "15", img: "/images/abdomen3.png" },
    { id: 4, nome: "Russian Twist", series: "3", reps: "20", img: "/images/abdomen4.png" },
    { id: 5, nome: "Elevação de Pernas", series: "3", reps: "12", img: "/images/abdomen5.png" },
    { id: 6, nome: "Abdominal Bicicleta", series: "3", reps: "20", img: "/images/abdomen6.png" }
  ]
};

export default function Checklist() {
  const searchParams = useSearchParams();
  const dia = searchParams.get('dia');
  const grupo = searchParams.get('grupo');
  
  const [checkedItems, setCheckedItems] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [exerciciosDoDia, setExerciciosDoDia] = useState([]);

  // Carrega itens marcados do localStorage e exercícios do dia
  useEffect(() => {
    // Verifica se o grupo existe
    if (grupo && exerciciosPorGrupo[grupo]) {
      setExerciciosDoDia(exerciciosPorGrupo[grupo]);
      
      // Carrega checkboxes salvos
      const saved = localStorage.getItem(`checkedItems-${dia}-${grupo}`);
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    }
  }, [dia, grupo]);

  // Salva itens marcados no localStorage
  useEffect(() => {
    if (dia && grupo) {
      localStorage.setItem(`checkedItems-${dia}-${grupo}`, JSON.stringify(checkedItems));
    }
  }, [checkedItems, dia, grupo]);

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const desmarcarTudo = () => {
    setCheckedItems({});
  };

  if (!dia || !grupo || !exerciciosPorGrupo[grupo]) {
    return (
      <div className={styles.container}>
        <h1>Dados incompletos</h1>
        <p>Por favor, selecione um dia e grupo válidos</p>
        <p>Grupos disponíveis: {Object.keys(exerciciosPorGrupo).join(', ')}</p>
      </div>
    );
  }

  return (
    <main className={styles.container}>
      <Image
        src="/images/ALMS FIT (1) 1.png"
        className={styles.logo}
        width={80}
        height={50}
        alt="Logo ALMS FIT"
        priority
      />
      
      <h1 className={styles.title}>{dia.charAt(0).toUpperCase() + dia.slice(1)}</h1>
      <h2 className={styles.subtitle}>Grupo: {grupo}</h2>

      {/* Modal de funcionário */}
      <div className={styles.adminContainer}>
        <button 
          className={styles.adminButton} 
          onClick={() => setShowModal(!showModal)}
        >
          *Área de funcionários
        </button>
        
        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button 
                onClick={() => setShowModal(false)} 
                className={styles.closeButton}
                aria-label="Fechar modal"
              >
                <CornerUpLeft size={20} />
              </button>
              <h3>Acesso Restrito</h3>
              <p>
                Área exclusiva para funcionários autorizados. Por favor insira suas credenciais.
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                  <input 
                    type="email" 
                    placeholder="E-mail profissional" 
                    required
                    className={styles.inputField}
                  />
                  <input 
                    type="password" 
                    placeholder="Senha" 
                    required
                    className={styles.inputField}
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Acessar <ChevronRight size={16} />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Lista de exercícios */}
      <div className={styles.exercisesContainer}>
        <ul className={styles.exercisesList}>
          {exerciciosDoDia.map((exercicio) => (
            <li key={`${dia}-${exercicio.id}`} className={styles.exerciseItem}>
              <input
                type="checkbox"
                id={`${dia}-${exercicio.id}`}
                checked={checkedItems[`${dia}-${exercicio.id}`] || false}
                onChange={() => toggleCheck(`${dia}-${exercicio.id}`)}
                className={styles.checkbox}
              />
              <label 
                htmlFor={`${dia}-${exercicio.id}`} 
                className={`${styles.exerciseLabel} ${checkedItems[`${dia}-${exercicio.id}`] ? styles.checked : ''}`}
              >
                <div className={styles.exerciseInfo}>
                  <span className={styles.exerciseName}>{exercicio.nome}</span>
                  <span className={styles.exerciseDetails}>
                    {exercicio.series} séries × {exercicio.reps}
                  </span>
                </div>
                <div className={styles.exerciseImage}>
                  <Image
                    src={exercicio.img}
                    alt={`Ilustração do exercício ${exercicio.nome}`}
                    width={100}
                    height={80}
                    quality={80}
                  />
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={desmarcarTudo} className={styles.clearButton}>
        Desmarcar Tudo
      </button>
    </main>
  );
}
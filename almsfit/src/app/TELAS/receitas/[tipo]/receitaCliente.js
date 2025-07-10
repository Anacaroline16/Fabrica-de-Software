'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../../styles/receita.module.css';

const diasDaSemana = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];

export default function ReceitaClient({ tipo }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()} className={styles.botaoVoltar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <h1 className={styles.title}>Treinos de {tipo.toUpperCase()}</h1>
      
      <div className={styles.diasContainer}>
        {diasDaSemana.map((dia) => (
          <Link 
            key={dia}
            href={`/TELAS/receitas/${tipo}/${dia}`}
            className={styles.diaCard}
          >
            <h2>{formatarDia(dia)}</h2>
            <p>{tipo}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

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
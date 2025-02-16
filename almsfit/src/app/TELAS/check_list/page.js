'use client'
import { useState } from "react";
import Image from "next/image";
import styles from "./checklist.module.css";

const exercicios = [
    { id: 1, nome: "Leg press 45°", series: "4", reps: "12", img: "/images/legpress45.png" },
    { id: 2, nome: "Adutor", series: "4", reps: "15", img: "/images/27 1.png" },
    { id: 3, nome: "Panturrilha", series: "4", reps: "12", img: "/images/26 1.png" },
    { id: 4, nome: "Agachamento", series: "4", reps: "12", img: "/images/28 1.png" },
    { id: 5, nome: "Búlgaro", series: "4", reps: "12", img: "/images/29 2.png" },
  ];

  const exercicios_02 = [
    { id: 1, nome: "Rosca Unilateral", series: "4", reps: "12", img: "/images/30 1.png" },
    { id: 2, nome: "Abdutor", series: "4", reps: "15", img: "/images/31 1.png" },
    { id: 3, nome: "Remada", series: "4", reps: "12", img: "/images/33 1.png" },
    { id: 4, nome: "Supino", series: "4", reps: "12", img: "/images/32 1.png" },
    { id: 5, nome: "Tríceps", series: "4", reps: "12", img: "/images/34 1.png" },
  ]; 


const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const desmarcarTudo = () => {
    setCheckedItems({});
  };

  return (
    <main className={styles.container}>
        <Image src="/images/ALMS FIT (1) 1.png" className={styles.checkzinho} 
            width={80}
             height={50}
            alt="Quadrado vermelho"/>
      <h1>CHECKLIST</h1>
      <button className={styles.funcButton}>*Alteração apenas funcionários</button>
      <ul className={styles.checklist}>
        {exercicios.map((exercicio) => (
          <li key={exercicio.id}>
            <input
              type="checkbox"
              id={`item${exercicio.id}`}
              checked={checkedItems[exercicio.id] || false}
              onChange={() => toggleCheck(exercicio.id)}
            />
            <label htmlFor={`item${exercicio.id}`}>
              {exercicio.nome} <br />
              Séries: {exercicio.series} Rep: {exercicio.reps}
              <img src={exercicio.img} alt={exercicio.nome} />
            </label>
          </li>
        ))}
      </ul>

      <ul className={styles.checklist_02}>
        {exercicios_02.map((exercicio) => (
          <li className={styles.checklist_02li} key={exercicio.id}>
            <input
              type="checkbox"
              id={`item${exercicio.id}`}
              checked={checkedItems[exercicio.id] || false}
              onChange={() => toggleCheck(exercicio.id)}
            />
            <label htmlFor={`item${exercicio.id}`}>
              {exercicio.nome} <br />
              Séries: {exercicio.series} Rep: {exercicio.reps}
              <img src={exercicio.img} alt={exercicio.nome} />
            </label>
          </li>
        ))}
      </ul>

      <div className={styles.containerimg1}>
            <Image src="/images/Rectangle 96 (1).png" className={styles.quadradored01} 
            width={350}
             height={350}
            alt="Quadrado vermelho"/>
            </div>
      
         <div className={styles.containerImg2}>
            <Image src="/images/Rectangle 96 (1).png" className={styles.quadradored02} 
            width={350}
            height={350}
            alt="Quadrado vermelho 02"/>  
        </div>
      <button onClick={desmarcarTudo} className={styles.clearButton}>Desmarcar Tudo</button>
    </main>
  );
};

export default Checklist;







// const exercicios = [
//   { id: 1, nome: "Leg press 45°", series: "4", reps: "12", img: "/images/legpress45.png" },
//   { id: 2, nome: "Adutor", series: "4", reps: "15", img: "/images/27 1.png" },
//   { id: 3, nome: "Panturrilha", series: "4", reps: "12", img: "/images/26 1.png" },
//   { id: 4, nome: "Agachamento", series: "4", reps: "12", img: "/images/28 1.png" },
//   { id: 5, nome: "Búlgaro", series: "4", reps: "12", img: "/images/29 2.png" },
//   { id: 6, nome: "Rosca Unilateral", series: "2", reps: "12", img: "/images/30 1.png" },
//   { id: 7, nome: "Abdutor", series: "4", reps: "15", img: "/images/31 1.png" },
//   { id: 8, nome: "Remada", series: "2", reps: "8", img: "/images/33 1.png" },
//   { id: 9, nome: "Supino", series: "2", reps: "8", img: "/images/32 1.png" },
//   { id: 10, nome: "Trícpes", series: "4", reps: "12", img: "/images/34 1.png" },
// ];

// const Checklist = () => {
//   return (
//     <main className={styles.container}>
//          <Image src="/images/ALMS FIT (1) 1.png" className={styles.checkzinho} 
//             width={80}
//             height={50}
//             alt="check"/>
//       <h1>CheckList</h1>
//       <button className={styles.funcButton}>*Alteração apenas funcionários</button>

//       <div className={styles.containerimg1}>
//       <Image src="/images/Rectangle 96 (1).png" className={styles.quadradored01} 
//             width={350}
//             height={350}
//             alt="Quadrado vermelho"/>
//       </div>
      
//         <div className={styles.containerImg2}>
//         <Image src="/images/Rectangle 96 (1).png" className={styles.quadradored02} 
//             width={350}
//             height={350}
//             alt="Quadrado vermelho 02"/>  
//         </div>

//       <div className={styles.grid}>
//         {exercicios.map((exercicio) => (
//           <div key={exercicio.id} className={styles.card}>
//             <img src={exercicio.img} alt={exercicio.nome} className={styles.exercicioImg}  width={90}
//             height={60} />
//             <h3>{exercicio.nome}</h3>
//             <p>Séries: {exercicio.series} | Reps: {exercicio.reps}</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Checklist;


       
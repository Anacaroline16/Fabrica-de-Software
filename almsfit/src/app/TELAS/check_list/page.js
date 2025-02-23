'use client'
import { useState } from "react";
import Image from "next/image";
import styles from "./checklist.module.css";
import { ChevronRight, CornerUpLeft } from "lucide-react";

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
  const [showmodal, setShowModal] = useState(false)

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
        alt="check" />
      <h1>CHECKLIST</h1>

      <div className={styles.consteudocontainer}>
                <div className={styles.conteudoCentro}>
                </div>
                <button className={styles.funcButton} onClick={() => setShowModal(!showmodal)}>*Alteração apenas funcionários</button>
                {showmodal && (
                    <div className={styles.modal}>
                        <div className={styles.containerModal}>
                            <button onClick={() => setShowModal(!showmodal)} className={styles.botaoFechar}><CornerUpLeft /></button>
                            <p>
                                VOCÊ PRECISA SER UM FUNCIONÁRIO AUTORIZADO PARA REALIZAR UMA ALTERAÇÃO. POR FAVOR INSIRA SUAS CREDENCIAIS.
                            </p>
                            <form>
                                <div className={styles.containerInputs}>
                                    <input type="email" placeholder="Email:" />
                                    <input type="password" placeholder="Senha:" />
                                </div>
                                <button type="submit" className={styles.botaoenviar}>Acessar <ChevronRight /></button>
                            </form>
                        </div>
                    </div>
                )

                }
            </div>

      <div className={styles.fundo_checkList}>
        <ul className={styles.checklist}>
          {exercicios.map((exercicio) => (
            <li key={exercicio.id}>
              <input className={styles.checkbox}
                type="checkbox"
                id={`grupo1-item${exercicio.id}`}
                checked={checkedItems[`grupo1-item${exercicio.id}`] || false}
                onChange={() => toggleCheck(`grupo1-item${exercicio.id}`)}
              />
              <label className={styles.label}
                htmlFor={`grupo1-item$${exercicio.id}`}>
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
              <input className={styles.checkbox}
                type="checkbox"
                id={`grupo2-item${exercicio.id}`}
                checked={checkedItems[`grupo2-item${exercicio.id}`] || false}
                onChange={() => toggleCheck(`grupo2-item${exercicio.id}`)}
              />
              <label className={styles.label}
                htmlFor={`grupo2-item$${exercicio.id}`}>
                {exercicio.nome} <br />
                Séries: {exercicio.series} Rep: {exercicio.reps}
                <img src={exercicio.img} alt={exercicio.nome} />
              </label>
            </li>
          ))}
        </ul>


      </div>


      <button onClick={desmarcarTudo} className={styles.clearButton}>Desmarcar Tudo</button>
    </main>
  );
};

export default Checklist;

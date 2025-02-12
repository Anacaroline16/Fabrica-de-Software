import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from"./horarios.module.css";

export default function Horário() {
  return (
    
      <main className={styles.Maincontainer}>
        <div className={styles.container_funcionamento}>
            <h1 className={styles.horario_h1}>HORÁRIOS DE FUNCIONAMENTO</h1>
            {/* <div className={styles.TodasAsImgs}>
        <Image src="/images/" alt="retangulo-1" 
            width={380}
            height={380}
            className={styles.}/>

        <Image src="/images/" alt="retangulo-2" className={styles.}
            width={370}
            height={370}/>

        <Image src="/images/" 
            alt="retangulo-3" 
            width={340}
            height={340}
            className={styles.}/>

        <Image src="/images/" 
            alt="retangulo-4" 
            width={340}
            height={340}
            className={styles.}/>
        </div>  */}

            <div className={styles.horarios}>
              <p className={styles.TituloMaior}>Segunda a sexta:</p>
              <p className={styles.subtitulo}>06h00 à 11h30</p>
              <p className={styles.subtitulo}>13h00 à 22h00</p>
              <p className={styles.TituloMaior}>Sábados e Domingos:</p>
              <p className={styles.subtitulo}>15h00 à 18h30</p>
              <p className={styles.TituloMaior}>Feriados e eventos:</p>
              <p className={styles.subtitulo}>06h00 à 12h00</p>
            </div>
            <Image src="/images/Vector.png" className={styles.time} 
            width={40}
            height={40}
            alt="Relógio"/>
        </div>
        
      </main>
  );
};




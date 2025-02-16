import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from"./horarios.module.css";

export default function Horário() {
  return (
    
      <main className={styles.Maincontainer}>
        <div className={styles.container_funcionamento}>
            <h1 className={styles.horario_h1}>HORÁRIOS DE FUNCIONAMENTO</h1>

            <div className={styles.TodasAsImgs}>
              <div className={styles.img1}>
              <Image src="/images/Rectangle 100.png"
                  width={450}
                  height={400}
                  alt="retangulo-1"/>
              </div>

              <div className={styles.img5}>
              <Image src="/images/Rectangle 99.png"
                  width={450}
                  height={350}
                  alt="retangulo-5"/>
              </div>
            </div> 

              <div className={styles.TodasAsImgsADireita}>
              <Image src="/images/Rectangle 91 (2).png" 
                  alt="retangulo-2"
                  width={470}
                  height={380}
                  className={styles.img2}/>

              <Image src="/images/Rectangle 91.png" 
                  alt="retangulo-3" 
                  width={500}
                  height={380}
                  className={styles.img3}/>

              <Image src="/images/Rectangle 97 (1).png" 
                  alt="retangulo-4" 
                  width={380}
                  height={420}
                  className={styles.img4}/>
              </div>
            

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




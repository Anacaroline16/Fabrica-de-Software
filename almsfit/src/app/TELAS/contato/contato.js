'use client'
import Link from "next/link";
import Image from "next/image";
import styles from "./contato.module.css";
// import styles from "./globals.css";
import Contato from "./TELAS/contato";

<Contato/>
export default function Contato() {  
  return (

      <main className={styles.container}>
        <div className={styles.contact}>
          <h1 className={styles.contact_h1}>Contate-nos</h1>
          <h3 className={styles.contatct_h3}>
            Você é sempre bem-vindo para entrar em <br />
            contato conosco. Nosso atendimento ao cliente <br />
            está disponível de segunda a sexta, das 9h00 às <br />
            20h00. e sábado a domingo, das 10h00 às <br />
            18h00. Estamos ansiosos para ouvir de você!
          </h3>
          <form className={styles.formulario}>
            <label>
              <input type="text" placeholder="Seu nome:" />
              <input type="email" placeholder="Seu email:" />
            </label>
            <textarea placeholder="Mensagem:" className="mensagem"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
        
        <Image>
          src="./img/Rectangle 91 (1).png" 
          className="retangulo-1Contato"
        </Image>

        <a href="https://www.google.com/maps/d/u/0/edit?mid=1ADwq4SUaCVgrfH6Q__1TxsjlTXh2vOQ&usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src="./img/Screenshot 2024-09-27 155751.png" className="retangulo-2Contato" />
        </a>
        <img src="./img/Rectangle 91 (2).png" className="retangulo-3Contato" />
      </main>
  );
};



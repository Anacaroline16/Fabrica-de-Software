'use client'
import Link from "next/link";
import Image from "next/image";
import styles from "./contato.module.css";

export default function Contato() {  
  return (

      <main className={styles.container}>
        <div className={styles.contact}>
          <h1 className={styles.contact_h1}>Contate-nos</h1>
          <h3 className={styles.contact_h3}>
            Você é sempre bem-vindo para entrar em <br />
            contato conosco. Nosso atendimento ao cliente <br />
            está disponível de segunda a sexta, das 9h00 às <br />
            20h00. e sábado a domingo, das 10h00 às <br />
            18h00. Estamos ansiosos para ouvir de você!
          </h3>
          <form className={styles.formulario}>
            <label>
              <input className={styles.input_form} type="text" placeholder="Seu nome:" />
              <input className={styles.input_form}  type="email" placeholder="Seu email:" />
            </label>
            <textarea className={styles.input_form} placeholder="Mensagem:"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>

        <div className={styles.TodasAsImgs}>
        <Image src="/images/Rectangle 91.png" alt="quadrado vermelho" 
            width={380}
            height={380}
            className={styles.quadradoRed}/>

        <Link
						href="https://www.google.com/maps/d/u/0/edit?mid=1ADwq4SUaCVgrfH6Q__1TxsjlTXh2vOQ&usp=sharing"
						target="_blank">
            <Image src="/images/Screenshot 2024-09-27 155751.png" alt="mapa" className={styles.ImgMapa}
            width={370}
            height={370}/></Link>

        <Image src="/images/Rectangle 91 (2).png" 
          alt="quadrado branco" 
          width={340}
          height={340}
          className={styles.quadradoWhite}/>
        </div>
          
      </main>
  );
};



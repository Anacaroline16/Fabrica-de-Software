'use client'
import styles from "./duvidas.module.css"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function Duvidas(){
	const [caixaAberta, setCaixaAberta] = useState(false)
		const handleSubmit = (e) => {
			e.preventDefault();
			setCaixaAberta(true);
		  };
    return (
			<div>
				<h1 className={styles.containerPrincipal}>Dúvidas</h1>
				<div className={styles.subContainer}>
					<div className={styles.info1}>
						<div className={styles.titulo}>
							<Image
								src="/assets/telefone.png"
								width="20"
								height="20"
								alt="Telefone"
								className={styles.telefone}
							></Image>
							<h3 className={styles.tituloInfo}>Ligue-nos</h3>
						</div>
						<p>(69) 9 9999 - 9999</p>
						<Image
							src="/assets/Frame 8.png"
							width="200"
							height="30"
							alt="logo redes sociais"
							className={styles.redeSocial}
						></Image>
						<div className={styles.titulo}>
							<Image
								src="/assets/local.png"
								width="20"
								height="23"
								alt="local"
								className={styles.local}
							></Image>
							<h3 className={styles.tituloInfo2}>Local</h3>
						</div>

						<p>
							BR-174, Km 3 S/n - Zona Urbana,
							<br />
							Vilhena - RO, 76980-000
						</p>
						<Link
							href="https://www.google.com/maps/d/u/0/edit?mid=1ADwq4SUaCVgrfH6Q__1TxsjlTXh2vOQ&usp=sharing"
							target="_blank"
							className={styles.mapa}
						>
							• Ver no Google Maps
						</Link>

						<h3 className={styles.tituloInfo3}>Horários</h3>
						<p>Seg - Sex... 6h00 - 22h00 </p>
						<p>Sáb - Dom... 10h00 - 18h00</p>
					</div>
					<div className={styles.info2}>
					<form onSubmit={handleSubmit}>
						<div className={styles.form}>
						<h3 className={styles.titulo2}>Entre em contato</h3>
						
							<label className={styles.label}>Nome:</label>
							<input type="text" placeholder="Digite seu nome" required />
							<label className={styles.label}>Email:</label>
							<input type="email" placeholder="Digite seu email" required />
							<label className={styles.label}>Endereço:</label>
							<input type="adress" placeholder="Digite seu endereço" required />
							<label className={styles.labelText}>Mensagem:</label>
							<input type="text" placeholder="Digite a mensagem" required />
						</div>
						
							<button type="submit" className={styles.button} 	>
                    			Enviar <Image src="/assets/seta.png" width="10" height="13" alt="seta botão" />
                			</button>
						</form>
						
					</div>
				</div>
				
				{caixaAberta && (
                    <div className={styles.overlay}>
                        <div className={styles.modal}>
                            <button className={styles.closeButton} onClick={() => setCaixaAberta(false)}>
                            </button>
                                <Link href="/"><Image src="/assets/seta_voltar.png" width="30" height="30" alt="Seta voltar" className={styles.setaVoltar}/></Link>
                                <div className={styles.div}>
                                    <h2 className={styles.frasebotao}>ENVIADO COM SUCESSO!</h2>
                                    <Image src="/assets/cadastroFinalizado.png" width="60" height="60" alt="Seta voltar" className={styles.finalizado} />
                                </div>
                        </div>
                    </div>
        )}
			</div>
		);
}

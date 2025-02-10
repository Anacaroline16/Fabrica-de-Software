'use client'
import Link from "next/link";
import Image from "next/image";
import styles from "../../components/header/header.module.css"
export default function Header() {
	return (
		<div>
			<header className={styles.navbar}>
				<div className={styles.navLinks}>
	
							<Image
								src="/assets/Sobre (2).png"
								width="190"
								height="80"
								alt="logo alms fit">

							</Image>	
				</div>
				<ul className={styles.links}>
							<li className={styles.link_itens}>
								<Link href="/">Home</Link>
							</li>
							<li className={styles.link_itens}>
								<Link href="/">Horários</Link>
							</li>
							<li className={styles.link_itens}>
								<Link href="/about">Treinos</Link>
							</li>
							<li className={styles.link_itens}>
								<Link href="/contato">Contato</Link>
							</li>
						</ul>
						<button className={styles.botaoAluno}>
							<Image
								src="/assets/Area Aluno.svg"
								width="250"
								height="50"
								alt="Image área do aluno">
							</Image>
						</button>
					
			</header>
		</div>
	);
}

import styles from "../footer/footer.module.css";

export default function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.footer}>
				<div className={styles.lista1}>
					<h2>Conheça</h2>
					<p>Sobre nós</p>
					<p>Nossa equipe</p>
					<p>História/Propósito</p>
				</div>

				<div className={styles.lista1}>
					<h2>Saiba Mais</h2>
					<p>Horário de funcionamento</p>
					<p>
						Blog com dicas de treinos <br />e nutrição
					</p>
				</div>

				<div className={styles.lista1}>
					<h2>Entre em contato</h2>
					<p>Contato</p>
					<p>Email oficial</p>
					<p>Whatsapp</p>
					<p>Localização</p>
				</div>

				<div className={styles.lista1}>
					<h2>Nos siga nas redes sociais</h2>
					<p>Contato</p>
					<p>Email oficial</p>
					<p>Whatsapp</p>
					<p>Localização</p>
				</div>
			</div>
			<div className={styles.footer2}>
				<h3>©2024 ALMS Fit</h3>
			</div>
		</div>
	);
}

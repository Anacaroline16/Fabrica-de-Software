import styles from "./page.module.css"
import Image from "next/image";


export default function Home() {
	return (
		<div className={styles.fundo_home}>
            <div className={styles.fundo_home_container}>
                <div className={styles.primeiro_bloco}>
                    <div className={styles.pmrBloco_coluna1}>
                        <h1 className={styles.titulo_principal}>
                            Transforme seu potencial em realidade: Treine conosco!
                        </h1>
                        <p className={styles.paragrafo_principal}>Melhore sua saúde com a academia: fortaleça seu corpo, reduza o estresse e viva de forma mais equilibrada e feliz.</p>
                        <button className={styles.botao_pmrBloco} type="submit" >  
                                <Image src="/images/figura_botao_1.png" alt="INSCREVA-SE AGORA" width="50" height="50"/> 
                                 INSCREVA-SE AGORA
                        </button>  
                    </div> 
                    <div className={styles.pmrBloco_coluna2}>
                         <Image className={styles.img_ft_principal_coluna2} src="/images/img1.png" alt="Mulher malhando na academia" width="250" height="250" /> 
                    </div> 
                </div>
                <div className={styles.segundo_bloco}>
                    <h1>O que torna nossa academia diferente?</h1>
                    <div className={styles.imgs_txt}>
                        <div className={styles.quadrinho_1}>
                            {/* <Image src="/images/img2_1.png" alt="Equipamentos modernos e variados" width={50} height={50}/> */}
                            <p>Equipamentos modernos e variados</p>
                        </div>
                        <div className={styles.quadrinho_1}>
                            {/* <Image src="img/img2_2.png" alt="Treinamento Personalizado" width={50} height={50} /> */}
                            <p>Treinamento Personalizado</p>
                        </div>
                        <div className={styles.quadrinho_1}>
                            {/* <Image src="/images/" alt="Tecnologia e Apps"  width={50} height={50}/> */}
                            <p>Tecnologia e Apps</p>
                        </div>
                    </div>
                </div>
                <div className={styles.terceiro_bloco}>

                    {/* <Image className={styles.imgs} src="/images/img3_1.png" alt="Mulher treinando com corda naval ao ar livre" width={50} height={50}/>
                    <Image className={styles.imgs} src= "/imagesimg/img3_2.png" alt="Mulher realizando exercício de pernas em nossa máquina de academia" width={50} height={50} />
                    <Image className={styles.imgs} src="/images/img3_3.png" alt=" Mulher treinando bícps com halteres em academia" width={50} height={50}/> */}

                </div>
            </div>
        </div>
	)
}

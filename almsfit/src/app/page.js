import styles from "./page.module.css"
import Image from "next/image";

export default function Home() {
	return (
		<div className={fundo_home}>
            <div className={fundo_home_container}>
                <div className={primeiro_bloco}>
                    <div className={pmrBloco-coluna1}>
                        <h1 className={titulo-principal}>
                            Transforme seu potencial em realidade: Treine conosco!
                        </h1>
                        <p className={paragrafo_principal}>Melhore sua saúde com a academia: fortaleça seu corpo, reduza o estresse e viva de forma mais equilibrada e feliz.</p>
                        <button className={botao_pmrBloco} type="submit" >  
                                <Image src="img/figura_botao.png" alt="INSCREVA-SE AGORA" />
                                INSCREVA-SE AGORA
                        </button>  
                    </div> 
                    <div className={pmrBloco_coluna2}>
                        <Image id="img-ft-principal-coluna2" src="img/img1.png" alt="Mulher malhando na academia" />
                    </div> 
                </div>
                <div className={segundo-bloco}>
                    <h1>O que torna nossa academia diferente?</h1>
                    <div className={imgs_txt}>
                        <div className={quadrinho_1}>
                            <Image src="img/img2_1.png" alt="Equipamentos modernos e variados"/>
                            <p>Equipamentos modernos e variados</p>
                        </div>
                        <div className={quadrinho_1}>
                            <Image src="img/img2_2.png" alt="Treinamento Personalizado" />
                            <p>Treinamento Personalizado</p>
                        </div>
                        <div className={quadrinho_1}>
                            <Image src="img/img2_3.png" alt="Tecnologia e Apps" />
                            <p>Tecnologia e Apps</p>
                        </div>
                    </div>
                </div>
                <div className={terceiro-bloco}>

                    <Image class="imgs" src="img/img3_1.png" alt="Mulher treinando com corda naval ao ar livre" />
                    <Image class="imgs" src="img/img3_2.png" alt="Mulher realizando exercício de pernas em nossa máquina de academia" />
                    <Image class="imgs" src="img/img3_3.png" alt=" Mulher treinando bícps com halteres em academia" />

                </div>
            </div>
        </div>
	)
}

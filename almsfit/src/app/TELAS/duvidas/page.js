import styles from "./duvidas.module.css"
import Image from "next/image"

export default function Duvidas(){
    return(
        <div className={styles.containerPrincipal}>
            <h1>Dúvidas</h1>
            <div className={styles.subContainer}>
                <div className={styles.info1}>

                    <h3 className={styles.tituloInfo}>Ligue-nos</h3>
                    <p>(69) 9 9999 - 9999</p>
                    <Image
                    src="/assets/Frame 8.png"
                    width="30"
                    height="30"
                    alt="logo redes sociais">

                    </Image>

                    <h3 className={styles.tituloInfo}>Local</h3>
                    <p>BR-174, Km 3 S/n - Zona Urbana, 
                    Vilhena - RO, 76980-000</p>
                    <p>• Ver no google maps</p>

                    <h3>Horários</h3>
                    <p>Seg - Sex... 6h00 - 22h00 </p>
                    <p>Sáb - Dom... 10h00 - 18h00</p>
                </div>
                
                <h3 className={styles.info2}>Entre em contato</h3>
            </div>
            
        </div>
    )
}
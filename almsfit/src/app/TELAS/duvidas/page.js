import styles from "./duvidas.module.css"
import Image from "next/image"
import Link from "next/link";


export default function Duvidas(){
    return(
        <div >
            <h1 className={styles.containerPrincipal}>Dúvidas</h1>
            <div className={styles.subContainer}>
                <div className={styles.info1}>
                    <div className={styles.titulo}>
                        <Image src="/assets/telefone.png" width="20" height="20" alt="Telefone" className={styles.telefone}></Image>
                        <h3 className={styles.tituloInfo}>Ligue-nos</h3>
                    </div>          
                    <p>(69) 9 9999 - 9999</p>
                    <Image
                    src="/assets/Frame 8.png"
                    width="200"
                    height="30"
                    alt="logo redes sociais"
                    className={styles.redeSocial}>

                    </Image >
                    <div className={styles.titulo}>
                        <Image src="/assets/local.png" width="20" height="23" alt="local" className={styles.local}></Image>
                        <h3 className={styles.tituloInfo2}>Local</h3>
                    </div>
                    
                    <p>BR-174, Km 3 S/n - Zona Urbana,<br/> 
                    Vilhena - RO, 76980-000</p>
                    <Link href="/" className={styles.mapa}>• Ver no Google Maps</Link>
                    

                    <h3  className={styles.tituloInfo3}>Horários</h3>
                    <p>Seg - Sex... 6h00 - 22h00 </p>
                    <p>Sáb - Dom... 10h00 - 18h00</p>
                </div>
                
                <h3 className={styles.info2}>Entre em contato</h3>
            </div>
            
        </div>
    )
}

'use client'
import Image from "next/image"
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link"
import styles from "./cadastroEquipamentos.module.css"

export default function cadastroEquipamentos() {
    const [caixaAberta, setCaixaAberta] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setCaixaAberta(true);
    };
    return (
        <div>
            <div className={styles.alinhar}>
                <div className={styles.containerPrincipal}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.conteudoForm}>
                            <div className={styles.cadastro}>
                                <Image src="/images/iconeEquipamentos.png" width="110" height="110" alt="perfil" className={styles.perfil} />
                            </div>
                            <label className={styles.label}>Nome:</label>
                            <input type="text" placeholder="Nome:" required />

                            <label className={styles.label}>Tipo:</label>
                            <input type="text" placeholder="Tipo:" required />

                            <label className={styles.label}>N° de inscrição:</label>
                            <input type="text" placeholder="N° de inscrição:" required />

                            <label className={styles.label}>Marca:</label>
                            <input type="text" placeholder="Marca:" required />

                            <label className={styles.label}>Descrição:</label>
                            <input type="text" placeholder="Descrição:" required />
                        </div>
                        <button type="submit" className={styles.button}>
                            Cadastrar <Image src="/assets/seta.png" width="10" height="13" alt="seta botão" />
                        </button>
                    </form>
                </div>
                {
                    caixaAberta && (
                        <div className={styles.overlay}>
                            <div className={styles.modal}>
                                <button className={styles.closeButton} onClick={() => setCaixaAberta(false)}>
                                </button>
                                <Link href="/"><Image src="/assets/seta_voltar.png" width="30" height="30" alt="Seta voltar" className={styles.setaVoltar} /></Link>
                                <div className={styles.div}>
                                    <h2 className={styles.frasebotao}>CADASTRO FINALIZADO!</h2>
                                    <Image src="/assets/cadastroFinalizado.png" width="60" height="60" alt="Seta voltar" className={styles.finalizado} />
                                </div>

                            </div>
                        </div>
                    )
                }
            </div >
        </div >
    )
}
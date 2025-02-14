'use client'
import React from "react";
import styles from './escolhaCadastro.module.css'
import Link from "next/link";
import Image from "next/image";

export default function EscolhaCadastro() {
    return (
        <div className={styles.container}>
            <div className={styles.campoTexto}>
                <h2>O que deseja fazer?</h2>
                <p>“Viva sem dor, viva em paz”, Alms Fit sempre com você!</p>
            </div>
            <div className={styles.containerBotoes}>
                <Link href='#' className={styles.botoes}>
                    <div className={styles.conteudobotao}>
                        <Image
                            src="/images/iconeEquipamentos.png"
                            width="90"
                            height="90"
                            alt="icone equipamentos"
                        />
                        <p>Equipamentos</p>
                    </div>
                </Link>
                <Link href='#' className={styles.botoes}>
                    <div className={styles.conteudobotao}>
                        <Image
                            src="/images/iconeAreaDocliente.png"
                            width="90"
                            height="70"
                            alt="icone area do cliente"
                        />
                        <p>Área do cliente</p>
                    </div>

                </Link>
                <Link href='#' className={styles.botoes}>
                    <div className={styles.conteudobotao}>
                        <Image
                            src="/images/iconeConsultarHorarios.png"
                            width="90"
                            height="90"
                            alt="icone consultar horario"
                        />
                        <p>consultar horários</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}
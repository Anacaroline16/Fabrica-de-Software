'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./paginaTreinos.module.css"
import Link from "next/link";
import { ChevronRight, CornerUpLeft } from "lucide-react";

const usuarioNome = 'Julia Martins Rodrigues'
const dadosTreino = [
    {
        id: 1,
        dia: 'Segunda Feira',
        treino: [
            {
                id: 1,
                tipoTreino: "Leg Press 45°",
                repeticoes: "4X15",
            },
            {
                id: 2,
                tipoTreino: "Passada",
                repeticoes: "4X12",
            },
            {
                id: 3,
                tipoTreino: "Extensora",
                repeticoes: "4X12",
            },
            {
                id: 4,
                tipoTreino: "Adutora",
                repeticoes: "4X15",
            }
        ]
    },
    {
        id: 2,
        dia: 'Terça Feira',
        treino: [
            {
                id: 1,
                tipoTreino: "Leg Press 45°",
                repeticoes: "4X15",
            },
            {
                id: 2,
                tipoTreino: "Passada",
                repeticoes: "4X12",
            },
            {
                id: 3,
                tipoTreino: "Extensora",
                repeticoes: "4X12",
            },
            {
                id: 4,
                tipoTreino: "Adutora",
                repeticoes: "4X15",
            }
        ]
    },
    {
        id: 3,
        dia: 'Quarta Feira',
        treino: [
            {
                id: 1,
                tipoTreino: "Leg Press 45°",
                repeticoes: "4X15",
            },
            {
                id: 2,
                tipoTreino: "Passada",
                repeticoes: "4X12",
            },
            {
                id: 3,
                tipoTreino: "Extensora",
                repeticoes: "4X12",
            },
            {
                id: 4,
                tipoTreino: "Adutora",
                repeticoes: "4X15",
            }
        ]
    },
    {
        id: 4,
        dia: 'Quinta Feira',
        treino: [
            {
                id: 1,
                tipoTreino: "Leg Press 45°",
                repeticoes: "4X15",
            },
            {
                id: 2,
                tipoTreino: "Passada",
                repeticoes: "4X12",
            },
            {
                id: 3,
                tipoTreino: "Extensora",
                repeticoes: "4X12",
            },
            {
                id: 4,
                tipoTreino: "Adutora",
                repeticoes: "4X15",
            }
        ]
    },
    {
        id: 5,
        dia: 'Sexta Feira',
        treino: [
            {
                id: 1,
                tipoTreino: "Leg Press 45°",
                repeticoes: "4X15",
            },
            {
                id: 2,
                tipoTreino: "Passada",
                repeticoes: "4X12",
            },
            {
                id: 3,
                tipoTreino: "Extensora",
                repeticoes: "4X12",
            },
            {
                id: 4,
                tipoTreino: "Adutora",
                repeticoes: "4X15",
            }
        ]
    },
    {
        id: 6,
        dia: 'Sábado',
        treino: [
            {
                id: 1,
                tipoTreino: "Leg Press 45°",
                repeticoes: "4X15",
            },
            {
                id: 2,
                tipoTreino: "Passada",
                repeticoes: "4X12",
            },
            {
                id: 3,
                tipoTreino: "Extensora",
                repeticoes: "4X12",
            },
            {
                id: 4,
                tipoTreino: "Adutora",
                repeticoes: "4X15",
            }
        ]
    }
]

export default function TreinoSemana() {
    const [showmodal, setShowModal] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.consteudocontainer}>
                <div className={styles.conteudoCentro}>
                    <h2 className={styles.titutloPaigna}>Treino da semana</h2>
                    <p className={styles.nomeUsuario}>{usuarioNome}</p>
                </div>
                <button className={styles.botaoModal} onClick={() => setShowModal(!showmodal)}>*Alteração apenas funcionários</button>
                {showmodal && (
                    <div className={styles.modal}>
                        <div className={styles.containerModal}>
                            <button onClick={() => setShowModal(!showmodal)} className={styles.botaoFechar}><CornerUpLeft/></button>
                            <p>
                                VOCÊ PRECISA SER UM FUNCIONÁRIO AUTORIZADO PARA REALIZAR UMA ALTERAÇÃO. POR FAVOR INSIRA SUAS CREDENCIAIS.
                            </p>
                            <form>
                                <div className={styles.containerInputs}>
                                    <input type="email" placeholder="Email:" />
                                    <input type="password" placeholder="Senha:" />
                                </div>
                                <button type="submit" className={styles.botaoenviar}>Acessar <ChevronRight /></button>
                            </form>
                        </div>
                    </div>
                )

                }
            </div>

            <div className={styles.containerTreinos}>
                <Link href="./check_list" className={styles.lista}>
                    {dadosTreino.map((treino) => (
                        <div key={treino.id} className={styles.cardTreino}>
                            <table className={styles.tabelaTreinos}>
                                <thead>
                                    <tr key={treino.id} className={styles.cabecalho}>
                                        <th colSpan="2">{treino.dia}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {treino.treino.map((exercicio) => (
                                        <tr key={exercicio.id}>
                                            <td className={styles.colunaTipoTreino}>{exercicio.tipoTreino}</td>
                                            <td className={styles.colunaRepeticoes}>{exercicio.repeticoes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </Link>
            </div>
        </div>
    )
}
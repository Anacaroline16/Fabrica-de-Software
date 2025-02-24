'use client'
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link"
import styles from "./cadastroCliente.module.css"

export default function cadastroCliente(){
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
    const [caixaAberta, setCaixaAberta] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setCaixaAberta(true);
      };
    return(
        <div>
            <div className={styles.alinhar}>
                <div className={styles.containerPrincipal}>
                    <div className={styles.cadastro}>
                        <Image src="/assets/perfil.png" width="110" height="110" alt="perfil" className={styles.perfil}/>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label className={styles.label}></label>
                        <input type="text" placeholder="Digite seu nome:" required/>

                        <label className={styles.label}></label>
                        <input type="tel" placeholder="Digite seu telefone:" required />

                        <label className={styles.label}></label>
                        <input type="email" placeholder="Digite seu email:" required/>

                        <label className={styles.label}></label>
                        <input type="text" placeholder="Digite seu CPF:" required/>

                        <label className={styles.label}></label>
                        <input type="tel" placeholder="Digite um telefone de emergência:" required/>

                        <label className={styles.label}></label>
                        <input type="text" placeholder="Digite suas restrições médicas:" required/>
                        <label className={styles.label}></label>
                        <div className={styles.dateInputs}>
                            <select className={styles.selecao}>
                                <option>Dia</option>
                                {Array.from({ length: 31 }, (_, i) => (
                                <option key={i + 1}>{i + 1}</option>
                                ))}
                            </select>

                            <select className={styles.selecao}>
                                <option>Mês</option>
                                {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"].map((mes, i) => (
                                <option key={i}>{mes}</option>
                                ))}
                            </select>

                            <select className={styles.selecao}>
                                <option>Ano</option>
                                {Array.from({ length: 100 }, (_, i) => (
                                <option key={i}>{2025 - i}</option>
                                ))}
                            </select>
                        </div>

                        <label></label>
                        <div className={styles.senhaContainer}>
                            <input
                                type={mostrarSenha ? "text" : "password"}
                                placeholder="Digite sua senha:"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                                className={styles.iconeOlho}
                            >
                                {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        <label></label>
                        <div className={styles.senhaContainer}>
                            <input
                                type={mostrarConfirmarSenha ? "text" : "password"}
                                placeholder="Confirme sua senha:"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                                className={styles.iconeOlho}
                            >
                                {mostrarConfirmarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <button type="submit" className={styles.button}>
                            Cadastrar <Image src="/assets/seta.png" width="10" height="13" alt="seta botão" />
                        </button>
                    </form>
                </div>
                {caixaAberta && (
                    <div className={styles.overlay}>
                        <div className={styles.modal}>
                            <button className={styles.closeButton} onClick={() => setCaixaAberta(false)}>
                            </button>
                                <Link href="/"><Image src="/assets/seta_voltar.png" width="30" height="30" alt="Seta voltar" className={styles.setaVoltar}/></Link>
                                <div className={styles.div}>
                                    <h2 className={styles.frasebotao}>CADASTRO FINALIZADO!</h2>
                                    <Image src="/assets/cadastroFinalizado.png" width="60" height="60" alt="Seta voltar" className={styles.finalizado} />
                                </div>
                                
                        </div>
                    </div>
        )}
            </div>
        </div>
    )
}
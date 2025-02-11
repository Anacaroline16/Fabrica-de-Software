'use client'
import React, { useState } from "react";
import styles from './login.module.css'
import { Eye, EyeOff, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
    const [password, setPassword] = useState([])
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className={styles.containerTelaLogin}>
            <button className={styles.botaoVoltar}><ArrowLeft /></button>
            <div className={styles.containerImagem}>
                <Image
                    className={styles.logo}
                    src="/assets/Sobre (2).png"
                    width="190"
                    height="120"
                    alt="logo alms fit" />
            </div>
            <div className={styles.formularioLogin}>
                <h2 className={styles.titulo}>LOGIN</h2>
                <form className={styles.formulario}>
                    <div className={styles.containerInput}>
                        <input type="email" placeholder="E-mail:" className={styles.input} />
                    </div>
                    <div className={styles.containerInput}>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha:"
                            required
                            className={styles.input}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className={styles.botaoMostrarSenha}
                        >
                            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                        </button>
                    </div>
                    <ul className={styles.listaLinks}>
                        <li>
                            <p>Deseja fazer parte de nossa equipe?</p>
                            <Link className={styles.linkRedirecionamento} href="#">Acesse aqui</Link>
                        </li>
                        <li>
                            <p>Não possui cadastro?</p>
                            <Link className={styles.linkRedirecionamento} href="#">Acesse aqui</Link>
                        </li>
                    </ul>
                    <button className={styles.botaoEnviar} type="submit">Entrar <ChevronRight/></button>
                </form>
            </div>
        </div>
    )
}
'use client'
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import styles from "./cadastroCliente.module.css"

export default function cadastroCliente(){
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
    const [mensagem, setMensagem] = useState("");

    const handleSubmit =  (e) => {
        e.preventDefault();
        setMensagem("Cadastro finalizado com sucesso! ");
        setTimeout(() => setMensagem(""), 3000);
      };
    return(
        <div >
            <div className={styles.containerPrincipal}>
                <div className={styles.cadastro}>
                    <Image src="/assets/perfil.png" width="110" height="110" alt="perfil" className={styles.perfil}/>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>Nome:</label>
                    <input type="text" placeholder="Digite seu nome" required/>

                    <label className={styles.label}>Telefone:</label>
                    <input type="tel" placeholder="Digite seu telefone" required/>

                    <label className={styles.label}>Email:</label>
                    <input type="email" placeholder="Digite seu email" required/>

                    <label className={styles.label}>CPF:</label>
                    <input type="text" placeholder="Digite seu CPF" required/>

                    <label className={styles.label}>Contato para emergência:</label>
                    <input type="tel" placeholder="Digite um telefone de emergência" required/>

                    <label className={styles.label}>Restrições médicas:</label>
                    <input type="text" placeholder="Digite suas restrições médicas" required/>
                    <label className={styles.label}>Data de nascimento:</label>
                    <div className={styles.dateInputs}>
                    <select>
                        <option>Dia</option>
                        {Array.from({ length: 31 }, (_, i) => (
                        <option key={i + 1}>{i + 1}</option>
                        ))}
                    </select>

                    <select>
                        <option>Mês</option>
                        {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"].map((mes, i) => (
                        <option key={i}>{mes}</option>
                        ))}
                    </select>

                    <select>
                        <option>Ano</option>
                        {Array.from({ length: 100 }, (_, i) => (
                        <option key={i}>{2025 - i}</option>
                        ))}
                    </select>
                    </div>

                    <label>Criar senha:</label>
                    <div className={styles.senhaContainer}>
                    <input
                        type={mostrarSenha ? "text" : "password"}
                        placeholder="Digite sua senha"
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

                    <label>Confirmar senha:</label>
                    <div className={styles.senhaContainer}>
                    <input
                        type={mostrarConfirmarSenha ? "text" : "password"}
                        placeholder="Confirme sua senha"
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
                </form>
                {mensagem && <div className={styles.mensagem}>{mensagem}</div>}
            </div>
            <button type="submit" className={styles.button}>Cadastrar<Image src="/assets/seta.png" width="10" height="13" alt="seta botão"/></button>
        </div>
    )
}
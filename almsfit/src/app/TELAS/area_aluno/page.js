'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import Image from "next/image"
import styles from "./areaAluno.module.css"
export default function AreaAluno(){
    const [frequencias, setFrequencias] = useState([]);

    const aluno = {
        nome: "Julia Martins Rodrigues",
        nascimento: "15/03/2000",
        idade: 25,
        cpf: "123.456.789-00",
        rg: "12.345.678-9",
        endereco: "Rua Brasil, 789, Apt. 12, Bairro Centro, Vilhena - RO, 76980-000",
        email: "julia.martinsr@gmail.com",
        contato: "(21) 91234-5678",
        emergencia: "(21) 99876-5432",
        lesoes: "Lesões musculares",
        data: "01.02.2023",
        altura: "1,65 m",
        peso: "60 kg",
        imc: "22,04",
        objetivo: "Ganho de massa muscular",
        // frequencia: "5 dias/semana",
        imagem: "/assets/fotoPerfil.png" 
        };

        useEffect(() => {
            const BASE_URL = window.location.hostname === "localhost"
                ? "http://localhost:9000"
                : "https://almsfitapi.dev.vilhena.ifro.edu.br/api";

            const buscarFrequencia = async () => {
                try {
                    const resposta = await fetch(`${BASE_URL}/frequencia/cliente/6`);
                    if (!resposta.ok) throw new Error(`Erro: ${resposta.status}`);
                    const dados = await resposta.json();

                    setFrequencias(dados);
                } catch (erro) {
                    console.error("Erro ao buscar frequência:", erro);
                    alert("Erro ao buscar frequência da cliente.");
                }
            };

            buscarFrequencia();
        }, []);


    return(
            <div>
                <div className={styles.container}>
                    <div className={styles.cardPessoal}>
                            <img src={aluno.imagem} alt="Foto do aluno" className={styles.foto} />
                            <h2>{aluno.nome}</h2>
                            <p>{aluno.nascimento} - {aluno.idade} anos</p>
                            <Link href="/TELAS/edicao_usuario"><button className={styles.botaoEditar} >Editar informações</button></Link>
                        
                        <div className={styles.dados}>
                            <p><strong>CPF:</strong> {aluno.cpf}</p>
                            <p><strong>RG:</strong> {aluno.rg}</p>
                            <p><strong>Endereço:</strong> {aluno.endereco}</p>
                        </div>
                    </div>
                    <div className={styles.cardSaude}>
                        <p className={styles.lesao}><Image src="/assets/restricoes.png" width="25" height="25" alt="restrições"/> {aluno.lesoes}</p>
                        <p className={styles.lesao}><Image src="/assets/calendario.png" width="25" height="25" alt="calendário"/> {aluno.data}</p>
                        <div className={styles.detalhes}>
                            <p className={styles.info}><strong>Altura:</strong> {aluno.altura}</p>
                            <p  className={styles.info}><strong>Peso:</strong> {aluno.peso}</p>
                            <Image src="/assets/IMC.png" width="15" height="45" alt="calendário"/>
                            <p><strong>IMC:</strong> <span className={styles.imc}>{aluno.imc}</span></p>
                        </div>
                        <p className={styles.lesao}><strong>Objetivo:</strong> {aluno.objetivo}</p>
                        <div className={styles.lesao}>
                            <strong>Frequência registrada:</strong>
                            {frequencias.length > 0 ? (
                                <ul>
                                {frequencias.map((f, i) => {
                                    const entrada = new Date(f.dataEntrada);
                                    const saida = new Date(f.dataSaida);

                                    const dia = entrada.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
                                    const horaEntrada = entrada.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
                                    const horaSaida = saida.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

                                    return (
                                    <li key={i}>
                                        Dia: {dia} — Entrada: {horaEntrada} — Saída: {horaSaida}
                                    </li>
                                    );
                                })}
                                </ul>
                            ) : (
                                <p>Sem registros.</p>
                            )}
                            </div>


                        {/* <p className={styles.lesao}><strong>Frequência:</strong> {aluno.frequencia}</p> */}
                    </div>
                </div>
                <div className={styles.container2}>
                    <div className={styles.cardContato}>
                        <p><strong>Email:</strong> {aluno.email}</p>
                        <p><strong>Contato:</strong> {aluno.contato}</p>
                        <p><strong>Emergência:</strong> {aluno.emergencia}</p>
                    </div>
                    
                    <div className={styles.opcoes}>
                        <h3>O que deseja fazer?</h3>
                        <Link href="./treino_geral"><button className={styles.botaoOpcao}>Treinos da semana</button></Link>
                        <Link href="./avaliar_IMC"><button className={styles.botaoOpcao}>Cálculo de IMC</button></Link>
                        <Link href="./duvidas"><button className={styles.botaoOpcao}>Dúvidas</button></Link>
                        <Link href="./horarios"><button className={styles.botaoOpcao}>Horários</button></Link>
                        
                    </div>
                </div>
                    
            </div>
        );
        
}
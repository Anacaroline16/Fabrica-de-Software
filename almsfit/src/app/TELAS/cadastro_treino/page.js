'use client';
import React from "react";
import style from "./cadastroTreinos.module.css";
import Image from "next/image";
import { useState } from "react";

export default function CadastrarTreinos() {
    const [exercicioSelecionado, setExercicioSelecionado] = useState("Selecione um exercício");
    const [serieSelecionada, setSerieSelecionada] = useState("Selecione uma série");
    const [dropdownExerciciosAberto, setDropdownExerciciosAberto] = useState(false);
    const [dropdownSeriesAberto, setDropdownSeriesAberto] = useState(false);

    const exercicios = [
        "Agachamento", "Supino Reto", "Supino Inclinado", "Supino Declinado",
        "Leg Press", "Extensão de Joelhos", "Flexão de Joelhos", "Rosca Direta",
        "Rosca Alternada", "Rosca Concentrada", "Rosca Martelo", "Tríceps na Polia",
        "Tríceps Testa", "Tríceps Corda", "Remada Curvada", "Remada Unilateral",
        "Pulldown", "Barra Fixa", "Elevação Lateral", "Elevação Frontal",
        "Desenvolvimento com Barra", "Desenvolvimento com Halteres", "Stiff",
        "Terra", "Crucifixo", "Crucifixo Inclinado", "Abdominal Reto",
        "Abdominal Oblíquo", "Prancha Isométrica", "Elevação de Quadril",
        "Flexão de Braços", "Burpee", "Corrida na Esteira", "Bike Ergométrica",
        "Panturrilha Sentado", "Panturrilha em Pé", "Step Up", "Avanço (Lunge)",
        "Good Morning", "Pull Over", "Crossover na Polia", "Remada Baixa",
        "Remada Cavalinho", "Elevação de Ombros (Encolhimento)", "Kettlebell Swing",
        "Mountain Climber", "Levantamento Olímpico", "Ponte para Glúteos",
        "Flexão com Rotação"
    ];

    const series = [
        "3 séries de 12 repetições", "4 séries de 10 repetições", "3 séries de 15 repetições",
        "3 séries de 1 minuto", "4 séries de 12 repetições", "3 séries de 10 repetições",
        "3 séries de 12 repetições", "3 séries de 10 repetições", "4 séries de 15 repetições",
        "3 séries de 12 repetições", "3 séries de 15 repetições", "3 séries de 12 repetições",
        "3 séries de 10 repetições", "4 séries de 20 repetições", "3 séries de 15 repetições",
        "3 séries de 8 repetições", "20 minutos", "3 séries de 8 repetições",
        "3 séries de 10 repetições", "3 séries de 15 repetições"
    ];

    

    return (
        <div className={style.alinhar}>
            <h1 className={style.h1_cadastro}>Cadastro de Treinos</h1>
            <div className={style.card}>
                <form className={style.formulario_conteudo} action="#">
                    <div className={style.conteudo}>
                        
                        <section className={style.separar_colunas}>
                            <div className={style.coluna_1}>
                                <div className={style.input}>
                                    <input type="text" name="nome" className={style.nome} required placeholder="NOME DO ALUNO:" />
                                </div>
                                <div className={style.input}>
                                    <input type="number" name="idEquipamento" className={style.idEquipamento} placeholder="CÓDIGO DO EQUIPAMENTO:" required />
                                </div>
                            </div>
                            <div className={style.coluna_2}>
                                <div className={style.input}>
                                    <input type="text" name="nomeDoequi" className={style.nomeDoequi} placeholder="NOME DO EQUIPAMENTO:" required />
                                </div>
                                <div className={style.dropdown_series}>
                                    <div
                                        className={style.btn_selecione}
                                        onClick={() => setDropdownSeriesAberto(!dropdownSeriesAberto)}
                                    >
                                        <span>{serieSelecionada}</span>
                                    </div>
                                    {dropdownSeriesAberto && (
                                        <div className={style.conteudo_selecione_series}>
                                            <ul className={`${style.conteudo_selecione} ${dropdownExerciciosAberto? "ativo" : ""}`}>
                                                {series.map((serie, index) => (
                                                    <li key={index} onClick={() => {
                                                        setSerieSelecionada(serie);
                                                        setDropdownSeriesAberto(false);
                                                    }}>
                                                        {serie}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={style.linha_3}>
                                <div className={style.dropdown}>
                                    <div
                                        className={style.btn_selecione}
                                        onClick={() => setDropdownExerciciosAberto(!dropdownExerciciosAberto)}
                                    >
                                        <span>{exercicioSelecionado}</span>
                                    </div>
                                    {dropdownExerciciosAberto && (
                                        <div className={style.conteudo_selecione}>
                                            <ul className={style.opcoes}>
                                                {exercicios.map((exercicio, index) => (
                                                    <li key={index} onClick={() => {
                                                        setExercicioSelecionado(exercicio);
                                                        setDropdownExerciciosAberto(false);
                                                    }}>
                                                        {exercicio}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                        
                    </div>
                </form>
                
            </div>
            <button className={style.botao_enviar} type="submit">
                            <h3 className={style.h3_botao}>Cadastrar</h3>
                            <Image src="/images/telaCadatroTreino(1).png" alt="Ícone de envio" width={20} height={20} />
                </button>
        </div>
    );
}


'use client';
import React from "react";
import Select from "react-select";
import style from "./cadastroTreinos.module.css";
import Image from "next/image";
import { useState } from "react";

export default function CadastrarTreinos() {
    const customStyles = {
        control: (provided) => ({
          ...provided,
          backgroundColor: "darkred", 
          borderColor:"darkred",
        })
      };
    const exerciciosAcademia = [
            { value: "supino_reto", label: "Supino Reto" },
            { value: "rosca_direta", label: "Rosca Direta" },
            { value: "agachamento", label: "Agachamento Livre" },
            { value: "leg_press", label: "Leg Press" },
            { value: "desenvolvimento_ombros", label: "Desenvolvimento para Ombros" },
            { value: "barra_fixa", label: "Barra Fixa" },
            { value: "cadeira_extensora", label: "Cadeira Extensora" },
            { value: "cadeira_flexora", label: "Cadeira Flexora" },
            { value: "puxador_costas", label: "Puxador Costas" },
            { value: "triceps_polia", label: "Tríceps na Polia" }
        ];
        const seriesExercicios = [
            { value: "3x10", label: "3 séries de 10 repetições" },
            { value: "4x12", label: "4 séries de 12 repetições" },
            { value: "5x8", label: "5 séries de 8 repetições" },
            { value: "3x15", label: "3 séries de 15 repetições" },
            { value: "4x10", label: "4 séries de 10 repetições" },
            { value: "5x5", label: "5 séries de 5 repetições" },
            { value: "3x8", label: "3 séries de 8 repetições" },
            { value: "4x15", label: "4 séries de 15 repetições" }
        ];
        const funcionarios = [
            { value: "Ana Caroline", label: "Ana Caroline Cordeiro" },
            { value: "Anne Gabriele", label: "Anne Gabriele Bassi" },
            { value: "Luz Miranda", label: "Luz Miranda" },
            { value: "Maria Eduarda", label: "Maria Eduarda Gonçalves" },
            { value: "Sofia Melo", label: "Sofia Caroline" }
        ];



        return(
            
        <div className = { style.container } >
            <div className={style.card}>

                <form className={style.formulario_conteudo} action="#">
                    <div className={style.separar_colunas}>
                        <div className={style.coluna}>
                            <input type="text" name="nome" className={style.input} required placeholder="NOME DO ALUNO:" />
                            <input type="number" name="idEquipamento" className={style.input} placeholder="CÓDIGO DO EQUIPAMENTO:" required />
                        </div>

                        <div className={style.coluna}>
                            <Select isMulti isSearchable={true} closeMenuOnSelect={true} className={style.select} options={funcionarios} styles={customStyles} placeholder="Funcionário:"></Select>


                            <Select isMulti isSearchable={true} closeMenuOnSelect={true} className={style.select} options={exerciciosAcademia}  styles={customStyles} placeholder="Exercícios:"></Select>
                        </div>
                    </div>
                    <div className={style.linha_3}>
                        <Select isMulti isSearchable={true} closeMenuOnSelect={true} className={style.selectSeries} options={seriesExercicios}   styles={customStyles}placeholder="Quantidade de Séries:    "></Select>
                    </div>

                </form>

            </div>
            <button className={style.botao_enviar} type="submit">
                <h3 className={style.h3_botao}>Cadastrar</h3>
                <Image src="/images/telaCadatroTreino(1).png" alt="Ícone de envio" width={20} height={20} />
            </button>
        </div >
    );
}




'use client'
import React from 'react'
import style from './edicaoUsuario.module.css';
import Link from "next/link";
import Image from "next/image";



export default function EdicaoUsuario() {
    return (
        <div>
            <div className={style.alinhar}>
                
                <div className={style.card}>
                    <form className={style.formulario_usuario}   action="#">
                    
                    <div className={style.container_centralizar}>
                        <div className={style.informacoes}>
                            <Image className={style.foto_perfil} 
                                src="/images/iconeUsuarioAnonimo.png" 
                                alt="Foto do usuário" 
                                width={200} 
                                height={200} 
                            />
                            

                            <div className={style.coluna_1}>
                                <input type="text" name="nome" className={style.nome}  required placeholder="Nome(Apelido):"/>
                                <select name="genero" className={style.genero} defaultValue="#"  >
                                    <option value="#"  >Gênero</option>
                                    <option value="F" >Feminino</option>
                                    <option value="M">Masculino</option>
                                    <option value="outro">Outro</option>
                                    <option value="N_dizer">Prefiro não dizer</option>
                                </select>
                            </div>
                            <div className={style.coluna_2}>
                                <input type="email" name="email" className={style.email}  required placeholder="E-mail:"/>
                            </div> 
                            <div className={style.datas}>
                                <h4>Data de Nascimento:</h4>
                            <input type="date" name="data" className={style.data}/>
                            </div>
                            <div className={style.coluna_3}>
                                <input type="number" name="cpf"
                                className={style.cpf}  placeholder="CPF:"/>
                                <input type="number" name="rg"
                                className={style.rg}  placeholder="RG:"/>
                                <input type="text" name="endereco"
                                className={style.endereco} placeholder="Endereço:"/>
                            </div>
                        </div>
                    </div>
                </form>
                
                </div>
            </div>
            <div className={style.botoes}>
                        <button type="button" className={style.cancelar}>Cancelar alterações</button> 
                        {/* <!-- definir  a ação do botão  --> */}
                        <button type="submit" className={style.salvar}>Salvar</button>
                </div>
                
        </div>
    )
}
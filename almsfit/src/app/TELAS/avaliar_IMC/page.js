'use client'
import { useState } from "react";
import { ChevronRight, CircleArrowLeft } from "lucide-react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const FormularioIMC = () => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultadoIMC, setResultadoIMC] = useState(null);
    const [categoria, setCategoria] = useState("");
    const [adulto, setAdulto] = useState(0);
    const [crianca, setCrianca] = useState(0);
    const [feminino, setFeminino] = useState(0);
    const [masculino, setMasculino] = useState(0);

    const calcularIMC = (e) => {
        e.preventDefault();

        if (!altura || !peso || (adulto === crianca) || (feminino === masculino)) {
            alert("Preencha todos os campos corretamente!");
            return;
        }

        const alturaNum = parseFloat(altura);
        const pesoNum = parseFloat(peso);
        if (alturaNum <= 0 || pesoNum <= 0) {
            alert("Altura e peso devem ser valores positivos!");
            return;
        }

        if (feminino && masculino) {
            alert("Selecione apenas um gênero!");
            return;
        }

        const imc = (pesoNum / (alturaNum * alturaNum)).toFixed(2);
        setResultadoIMC(imc);

        if (imc < 18.5) setCategoria("Abaixo do peso");
        else if (imc < 24.9) setCategoria("Peso normal");
        else if (imc < 29.9) setCategoria("Sobrepeso");
        else setCategoria("Obesidade");



        const valoresApresentados = {
            altura: alturaNum,
            peso: pesoNum,
            adulto: adulto,
            crianca: crianca,
            feminino: feminino,
            masculino: masculino,
            resultadoIMC: imc,
        };

        console.log(valoresApresentados);
    };

    return (
        <div className={styles.containerFormulario}>
            <div className={styles.campoSuperior}>
                <Link href="/" className={styles.linkVoltar}><CircleArrowLeft size={50} /></Link>
            </div>
            <div className={styles.conteudoFormulario}>

                <form className={styles.formulario} onSubmit={calcularIMC}>

                    <div className={styles.campoFormularioFundo}>
                        <h2 className={styles.tituloFormulario}>Calcule seu IMC</h2>
                        <div className={styles.campoSelecione}>
                            <label>
                                Selecione:
                            </label>
                            <div className={styles.campoSelecionarchekBox}>
                                <label>
                                    <input className={styles.campoChekBox}  type="checkbox" onChange={(e) => setAdulto(e.target.checked ? 1 : 0)} /> Adulto
                                </label>
                                <label>
                                    <input className={styles.campoChekBox}  type="checkbox" onChange={(e) => setCrianca(e.target.checked ? 1 : 0)} /> Criança
                                </label>
                            </div>
                        </div>
                        <div className={styles.campoSelecione}>
                            <label>
                                Sexo:
                            </label>
                            <div className={styles.campoSelecionarchekBox}>
                                <label>
                                    <input className={styles.campoChekBox} type="checkbox" onChange={(e) => setFeminino(e.target.checked ? 1 : 0)} /> Feminino
                                </label>
                                <label>
                                    <input className={styles.campoChekBox}  type="checkbox" onChange={(e) => setMasculino(e.target.checked ? 1 : 0)} /> Masculino
                                </label>
                            </div>
                        </div>
                        <div className={styles.campoInputs}>
                            <div className={styles.campoInput}>
                                <label>Altura (M):</label>
                                <input
                                    type="number"
                                    value={altura}
                                    onChange={(e) => setAltura(e.target.value)}
                                    placeholder="Digite aqui: Ex 1.70"
                                    className={styles.inputPrimeiroCampo}
                                    required
                                />
                            </div>

                            <div className={styles.campoInput}>
                                <label>Peso (kg):</label>
                                <input
                                    type="number"
                                    value={peso}
                                    onChange={(e) => setPeso(e.target.value)}
                                    placeholder="Digite aqui: Ex 70"
                                    className={styles.inputPrimeiroCampo}
                                    required
                                />
                            </div>
                        </div>
                        {resultadoIMC && (
                            <div className={styles.resultadoIMC}>
                                <h3>Seu IMC: {resultadoIMC}</h3>
                                <p>Categoria: {categoria}</p>
                            </div>
                        )}
                    </div>

                    <button type="submit" className={styles.botaoEnviarFormulario}>
                        Calcular <span className={styles.setaBotao}><ChevronRight /></span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormularioIMC;

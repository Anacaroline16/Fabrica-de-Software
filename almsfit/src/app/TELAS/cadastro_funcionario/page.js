'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Eye, EyeOff, ChevronRight, ChevronDown, ChevronUp, CircleArrowLeft } from "lucide-react";

const meses = [
    { nome: "Janeiro", dias: 31 },
    { nome: "Fevereiro", dias: 28 },
    { nome: "Março", dias: 31 },
    { nome: "Abril", dias: 30 },
    { nome: "Maio", dias: 31 },
    { nome: "Junho", dias: 30 },
    { nome: "Julho", dias: 31 },
    { nome: "Agosto", dias: 31 },
    { nome: "Setembro", dias: 30 },
    { nome: "Outubro", dias: 31 },
    { nome: "Novembro", dias: 30 },
    { nome: "Dezembro", dias: 31 }
];

const calcularDiasDoMes = (mes, ano) => {
    if (mes === "Fevereiro") {
        return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0) ? 29 : 28;
    }
    return meses.find((m) => m.nome === mes)?.dias || 30;
};

function Dropdown({ label, valorSelecionado, opcoes, aoSelecionar }) {
    const [dropdownAberto, setDropdownAberto] = useState(false);

    const toggleDropdown = () => {
        setDropdownAberto((prev) => !prev);
    };

    return (
        <div className={styles.campoDropDown}>
            <div className={styles.dropDrown} onClick={toggleDropdown}>
                <div className={styles.labelDropDown}>
                    <label className={styles.nomeDropDown}>{label}:</label>
                    <div className={styles.valorSelecionado}>{valorSelecionado}</div>
                    <div className={styles.chevronDropDown}>{dropdownAberto ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
                </div>
                {dropdownAberto && (
                    <div className={styles.containerOpcoesDropDown}>
                        <ul className={styles.ulOpcoesDropDown}>
                            {opcoes.map((opcao) => (
                                <li
                                    key={opcao}
                                    className={styles.opcoesDropDown}
                                    onClick={() => {
                                        aoSelecionar(opcao);
                                        toggleDropdown();
                                    }}
                                >
                                    {opcao}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function CadastrarFuncionario() {
    const [telefone, setTelefone] = useState("+55 ");
    const [cpf, setCpf] = useState("");
    const [cpfMessage, setCpfMessage] = useState("");
    const [anoSelecionado, setAnoSelecionado] = useState(new Date().getFullYear());
    const [mesSelecionado, setMesSelecionado] = useState("Janeiro");
    const [diaSelecionado, setDiaSelecionado] = useState(1);
    const [diasDisponiveis, setDiasDisponiveis] = useState([]);
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [formacao, setFormacao] = useState("");
    const [formacoesDisponiveis, setFormacoesDisponiveis] = useState([]);
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmar, setShowPasswordConfirmar] = useState(false);
    const [cep, setCep] = useState("");
    const [numeroCasa, setNumeroCasa] = useState("");
    const [complemento, setComplemento] = useState("");

    const [caixaAberta, setCaixaAberta] = useState(false);

    const handletelefoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 0) {
            value = `+55 (${value.slice(0, 2)}) ${value.slice(2, 7)}${value.length > 7 ? "-" + value.slice(7, 11) : ""}`;
        }
        setTelefone(value);
    };

    const handleCpfChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) return;
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
        value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{2})/, "$1.$2.$3-$4");
        setCpf(value);
        if (value.length === 14) validateCpf(value);
    };

    const validateCpf = (cpf) => {
        cpf = cpf.replace(/[.-]/g, "");
        if (/^(\d)\1+$/.test(cpf)) {
            setCpf("");
            alert("CPF inválido!");
            return;
        }
        let sum = 0, rest;
        for (let i = 1; i <= 9; i++) sum += parseInt(cpf[i - 1]) * (11 - i);
        rest = (sum * 10) % 11;
        if (rest === 10 || rest === 11) rest = 0;
        if (rest !== parseInt(cpf[9])) {
            setCpf("");
            alert("CPF inválido!");
            return;
        }
        sum = 0;
        for (let i = 1; i <= 10; i++) sum += parseInt(cpf[i - 1]) * (12 - i);
        rest = (sum * 10) % 11;
        if (rest === 10 || rest === 11) rest = 0;
        if (rest !== parseInt(cpf[10])) {
            setCpf("");
            alert("CPF inválido!");
            return;
        }
        setCpfMessage("CPF válido!");
    };

    useEffect(() => {
        const dias = Array.from(
            { length: calcularDiasDoMes(mesSelecionado, anoSelecionado) },
            (_, i) => i + 1
        );
        if (!dias.includes(diaSelecionado)) {
            setDiaSelecionado(dias[dias.length - 1]);
        }
        setDiasDisponiveis(dias);
        document.body.style.overflow = caixaAberta ? "hidden" : "auto";

        if (caixaAberta) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [mesSelecionado, anoSelecionado, caixaAberta]);

    const isStrongPassword = (pwd) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mesesNumeros = {
            Janeiro: "01", Fevereiro: "02", Março: "03", Abril: "04",
            Maio: "05", Junho: "06", Julho: "07", Agosto: "08",
            Setembro: "09", Outubro: "10", Novembro: "11", Dezembro: "12"
        };

        const mesNumero = mesesNumeros[mesSelecionado];

        const formData = new FormData();
        formData.append("nome", nome);
        formData.append("senha", password);
        formData.append("cpf", cpf);
        formData.append("dataDeNascimento", `${anoSelecionado}-${mesNumero}-${String(diaSelecionado).padStart(2, '0')}`);
        formData.append("email", email);
        formData.append("telefone", telefone);
        formData.append("cep", cep);
        formData.append("numeroCasa", numeroCasa);
        formData.append("complemento", complemento);
        formData.append("formacao", formacao);

        let dataAtual = new Date();
        let anoAtual = dataAtual.getUTCFullYear();
        let mesAtual = dataAtual.getUTCMonth() + 1;
        let diaAtual = dataAtual.getUTCDate();

        let mesRecebido = parseInt(mesNumero);

        let anoNascimentoMinimo = anoAtual - 18;

        if (anoSelecionado > anoNascimentoMinimo ||
            (anoSelecionado === anoNascimentoMinimo && mesRecebido > mesAtual) ||
            (anoSelecionado === anoNascimentoMinimo && mesRecebido === mesAtual && diaSelecionado > diaAtual)) {
            alert("Você deve ter 18 anos completos para se cadastrar.");
            return;
        }

        if (!isStrongPassword(password)) {
            alert("A senha deve conter pelo menos 8 caracteres, incluindo números, letras maiúsculas e minúsculas e um caractere especial.");
            return;
        }

        if (password !== confirmPassword) {
            alert("As senhas não coincidem. Tente novamente.");
            return;
        }

        fetch("https://almsfitapi.dev.vilhena.ifro.edu.br/api/funcionarios", {
            method: "POST",
            body: formData,
        })
            .then((res) => {
                if (!res.ok) throw new Error(`Erro: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                console.log("Cadastro feito com sucesso:", data);
                setCaixaAberta(true);
            })
            .catch((error) => {
                console.error("Erro no cadastro:", error);
                alert("Erro no cadastro. Verifique os dados.");
            });
    };

    return (
        <div className={styles.containerFormulario} style={{ overflow: caixaAberta ? "hidden" : "auto" }}>
            <div className={styles.campoSuperior}>
                <Link href="/" className={styles.linkVoltar}><CircleArrowLeft size={50} /></Link>
            </div>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <div className={styles.conteudoFormulario}>
                    <div className={styles.campoInputs}>
                        <div className={styles.imagemUsuario}>
                            <Image src={'/images/iconeUsuarioAnonimo.png'} width={150} height={150} alt="IconeUsuarioAnonimo" />
                        </div>
                        <div className={styles.inputPrimeiroCampo}>
                            <label>Nome:</label>
                            <input type="text" onChange={(e) => setNome(e.target.value)} required />
                        </div>
                        <div className={styles.inputPrimeiroCampo}>
                            <label>Telefone:</label>
                            <input type="text" value={telefone} onChange={handletelefoneChange} maxLength={19} required />
                        </div>
                        <div className={styles.inputPrimeiroCampo}>
                            <label>Email:</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className={styles.inputPrimeiroCampo}>
                            <label>CPF:</label>
                            <input type="text" value={cpf} onChange={handleCpfChange} maxLength={14} required />
                        </div>
                        {cpfMessage && <p className={styles.mensagemCpf}>{cpfMessage}</p>}
                        <div className={styles.inputPrimeiroCampo}>
                            <label>Formação:</label>
                            <input type="text" onChange={(e) => setFormacao(e.target.value)} required />
                        </div>
                        <div className={styles.inputPrimeiroCampo}>
                            <label>CEP:</label>
                            <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} required />
                        </div>
                        <div className={styles.inputPrimeiroCampo}>
                            <label>Número da Casa:</label>
                            <input type="text" value={numeroCasa} onChange={(e) => setNumeroCasa(e.target.value)} required />
                        </div>
                        <div className={styles.inputPrimeiroCampo}>
                            <label>Complemento:</label>
                            <input type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                        </div>
                    </div>
                    <div className={styles.campoDropDownNascimento}>
                        <Dropdown label="Dia" valorSelecionado={diaSelecionado} opcoes={diasDisponiveis} aoSelecionar={setDiaSelecionado} />
                        <Dropdown label="Mês" valorSelecionado={mesSelecionado} opcoes={meses.map(m => m.nome)} aoSelecionar={setMesSelecionado} />
                        <Dropdown label="Ano" valorSelecionado={anoSelecionado} opcoes={Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i)} aoSelecionar={setAnoSelecionado} />
                    </div>

                    <div className={styles.inputPrimeiroCampoSenha}>
                        <label className={styles.labelCampoSenha}>Criar senha:</label>
                        <div className={styles.containerInputSenha}>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Digite sua senha"
                                required
                                className={styles.inputSenha}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className={styles.botaoMostrarSenha}
                            >
                                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                            </button>
                        </div>
                    </div>

                    <p className={styles.mensagemSenha}>São aceitos os seguintes caracteres especiais @, $, !, %, *, ? e &.</p>

                    <div className={styles.inputPrimeiroCampoSenha}>
                        <label className={styles.labelCampoSenha}>Confirmar senha:</label>
                        <div className={styles.containerInputSenha}>
                            <input
                                type={showPasswordConfirmar ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirme sua senha"
                                required
                                className={styles.inputSenha}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPasswordConfirmar(!showPasswordConfirmar)}
                                className={styles.botaoMostrarSenha}
                            >
                                {showPasswordConfirmar ? <Eye size={20} /> : <EyeOff size={20} />}
                            </button>
                        </div>
                    </div>
                </div>

                <button type="submit" className={styles.botaoEnviarFormulario}>
                    Cadastrar <ChevronRight size={20} className={styles.setaBotao} />
                </button>
            </form>
            {caixaAberta && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <button className={styles.closeButton}></button>
                        <Link href="/">
                            <Image src="/assets/seta_voltar.png" width="30" height="30" alt="Seta voltar" className={styles.setaVoltar} onClick={() => setCaixaAberta(false)} />
                        </Link>
                        <div className={styles.div}>
                            <h2 className={styles.frasebotao}>CADASTRO FINALIZADO!</h2>
                            <Image src="/assets/cadastroFinalizado.png" width="60" height="60" alt="Seta voltar" className={styles.finalizado} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

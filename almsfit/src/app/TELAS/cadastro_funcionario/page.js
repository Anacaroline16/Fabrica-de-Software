// 'use client';
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import styles from "./page.module.css";
// import Link from "next/link";
// import { Eye, EyeOff, ChevronRight, ChevronDown, ChevronUp, CircleArrowLeft } from "lucide-react";

// const meses = [
//     { nome: "Janeiro", dias: 31 },
//     { nome: "Fevereiro", dias: 28 },
//     { nome: "Março", dias: 31 },
//     { nome: "Abril", dias: 30 },
//     { nome: "Maio", dias: 31 },
//     { nome: "Junho", dias: 30 },
//     { nome: "Julho", dias: 31 },
//     { nome: "Agosto", dias: 31 },
//     { nome: "Setembro", dias: 30 },
//     { nome: "Outubro", dias: 31 },
//     { nome: "Novembro", dias: 30 },
//     { nome: "Dezembro", dias: 31 }
// ];

// const calcularDiasDoMes = (mes, ano) => {
//     if (mes === "Fevereiro") {
//         return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0) ? 29 : 28;
//     }
//     return meses.find((m) => m.nome === mes)?.dias || 30;
// };

// function Dropdown({ label, valorSelecionado, opcoes, aoSelecionar }) {
//     const [dropdownAberto, setDropdownAberto] = useState(false);

//     const toggleDropdown = () => {
//         setDropdownAberto((prev) => !prev);
//     };

//     return (
//         <div className={styles.campoDropDown}>
//             <div className={styles.dropDrown} onClick={toggleDropdown}>
//                 <div className={styles.labelDropDown}>
//                     <label className={styles.nomeDropDown}>{label}:</label>
//                     <div className={styles.valorSelecionado}>{valorSelecionado}</div>
//                     <div className={styles.chevronDropDown}>{dropdownAberto ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
//                 </div>
//                 {dropdownAberto && (
//                     <div className={styles.containerOpcoesDropDown}>
//                         <ul className={styles.ulOpcoesDropDown}>
//                             {opcoes.map((opcao) => (
//                                 <li key={opcao} className={styles.opcoesDropDown} onClick={() => { aoSelecionar(opcao), toggleDropdown }}>
//                                     {opcao}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default function CadastrarFuncionario() {
//     const [telefone, setTelefone] = useState("+55 ");
//     const [cpf, setCpf] = useState("");
//     const [cpfMessage, setCpfMessage] = useState("");
//     const [anoSelecionado, setAnoSelecionado] = useState(new Date().getFullYear());
//     const [mesSelecionado, setMesSelecionado] = useState("Janeiro");
//     const [diaSelecionado, setDiaSelecionado] = useState(1);
//     const [diasDisponiveis, setDiasDisponiveis] = useState([]);
//     const [password, setPassword] = useState("");
//     const [nome, setNome] = useState("");
//     const [formacao, setFormacao] = useState("");
//     // const [formacoesDisponiveis, setFormacoesDisponiveis] = useState([]);
//     const [email, setEmail] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [showPassword, setShowPassword] = useState(false);
//     const [showPasswordConfirmar, setShowPasswordConfrimar] = useState(false);

//     const [caixaAberta, setCaixaAberta] = useState(false);


//     const handletelefoneChange = (e) => {
//         let value = e.target.value.replace(/\D/g, "");
//         if (value.length > 2) {
//             value = `+55 (${value.slice(2, 4)}) ${value.slice(4, 9)}${value.length > 9 ? "-" + value.slice(9, 13) : ""}`;
//         }
//         setTelefone(value);
//     };

//     const handleCpfChange = (e) => {
//         let value = e.target.value.replace(/\D/g, "");
//         if (value.length > 11) return;
//         value = value.replace(/(\d{3})(\d)/, "$1.$2");
//         value = value.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
//         value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{2})/, "$1.$2.$3-$4");
//         setCpf(value);
//         if (value.length === 14) validateCpf(value);
//     };

//     const validateCpf = (cpf) => {
//         cpf = cpf.replace(/[.-]/g, "");
//         if (/^(\d)\1+$/.test(cpf)) {
//             setCpf("");
//             alert("CPF inválido!");
//             return;
//         }
//         let sum = 0, rest;
//         for (let i = 1; i <= 9; i++) sum += parseInt(cpf[i - 1]) * (11 - i);
//         rest = (sum * 10) % 11;
//         if (rest === 10 || rest === 11) rest = 0;
//         if (rest !== parseInt(cpf[9])) {
//             setCpf("");
//             alert("CPF inválido!");
//             return;
//         }
//         sum = 0;
//         for (let i = 1; i <= 10; i++) sum += parseInt(cpf[i - 1]) * (12 - i);
//         rest = (sum * 10) % 11;
//         if (rest === 10 || rest === 11) rest = 0;
//         if (rest !== parseInt(cpf[10])) {
//             setCpf("");
//             alert("CPF inválido!");
//             return;
//         }
//         setCpfMessage("CPF válido!");
//     };



//     useEffect(() => {
//         const dias = Array.from(
//             { length: calcularDiasDoMes(mesSelecionado, anoSelecionado) },
//             (_, i) => i + 1
//         );
//         if (!dias.includes(diaSelecionado)) {
//             setDiaSelecionado(dias[dias.length - 1]);
//         }
//         setDiasDisponiveis(dias);
//         document.body.style.overflow = caixaAberta ? "hidden" : "auto";

//         if (caixaAberta) {
//             document.body.classList.add("no-scroll");
//         } else {
//             document.body.classList.remove("no-scroll");
//         }

//     }, [mesSelecionado, anoSelecionado, caixaAberta]);


//     const isStrongPassword = (pwd) => {
//         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         let dataAtual = new Date();
//         let anoAtual = dataAtual.getUTCFullYear();
//         let mesAtual = dataAtual.getUTCMonth() + 1;
//         let diaAtual = dataAtual.getUTCDate();

//         const meses = {
//             "janeiro": 1, "fevereiro": 2, "março": 3, "abril": 4,
//             "maio": 5, "junho": 6, "julho": 7, "agosto": 8,
//             "setembro": 9, "outubro": 10, "novembro": 11, "dezembro": 12
//         };

//         let mesRecebido = meses[mesSelecionado.toLowerCase()];

//         let anoNascimentoMinimo = anoAtual - 18;

//         if (anoSelecionado > anoNascimentoMinimo ||
//             (anoSelecionado === anoNascimentoMinimo && mesRecebido > mesAtual) ||
//             (anoSelecionado === anoNascimentoMinimo && mesRecebido === mesAtual && diaSelecionado > diaAtual)) {
//             alert("Você deve ter 18 anos completos para se cadastrar.");
//             return;
//         }

//         if (!isStrongPassword(password)) {
//             alert("A senha deve conter pelo menos 8 caracteres, incluindo números, letras maiúsculas e minúsculas e um caractere especial.");
//             return;
//         }

//         if (password !== confirmPassword) {
//             alert("As senhas não coincidem. Tente novamente.");
//             return;
//         }


//         const valoresInformado = {
//             nome: nome,
//             telefone: telefone,
//             cpf: cpf,
//             email: email,
//             formacao: formacao,
//             senha: password,
//             dia: diaSelecionado,
//             mes: mesSelecionado,
//             ano: anoSelecionado,
//         };

//         setCaixaAberta(true)
//     };

//     // useEffect(() => {
//     //     fetch("https://almsfitapi.dev.vilhena.ifro.edu.br/api/formacao") 
//     //         .then(res => {
//     //         if (!res.ok) throw new Error(`Erro: ${res.status}`);
//     //         return res.json();
//     //         })
//     //         .then(data => setFormacoesDisponiveis(data))
//     //         .catch(err => console.error("Erro ao buscar formações:", err));
//     //     }, []);

//     return (
//         <div className={styles.containerFormulario} style={{ overflow: caixaAberta ? "hidden" : "auto" }}>
//             <div className={styles.campoSuperior}>
//                 <Link href="/" className={styles.linkVoltar}><CircleArrowLeft size={50} /></Link>
//             </div>
//             <form onSubmit={handleSubmit} className={styles.formulario}>
//                 <div className={styles.conteudoFormulario}>
//                     <div className={styles.campoInputs}>
//                         <div className={styles.imagemUsuario}>
//                             <Image src={'/images/iconeUsuarioAnonimo.png'} width={150} height={150} alt="IconeUsuarioAnonimo" />
//                         </div>
//                         <div className={styles.inputPrimeiroCampo}>
//                             <label>Nome:</label>
//                             <input type="text" onChange={(e) => setNome(e.target.value)} required />
//                         </div>
//                         <div className={styles.inputPrimeiroCampo}>
//                             <label>Telefone:</label>
//                             <input type="text" value={telefone} onChange={handletelefoneChange} maxLength={19} required />
//                         </div>
//                         <div className={styles.inputPrimeiroCampo}>
//                             <label>Email:</label>
//                             <input type="email" onChange={(e) => { setEmail(e.target.value) }} required />
//                         </div>
//                         <div className={styles.inputPrimeiroCampo}>
//                             <label>CPF:</label>
//                             <input type="text" value={cpf} onChange={handleCpfChange} maxLength={14} required />
//                         </div>
//                         {cpfMessage && <p className={styles.mensagemCpf}>{cpfMessage}</p>}
//                         <div className={styles.inputPrimeiroCampo}>
//                             <label>Formação:</label>
//                             <input type="text" onChange={(e) => { setFormacao(e.target.value) }} required />
//                             {/* <select onChange={(e) => setFormacao(e.target.value)} required>
//                                 <option value="">Selecione uma formação</option>
//                                 {formacoesDisponiveis.map((item) => (
//                                     <option key={item.idformacao} value={item.formacao}>
//                                     {item.formacao}
//                                     </option>
//                                 ))}
//                             </select> */}
//                         </div>
//                     </div>
//                     <div className={styles.campoDropDownNascimento}>
//                         <Dropdown label="Dia" valorSelecionado={diaSelecionado} opcoes={diasDisponiveis} aoSelecionar={setDiaSelecionado} />
//                         <Dropdown label="Mês" valorSelecionado={mesSelecionado} opcoes={meses.map(m => m.nome)} aoSelecionar={setMesSelecionado} />
//                         <Dropdown label="Ano" valorSelecionado={anoSelecionado} opcoes={Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i)} aoSelecionar={setAnoSelecionado} />
//                     </div>

//                     <div className={styles.inputPrimeiroCampoSenha}>
//                         <label className={styles.labelCampoSenha}>Criar senha:</label>
//                         <div className={styles.containerInputSenha}>
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 placeholder="Digite sua senha"
//                                 required
//                                 className={styles.inputSenha}
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => setShowPassword(!showPassword)}
//                                 className={styles.botaoMostrarSenha}
//                             >
//                                 {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
//                             </button>
//                         </div>
//                     </div>

//                     <p className={styles.mensagemSenha}>São aceitos os seguintes caracteres especiais @, $, !, %, *, ? e &.</p>

//                     <div className={styles.inputPrimeiroCampoSenha}>
//                         <label className={styles.labelCampoSenha}>Confirmar senha:</label>
//                         <div className={styles.containerInputSenha}>
//                             <input
//                                 type={showPasswordConfirmar ? "text" : "password"}
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 placeholder="Confirme sua senha"
//                                 required
//                                 className={styles.inputSenha}
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => setShowPasswordConfrimar(!showPasswordConfirmar)}
//                                 className={styles.botaoMostrarSenha}
//                             >
//                                 {showPasswordConfirmar ? <Eye size={20} /> : <EyeOff size={20} />}
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <button type="submit" className={styles.botaoEnviarFormulario}>Cadastrar <ChevronRight size={20} className={styles.setaBotao} /></button>
//             </form>
//             {caixaAberta && (
//                 <div className={styles.overlay}>
//                     <div className={styles.modal}>
//                         <button className={styles.closeButton}>
//                         </button>
//                         <Link href="/"><Image src="/assets/seta_voltar.png" width="30" height="30" alt="Seta voltar" className={styles.setaVoltar} onClick={() => setCaixaAberta(false)} /></Link>
//                         <div className={styles.div}>
//                             <h2 className={styles.frasebotao}>CADASTRO FINALIZADO!</h2>
//                             <Image src="/assets/cadastroFinalizado.png" width="60" height="60" alt="Seta voltar" className={styles.finalizado} />
//                         </div>

//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
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
                    <div className={styles.chevronDropDown}>
                        {dropdownAberto ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                </div>
                {dropdownAberto && (
                    <div className={styles.containerOpcoesDropDown}>
                        <ul className={styles.ulOpcoesDropDown}>
                            {opcoes.map((opcao) => (
                                <li key={opcao} className={styles.opcoesDropDown} onClick={() => { aoSelecionar(opcao); toggleDropdown(); }}>
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
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmar, setShowPasswordConfrimar] = useState(false);
    const [cep, setCep] = useState("");
    const [numeroCasa, setNumeroCasa] = useState("");
    const [complemento, setComplemento] = useState("");

    const [caixaAberta, setCaixaAberta] = useState(false);

    const [fotoPerfil, setFotoPerfil] = useState(null);
    const [certificado, setCertificado] = useState(null);

    const handletelefoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 2) {
            value = `+55 (${value.slice(2, 4)}) ${value.slice(4, 9)}${value.length > 9 ? "-" + value.slice(9, 13) : ""}`;
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Foi adicionado pois foi colocado novos campos
        formData.append("cep", cep);
        formData.append("numeroCasa", numeroCasa);
        formData.append("complemento", complemento);

        const mesesNumero = {
            "janeiro": 1, "fevereiro": 2, "março": 3, "abril": 4,
            "maio": 5, "junho": 6, "julho": 7, "agosto": 8,
            "setembro": 9, "outubro": 10, "novembro": 11, "dezembro": 12
        };

        const mesRecebido = mesesNumero[mesSelecionado.toLowerCase()];
        const dataNascimento = `${anoSelecionado}-${String(mesRecebido).padStart(2, '0')}-${String(diaSelecionado).padStart(2, '0')}`;

        let dataAtual = new Date();
        let anoAtual = dataAtual.getUTCFullYear();
        let mesAtual = dataAtual.getUTCMonth() + 1;
        let diaAtual = dataAtual.getUTCDate();

        let anoMinimo = anoAtual - 18;

        if (anoSelecionado > anoMinimo ||
            (anoSelecionado === anoMinimo && mesRecebido > mesAtual) ||
            (anoSelecionado === anoMinimo && mesRecebido === mesAtual && diaSelecionado > diaAtual)) {
            alert("Você deve ter 18 anos completos para se cadastrar.");
            return;
        }

        if (!isStrongPassword(password)) {
            alert("A senha deve conter pelo menos 8 caracteres, incluindo números, letras maiúsculas e minúsculas e um caractere especial.");
            return;
        }

        if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }

       const formData = new FormData();
        formData.append("nome", nome);
        formData.append("senha", senha);
        formData.append("cpf", cpf);
        formData.append("dataDeNascimento", dataDeNascimento);
        formData.append("email", email);
        formData.append("telefone", telefone);
        formData.append("formacao", formacao);
        formData.append("certificado", certificado);
        formData.append("fotoPerfil", fotoPerfil);

        
        formData.append("cep", cep);
        formData.append("numeroCasa", numeroCasa);
        formData.append("complemento", complemento);

         try {
            const response = await fetch("http://localhost:9000/funcionarios", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Funcionário cadastrado com sucesso!");
            } else {
                alert("Erro ao cadastrar funcionário.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
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
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} required />
                        </div>
                        <div className={styles.inputPrimeiroCampo}>
                            <label>CPF:</label>
                            <input type="text" value={cpf} onChange={handleCpfChange} maxLength={14} required />
                        </div>
                        {cpfMessage && <p className={styles.mensagemCpf}>{cpfMessage}</p>}
                        <div className={styles.inputPrimeiroCampo}>
                            <label>Formação:</label>
                            <input type="text" onChange={(e) => { setFormacao(e.target.value) }} required />
                        </div>
                        <div className={styles.inputPrimeiroCampo}>
                            <label>Foto de perfil:</label>
                            <input type="file" onChange={(e) => setFotoPerfil(e.target.files[0])} />
                        </div>
                        <div className={styles.inputPrimeiroCampo}>
                            <label>Certificado:</label>
                            <input type="file" onChange={(e) => setCertificado(e.target.files[0])} />
                        </div>
                    </div>
                    

                    <div className={styles.campoDropDownNascimento}>
                        <Dropdown label="Dia" valorSelecionado={diaSelecionado} opcoes={diasDisponiveis} aoSelecionar={setDiaSelecionado} />
                        <Dropdown label="Mês" valorSelecionado={mesSelecionado} opcoes={meses.map(m => m.nome)} aoSelecionar={setMesSelecionado} />
                        <Dropdown label="Ano" valorSelecionado={anoSelecionado} opcoes={Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i)} aoSelecionar={setAnoSelecionado} />
                    </div>
                    <div className={styles.inputPrimeiroCampo}>
                        <label>CEP:</label>
                        <input
                            type="text"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputPrimeiroCampo}>
                        <label>Número da Casa:</label>
                        <input
                            type="text"
                            value={numeroCasa}
                            onChange={(e) => setNumeroCasa(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputPrimeiroCampo}>
                        <label>Complemento:</label>
                        <input
                            type="text"
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                        />
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
                                onClick={() => setShowPasswordConfrimar(!showPasswordConfirmar)}
                                className={styles.botaoMostrarSenha}
                            >
                                {showPasswordConfirmar ? <Eye size={20} /> : <EyeOff size={20} />}
                            </button>
                        </div>
                    </div>
                </div>

                <button type="submit" className={styles.botaoEnviarFormulario}>Cadastrar <ChevronRight size={20} className={styles.setaBotao} /></button>
            </form>

            {caixaAberta && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <Link href="/"><Image src="/assets/seta_voltar.png" width="30" height="30" alt="Seta voltar" className={styles.setaVoltar} onClick={() => setCaixaAberta(false)} /></Link>
                        <div className={styles.div}>
                            <h2 className={styles.frasebotao}>CADASTRO FINALIZADO!</h2>
                            <Image src="/assets/cadastroFinalizado.png" width="60" height="60" alt="Cadastro finalizado" className={styles.finalizado} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

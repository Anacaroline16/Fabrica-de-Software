'use client'

import Image from "next/image"
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link"
import styles from "./cadastroCliente.module.css"

export default function CadastroCliente() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [caixaAberta, setCaixaAberta] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    // Pega os valores dos selects de data e monta a string YYYY-MM-DD
    const dia = form.dia.value.padStart(2, '0');
    const mes = ("0" + (["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"].indexOf(form.mes.value) + 1)).slice(-2);
    const ano = form.ano.value;

    const dataDeNascimento = `${ano}-${mes}-${dia}`;

    // Cria FormData e adiciona dataDeNascimento manualmente
    const formData = new FormData(form);
    formData.set('dataDeNascimento', dataDeNascimento);

    // Remover os selects, porque agora data está concatenada
    formData.delete('dia');
    formData.delete('mes');
    formData.delete('ano');

    // Validar se as senhas conferem antes de enviar
    const senha = form.senha.value;
    const confirmarSenha = form.confirmarSenha.value;
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch("http://localhost:9000/cliente", {
        method: "POST",
        body: formData,
        });

      if (response.ok) {
        setCaixaAberta(true);
        form.reset();
      } else {
        const data = await response.json();
        alert("Erro ao cadastrar: " + (data.mensagem || "Erro desconhecido"));
      }
    } catch (error) {
      alert("Erro na comunicação com o servidor: " + error.message);
    }
  };

  return (
    <div>
      <div className={styles.alinhar}>
        <div className={styles.containerPrincipal}>
          <div className={styles.cadastro}>
            <Image src="/assets/perfil.png" width="110" height="110" alt="perfil" className={styles.perfil} />
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>

            <input name="nome" type="text" placeholder="Digite seu nome:" required />

            <input name="telefone" type="tel" placeholder="Digite seu telefone:" required />

            <input name="email" type="email" placeholder="Digite seu email:" required />

            <input name="cpf" type="text" placeholder="Digite seu CPF:" required />

            <input name="telefoneEmergencia" type="tel" placeholder="Telefone de emergência:" required />

            <input name="restricoesMedicas" type="text" placeholder="Restrições médicas:" required />

            {/* Data de nascimento com selects */}
            <div className={styles.dateInputs}>
              <select name="dia" className={styles.selecao} required defaultValue="Dia">
                <option disabled>Dia</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>

              <select name="mes" className={styles.selecao} required defaultValue="Mês">
                <option disabled>Mês</option>
                {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"].map((mes, i) => (
                  <option key={i} value={mes}>{mes}</option>
                ))}
              </select>

              <select name="ano" className={styles.selecao} required defaultValue="Ano">
                <option disabled>Ano</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={2025 - i}>{2025 - i}</option>
                ))}
              </select>
            </div>

            {/* Foto de perfil */}
            <label className={styles.label}>Foto de Perfil (opcional):</label>
            <input name="fotoPerfil" type="file" accept="image/*" />

            {/* Senha */}
            <div className={styles.senhaContainer}>
              <input
                name="senha"
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

            {/* Confirmar senha */}
            <div className={styles.senhaContainer}>
              <input
                name="confirmarSenha"
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
              <button className={styles.closeButton} onClick={() => setCaixaAberta(false)}></button>
              <Link href="/">
                <Image src="/assets/seta_voltar.png" width="30" height="30" alt="Seta voltar" className={styles.setaVoltar} />
              </Link>
              <div className={styles.div}>
                <h2 className={styles.frasebotao}>CADASTRO FINALIZADO!</h2>
                <Image src="/assets/cadastroFinalizado.png" width="60" height="60" alt="Cadastro finalizado" className={styles.finalizado} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

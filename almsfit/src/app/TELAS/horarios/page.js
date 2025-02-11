import React from "react";
import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import "./horarios.module.css";

export default function Horário() {
  return (
    <div className="container">
      <main>
        <h1>HORÁRIOS DE FUNCIONAMENTO</h1>
        <img src="./img/Rectangle 98.png" className="retangulo-1" alt="" />
        <img src="./img/Rectangle 97.png" className="retangulo-2" alt="" />
        <img src="./img/Rectangle 100.png" className="retangulo-3" alt="" />
        <img src="./img/Rectangle 97 (1).png" className="retangulo-4" alt="" />
        <div className="horarios">
          <p className="TituloMaior">Segunda a sexta:</p>
          <p className="subtitulo">06h00 à 11h30</p>
          <p className="subtitulo">13h00 à 22h00</p>
          <p className="TituloMaior">Sábados e Domingos:</p>
          <p className="subtitulo">15h00 à 18h30</p>
          <p className="TituloMaior">Feriados e eventos:</p>
          <p className="subtitulo">06h00 à 12h00</p>
        </div>
        <Image src="./img/Vector (11).png" className="time" alt="Relógio" />
      </main>
    </div>
  );
};

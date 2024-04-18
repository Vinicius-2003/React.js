"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./Components/menu";
import React, { useState } from "react";
import MenuTexto from "./Components/menuTexto";
import Link from "next/link";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <body>

      <div className="titulo-do-app">
        <h1>Mackarpool</h1>
      </div>

      <Menu/>

      <div className="corpo-do-app">
      <MenuTexto title={"App"} text={"A ideia desse App é diminuir o número de carros que veem para o Mackenzie visando diminuir a liberação de CO2. Mapeamos a sua redondeza e vemos se há alunos que vão para o Mackenzie perto de você, assim poderá pegar uma carona, economizar na gasolina, diminuir o estresse e fazer novas amizades!  "}/>
      <MenuTexto title={"Poluição"} text={""}/>

      </div>
    </body>
  );
}

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
        <h1>Mackarpoll</h1>
      </div>

      <Menu />

      <div className="corpo-do-app">
        <MenuTexto title={"Por que o Mackarpool foi criado?"} text={"A ideia desse aplicativo é integrar o maior número de estudantes possível para darem carona uns aos outros a fim de reduzir a quantidade de carros que se deslocam até o Mackenzie diariamente, visando diminuir a emissão de CO2."} />
        <MenuTexto title={"Poluição nos dias de hoje."} text={
          <>
            <p>O transporte individual é um dos hábitos mais poluentes da sociedade moderna. A emissão de gases poluentes por veículos automotores é um dos principais contribuintes para a poluição do ar, um problema grave que afeta a saúde pública e o meio ambiente. Segundo a Organização Mundial da Saúde (OMS), a poluição do ar causa cerca de 7 milhões de mortes prematuras por ano no mundo. No Brasil, estima-se que a poluição do ar seja responsável por cerca de 50 mil mortes por ano."</p>
            <p>Ao compartilhar caronas, podemos reduzir significativamente o número de carros nas ruas, diminuindo assim a emissão de gases poluentes e os impactos negativos na saúde pública e no meio ambiente.</p>
          </>
        } />

        <MenuTexto title={"Vantagens da solução Mackarpoll."} text={
          <>
            <ol>
              <li>
                <p><strong>Redução da emissão de gases poluentes:</strong> Estima-se que a carona compartilhada possa reduzir em até 70% as emissões de gases poluentes por aluno.</p>
              </li>
              <li>
                <p><strong>Economia de dinheiro:</strong> Os alunos podem economizar dinheiro com gasolina, pedágios e estacionamento ao compartilhar caronas.</p>
              </li>
              <li>
                <p><strong>Diminuição do tempo no trânsito:</strong> A carona compartilhada pode ajudar a reduzir o tempo no trânsito, pois os caroneiros podem utilizar faixas exclusivas para veículos com mais de um ocupante</p>
              </li>
              <li>
                <p><strong>Fortalecimento da comunidade Mackenzie:</strong> O projeto pode promover a interação entre os alunos e a criação de um senso de comunidade.</p>
              </li>
              <li>
                <p><strong>Segurança :</strong> Graças a nossa inetgração ao banco de dados da Universidade, podemos garantir que apenas estudantes, com cadastro ativo, façam loggin em nosso aplicativo. Além disso, voltar em grupo é sempre uma opção mais segura, mesmo que o carro já traga certa segurança. </p>
              </li>
            </ol>
          </>
        } />
      </div>
    </body>
  );
}

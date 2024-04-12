import Menu from "../Components/menu";
import styles from "./page.module.css"

export default function Pagina1() {
  return (
    <div className={styles.containerTexto}>
      <Menu />
      <div className={styles.carpoolTexto}>
        <header className={styles.tituloPagina}>
          <h1>Carpool Mackenzie</h1>
        </header>
        <ul>
          <li>
            <p>
              Tendo em vista o cenário atual da condição do ar, a iniciativa
              Carpool Mackenzie, em que ela consiste ?
            <p>A ideia consiste em utilizar caronas compartilhadas para alunos do Mackenzie, dessa forma, os alunos que viriam cada um em seus carros, passariam a ir com outros alunos a fim de diminuir o número absoluto de carros. </p>
            </p>
          </li>
        </ul>
      </div>
      <h2>Formas de diminuir o dano</h2>
      <ul>
        <li><p>Escolher um ou mais dias na semana para evitar o uso de automóveis, e usar os transporte públicos. Dessa forma, mesmo que se pense que esta mudança não fará a diferença, toda alteração em prol dessa melhoria já será de grande ajuda.</p></li>
        <li><p>Outra possibilidade seria mais estudantes do Mackenzie dividirem um carro para se locomoverem para a instituição, assim, em um carro de 5 lugares, uma pessoa estaria evitando que outras 4 utilizem seus carros individuais para locomoção. </p></li>
        <li><p>Priorizar o uso de transporte público sempre que possível. O governo têm tomado medidas para tornar os transportes cada vez mais limpos e menos nocivos ao meio ambiente. </p></li>
      </ul>
    </div>
  );
}

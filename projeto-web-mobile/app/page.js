import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./Components/menu";

export default function Home() {
  return (
    <body>
      <div className="titulo">
        <h1>Mackpool</h1>
      </div>
      <Menu/>

      <div className="container-texto">
  
        <ul>
          <li>
            <p>
              Segundo o INCA(Instituto Nacional de Câncer) o ar é considerado
              poluído quando há presença de contaminantes ou de substâncias
              poluidoras na sua composição, sejam eles gases, materiais
              particulados e compostos orgânicos voláteis, que interfiram na
              saúde e no bem-estar humano, ou ainda causem efeitos danosos ao
              meio ambiente.
            </p>
          </li>
        </ul>
        <h2>O que é poluição do ar? </h2>
        <ul>
          <li>
            <p>
              Poluição do ar ou poluição atmosférica é a alteração das
              propriedades naturais da atmosfera ocasionada pela emissão de
              gases, materiais particulados ou agentes biológicos. A poluição do
              ar é causada principalmente pelas atividades antrópicas, como a
              queima de combustíveis fósseis por veículos terrestres e a
              atividade das indústrias e usinas, embora não se restrinja a esses
              fatores. Fenômenos da natureza, processos biológicos de plantas e
              animais e as queimadas naturais emitem também gases poluentes para
              a atmosfera, embora se trate de um processo natural.
            </p>
          </li>
          <li>
            <p>
              Como dito, as principais participações do homem nisso tudo
              envolvem o desmatamento e a produção de C02 originárias da queima
              de combustíveis.
            </p>
          </li>
        </ul>
        <div>
          <h1>Saúde</h1>
          <ul>
            <li>
              <p>
                Milhões de pessoas em todo o mundo estão expostas à poluição ao
                ar livre em níveis que podem ser perigosos para a saúde. Os
                efeitos da poluição do ar na saúde podem ser agudos (os sinais e
                sintomas surgem até 24 horas após o contato) ou crônicos
                (observados após dias, meses ou anos).
              </p>
            </li>
            <li>
              <p>
                A poluição do ar também pode causar doenças do sistema
                respiratório, incluindo resfriados, gripes, amigdalites,
                faringites, otites, sinusites e agravar doenças já instaladas,
                como pneumonias e tuberculose.
              </p>
            </li>
            <li>
              <p>
                Pesquisas recentes apontaram que mulheres expostas cronicamente
                à poluição do ar são mais propensas a ter problemas gestacionais
                que resultam em nascimentos prematuros ou baixo peso ao nascer e
                morte precoce dos recém-nascidos durante o primeiro mês de vida.
              </p>
            </li>
            <li>
              <p>
                Com os dados acima prova-se de extrema importância o cuidado que
                deve-se ter para previnir essas doenças e problemas de saúde.
              </p>
            </li>
          </ul>
          <h2>Prevenção</h2>
          <ol>
            <li>
              <p>
                A forma mais recomendada para se previnir e remediar doenças
                causadas pela contaminação do ar é cuidando da atmosfera onde se
                vive. Porém claro que a tecnologia têm feito sua participação na
                criação de umidificadores que fornecem um ar muito mais saudável
                para se respirar.
              </p>
            </li>
            <li>
              <p>
                Outra alternativa contudo não muito viável, é mudar-se para
                regiões no campo onde os índices de poluição e contaminação são
                menores do que os centros urbanos.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </body>
  );
}

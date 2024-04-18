import Form from "../Components/formulario/formulario";
import Menu from "../Components/menu";
import MenuTexto from "../Components/menuTexto";
import Style from "./page.module.css"

export default function Pagina2(){
    return(
        <main className={Style.corpo_contato}>
            <Menu/>
            <h1>Contate-nos</h1>
            <Form/>
        </main>
    );
}
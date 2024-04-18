import Style from "./formulario.module.css"

export default function Form(){
    return(
        <div className={Style.corpo_formulario}>
            <h2>Formulário</h2>
            <fieldset>
                <input text="text" name="nome" placeholder="Nome"></input> <br/>
                <input text="email" name="email" placeholder="Email"></input> <br/>
            </fieldset>
        </div>
    );
}
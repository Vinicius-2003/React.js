import styles from "./teste.module.css"

export default function Teste ({ item, deletar}) {

    return (
        <div className= {styles.posicao}>
            <div className={styles.dois}>
                <div>
                    <h1>{item.text}</h1>
                </div>
                <div>
                    <button onClick={() => deletar(item.id)}>Clique Aqui</button>
                </div>
            </div>
        </div>
    );}
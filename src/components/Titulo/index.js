import styles from "./Titulo.module.css";

function Titulo({ children }) {
    return (
        <div className={styles.texto}></div>
        <h1>{ children }</h1>
    )
}

export default Titulo;
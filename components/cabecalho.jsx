import style from '../styles/components/cabecalho.module.css'

export default function Cabecalho(props) {
    return (
        <header>
            <h1>{props.titulo ?? "sem titulo"}</h1>
        </header>
    )
}
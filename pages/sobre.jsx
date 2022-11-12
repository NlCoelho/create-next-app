import styleSobre from "../styles/sobre.module.css"
import Cabecalho from "../components/cabecalho"
import Navbar from "../components/Navbar"

export default function Casamento() {
    return (
        <>
            <Navbar></Navbar>
            <div className={styleSobre.sobre}>
                <Cabecalho titulo="Título usando components" />
                <picture>
                    <img src="/nathan-e-seu-pai.png" alt="imagem" />
                </picture>

            </div>
        </>
    )
}
import Image from "next/image"
import Cabecalho from "../components/cabecalho"
import Navbar from "../components/Navbar"

export default function Casamento() {
    return (
        <>
        <Navbar></Navbar>
        <div>
            <Cabecalho titulo="Nathan e seu pai Ricardo" />
            <img src="/natha-e-seu-pai.png" alt="imagem" />
            
        </div>
        </>
    )
}
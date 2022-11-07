import Link from "next/link";
import Cabecalho from "../components/cabecalho";
import Navbar from "../components/Navbar";

export default function Exemplo() {
    return (
        <>
            <Navbar></Navbar>
            <Cabecalho titulo="Fundamentos de Next.js e React" />
            <Cabecalho titulo="Cabeçalho usando component" />
        </>
    )
}
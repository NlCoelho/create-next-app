import Navbar from "../components/Navbar";
import Image from "next/image"
import styles from "../styles/Background.module.css"
import styles2 from "../styles/Typewriter.module.css"

export default function Inicio() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.background}>

      </div>
      <div className={styles2.TypeWriter}>
        <h1>DuChoop Tudo para o seu Choop</h1></div>
      <div>
        <h3>Instalar o Node.js</h3>
        <h3>Instalar o npx via npm (npm install npx)</h3>
        <h3>npm create-next-app nomedoprojeto cria um projeto pré-configurado.</h3>
        <h3>Acessar a pasta do projeto via cmd ou terminal</h3>
        <h3>code . inicia o projeto no VS Code</h3>
        <h3>npm run dev roda o projeto no servidor interno na porta 3000 (127.0.0.1:3000)</h3>
        <h3></h3>
      </div>
    </>
  )
}
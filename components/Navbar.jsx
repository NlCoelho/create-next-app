import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.Navbarlinks}>
            <Link href="/">Home</Link>
            <Link href="/jsx">JSX</Link>
            <Link href="/exemplo">Exemplo</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/teste">Teste</Link>
            <Link href="/tutorial">Tutorial</Link>
            
        </div>
    )
}
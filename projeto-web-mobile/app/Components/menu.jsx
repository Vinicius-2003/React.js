import Link  from "next/link"
import Style from './menu.module.css'
export default function Menu(){
    return(
        <nav className={Style.menu}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pagina1?name=Vinícius">Página 1</Link></li>
                <li><Link href="/pagina2">Página 2</Link></li>
            </ul>
        </nav>
    );
}
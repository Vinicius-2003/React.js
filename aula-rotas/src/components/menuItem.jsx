import Link from "next/link";
import styles from "./menu.module.css";
export default function MenuItem({icon, text, route}){
    var contentIcon = ""
    if(icon != null){
        contentIcon = <img src={icon} alt={text} />
    }
    return(
        <li>
            <Link href={route}> {contentIcon} <span>{text}</span></Link>
        </li>
    );
}
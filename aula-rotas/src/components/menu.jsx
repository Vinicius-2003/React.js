import Link from "next/link";
import styles from "./menu.module.css";
import MenuItem from "./menuItem";

export default function Menu(){
    return (
        <nav className={styles.menu}>
            <ul>
                <MenuItem icon="https://super.so/icon/light/home.svg" text="Home" route = "/"/>
                <MenuItem icon="https://super.so/icon/light/alert-circle.svg" text="About" route = "/about"/>
                <MenuItem icon="https://super.so/icon/light/phone.svg" text="Contact" route = "/contacts"/>
            </ul>
        </nav>
    )
}
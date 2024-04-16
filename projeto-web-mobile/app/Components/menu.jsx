"use client";
import React, { useState } from "react";
import Link  from "next/link"
import Style from './menu.module.css'
import MenuItem from "./menuItem";

export default function Menu(){

    const [showMenu, setShowMenu] = useState(false);

    return(
        <nav className={Style.menu}>
            <button onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? '≡' : '≡'}
            </button>
            <h3>Menu</h3>
            {showMenu && (
            <ul>
                <MenuItem icon="https://super.so/icon/light/home.svg"
                text="Home"
                route="/" />
                <MenuItem icon="https://super.so/icon/light/user-plus.svg"
                text="Mackarpool"
                route="/pagina1?name=Vinícius" />
                <MenuItem icon="https://super.so/icon/light/frown.svg"
                text="MackGraphs"
                route="/pagina2" />
            </ul>
            )}
        </nav>
    );
}
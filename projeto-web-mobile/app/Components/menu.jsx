"use client";
import React, { useState } from "react";
import Link  from "next/link"
import Style from './menu.module.css'
import MenuItem from "./menuItem";

export default function Menu(){

    const [showMenu, setShowMenu] = useState(false);

    return(
        <nav className={Style.menu}>
            {/* <button onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? '≡' : '🡳'}
            </button>
            <h3>Menu</h3>
            {showMenu && ( */}
            <ul>
                <MenuItem icon="https://super.so/icon/light/home.svg"
                text="Home"
                route="/" />
                <MenuItem icon="https://super.so/icon/light/bar-chart.svg"
                text="Sobre Poluição"
                route="/pagina1" />
                <MenuItem icon="https://super.so/icon/light/user-plus.svg"
                text="Contato"
                route="/pagina2" />
                <MenuItem icon="https://super.so/icon/light/user-plus.svg"
                text="testeApi"
                route="/pagina3" />
                <MenuItem icon="https://super.so/icon/light/user-plus.svg"
                text="teste Nova Api"
                route="/pagina4" />
                <MenuItem icon="https://super.so/icon/light/user-plus.svg"
                text="Linkando API's"
                route="/pagina5" />
            </ul>
            {/* )} */}
        </nav>
    );
}
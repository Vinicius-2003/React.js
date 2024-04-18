"use client";
import React, { useState } from "react";
import Link  from "next/link"
import Style from './menuTexto.module.css'
import MenuItem from "./menuItem";

export default function MenuTexto({title,text}){

    const [showMenu, setShowMenu] = useState(false);

    return(
        <nav className={Style.MenuTexto}>
            <button onClick={() => setShowMenu(!showMenu)}>{showMenu ? '˅' : '»'}
            </button>
            <h3>{title}</h3>
            {showMenu && (
            <p>{text}</p>
            )}
        </nav>
    );
}
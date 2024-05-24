import MenuItem from "./menuItem";

export default function Menu () {
    return (
    <div>    
        <ul>
            <MenuItem rota = "/" text= "Home"/>
            <MenuItem rota = "/about" text= "Página 1"/>
        </ul>
    </div>

    );
}
import Link from "next/link";

export default function MenuItem ( {rota, text} ) {
    return (
        <div>
            <ul>
                <Link href={rota}><h1>{text}</h1></Link>
            </ul>
        </div>
    );
}
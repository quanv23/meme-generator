import { FaCrow } from "react-icons/fa";

export default function Header() {
    return (
        <header className="header">
            <FaCrow className="header--image" size={25} />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Project 3</h4>
        </header>
    )
}
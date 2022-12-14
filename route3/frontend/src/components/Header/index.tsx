import { Link, NavLink } from "react-router-dom";
import "./styles.css";

export default function Header() {
    return (
        <header>
            <nav className="container nav-container">
                <Link to="/"><h1>MeuSite</h1></Link>
                <div className="right-nav-bar">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "nav-700 nav-item" : "nav-item"}>
                        Início
                    </NavLink>
                    <NavLink to="/offer" className={({ isActive }) => isActive ? "nav-700 nav-item" : "nav-item"}>
                        Promoção
                    </NavLink>
                    <NavLink to="/registration" className={({ isActive }) => isActive ? "nav-700 nav-item" : "nav-item"}>
                        Participar
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
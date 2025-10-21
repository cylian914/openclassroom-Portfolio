import { NavLink, Outlet } from "react-router"
import "./Nav.scss"

function Nav() {
    return (<>
        <nav>
            <div>
                <h2><a href="mailto:cylian.charbonnier@gmail.com ">Mail: cylian.charbonnier@gmail.com</a></h2>
            </div>
            <ul id="nav">
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/Projects">Projects</NavLink></li>
                <li><NavLink to="/Competences">Compétences</NavLink></li>
                <li><NavLink to="/Autre">Autre</NavLink></li>
            </ul>
        </nav>
        <Outlet />
    </>)
}

export default Nav
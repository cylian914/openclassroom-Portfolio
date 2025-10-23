import { NavLink, Outlet } from "react-router"
import "./Nav.scss"

function Nav() {
    return (<>
        <nav>
            <h2><a href="mailto:cylian.charbonnier@gmail.com ">Mail: cylian.charbonnier@gmail.com</a></h2>
            <h1 className='nav-title'>Cylian Charbonnier - Portfolio </h1>
            <ul id="nav">
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/Projects">Projects</NavLink></li>
                <li><NavLink to="/Competences">Compétences</NavLink></li>
                <li><NavLink to="/Apropos">Apropos</NavLink></li>
            </ul>
        </nav>
        <main>
            <Outlet />
        </main>
    </>)
}

export default Nav
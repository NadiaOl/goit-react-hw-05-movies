import { NavLink } from "react-router-dom"
import css from "./Header.module.css"

const Header = () => {
    return (
        <nav className={css.nav}>
                <div className={css.navDiv}>
                    <NavLink className={css.link} aria-current="page" to="/">Home</NavLink>
                    <NavLink className={css.link} to='/movies'>Movies</NavLink>
                </div>
        </nav>
    )
}

export default Header
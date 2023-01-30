import styles from './NavBar.module.css'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className={styles.navContainer}>
            <img src={Logo} alt='logo' />
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>Sobre</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
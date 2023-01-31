import styles from './Footer.module.css'
import logo from '../assets/logo.png'

const Footer = () => {
    return(
        <div className={styles.footerContainer}>
            <img src={logo}></img>
            <span>WebDev Films&copy; 2023</span>
        </div>
    )
}

export default Footer
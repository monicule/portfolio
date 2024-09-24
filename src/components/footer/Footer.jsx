import style from './Footer.module.css';
import logo from '../../icons/mk.webp';

export function Footer() {
    return (
       <footer className={style.footer}>
            <p>&copy; 2024 by Monika</p>
            <img className={style.logo} src={logo} alt="Logo" />
        </footer>


    )
}
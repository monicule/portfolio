import style from './Header.module.css';
import logo from '../../icons/mk.webp';

export function Header() {
    return (
       <header className={style.mainHeader}>
            <img className={style.logo} src={logo} alt="Logo" />
            <nav className={style.nav}>
                <a className={style.link} href="#">About me</a>
                <a className={style.link} href="#">Projects</a>
                <a className={style.link} href="#">Contacts</a>
            </nav>
        </header>
       
    )
}
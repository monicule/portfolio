import style from './Header.module.css';
import logo from '../../icons/mk.webp';
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

export function Header() {
    return (

       <header className={style.mainHeader}>
        <ScrollToHashElement />
            <img className={style.logo} src={logo} alt="Logo" />
            <nav className={style.nav}>
                <a className={style.link} href="#">About me</a>
                <a className={style.link} href="#">Projects</a>
                <a className={style.link} href="/#contactMe">Contacts</a>
            </nav>
        </header>
       
    )
}
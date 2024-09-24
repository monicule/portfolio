import style from './Header.module.css';
import logo from '../../icons/mk.webp';

export function Header() {
    return (
       <header className='mainHeader'>
            <img className='logo' src={logo} alt="Logo" />
            <nav className='nav'>
                <a className='link' href="#">About me</a>
                <a className='link' href="#">Projects</a>
                <a className='link' href="#">Contacts</a>
            </nav>
        </header>
       
    )
}
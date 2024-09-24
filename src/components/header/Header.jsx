import style from './Header.module.css';
import logo from '../../icons/mk.webp';

export function Header() {
    return (
      <header>
      <div className="container">         
       <img src={logo} alt="Logo" />       
        <ul className="navMenu">
        <li className="navItem"><a href="#" className="navLink">Home</a></li>
        <li className="navItem"><a href="#" className="navLink">About</a></li>
        <li className="navItem"><a href="#" className="navLink">Experience</a></li>
        <li className="navItem"><a href="#" className="navLink">Projects</a></li>
        </ul>   
      </div>
      </header>
       
    )
}
import foto from '../../foto/monika.jpg';
import style from './HomeHero.module.css';
import { Button } from '../button/Button';

export function HomeHero() {
    return (
      <div className={style.hero}>
        <img src={foto} alt="Photo" width="20%" />
        <h1>Monika Kasauskaitė</h1>
        <p>Junior Full-stack developer</p>
         <div className={style.btnList}>
                    <Button url="#" text="Contact Me" />
                    <Button url="#" text="My Github" />
         </div>
      </div>  
    )
}
import foto from '../../foto/monika.jpg';
import style from './HomeHero.module.css';
import { Button } from '../button/Button';

export function HomeHero() {
    return (
      <div className={style.hero}>
        <img className={style.foto} src={foto} alt="Photo" />
        <h1>Monika Kasauskaitė</h1>
        <h3>Junior Full-stack developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima eveniet rerum ex temporibus atque consequatur est deleniti perferendis? Nobis eaque deserunt excepturi, ad quasi et enim quos nisi molestiae delectus?</p>
         <div className={style.btnList}>
                    <Button className={style.btn} url="#" text="Contact Me" />
                    <Button className={style.btn} url="#" text="My Github" />
         </div>
      </div>  
    )
}
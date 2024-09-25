import foto from '../../foto/monika.jpg';
import style from './HomeHero.module.css';

export function HomeHero() {
    return (
      <div className={style.hero}>
        <img className={style.foto} src={foto} alt="Photo" />
        <h1>Monika Kasauskaitė</h1>
        <h3>Junior Full-stack developer</h3>
        <p className={style.about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero necessitatibus mollitia nisi? Eveniet commodi minus pariatur! Nemo magni excepturi numquam nihil nostrum! Dignissimos aspernatur labore accusantium totam rem animi velit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima eveniet rerum ex temporibus atque consequatur est deleniti perferendis? Nobis eaque deserunt excepturi, ad quasi et enim quos nisi molestiae delectus?</p>
      </div>  
    )
}
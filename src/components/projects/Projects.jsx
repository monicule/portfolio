import style from './Projects.module.css';

export function Projects() {
    
    const title = Math.random() > 0.5
        ? 'Welcome!'
        : 'Hello!';

    return (
        <section className={style.projects}>
            <div className={style.textContent}>
                <h1 className={style.title}>{title}</h1>
                <p className={style.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed commodi fugit libero rem similique sequi minus qui adipisci asperiores nemo sint vel ut quaerat iure officiis, cumque dicta voluptatum debitis?</p>
                <p className={style.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed commodi fugit libero rem similique sequi minus qui adipisci asperiores nemo sint vel ut quaerat iure officiis, cumque dicta voluptatum debitis?</p>
            </div>
        </section>
    );
}

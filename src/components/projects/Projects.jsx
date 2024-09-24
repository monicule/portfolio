import style from './Projects.module.css';

export function Projects() {
    
    const title = Math.random() > 0.5
        ? 'Welcome!'
        : 'Hello!';

    return (
        <section className={style.projects}>
            <div className={style.textContent}>
                <h1 className={style.title}>{title}</h1>
                <p className={style.description}>Get ready for a development environment that can finally catch up with you.</p>
            </div>
        </section>
    );
}

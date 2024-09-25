import style from './Projects.module.css';
import {projectsData} from './ProjectsData.js';

export function Projects() {
    return (
        <div id='projects' className={style.projectsContainer}>
            <div className={style.title}>My Projects</div>
            <div className={style.cardContainer}>
                {projectsData.map((item, index) => 
                <div key={index} className={style.card}>
                    <img className={style.picture} src={item.img} alt="pic" />
                    <span className={style.about}>{item.about}</span>
                    <a className={style.link} href={item.link} target='_blank'>See on Github</a>
                </div>
                )}
        </div>
        </div>
    );
}

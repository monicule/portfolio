import style from './Contacts.module.css';

export function Contacts() {
    return(
        <div className={style.myContacts}>
        <div className={style.contact}>E-mail: laiskutis.monikai@gmail.com</div>
        <div className={style.contact}><a href="https://www.linkedin.com/in/monikakasauskaite/">Linkedin</a></div>
        <div className={style.contact}><a href="https://github.com/monicule">GitHub</a></div>
        </div>

    );
}
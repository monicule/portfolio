import style from './Contacts.module.css';
import linkedin from '../../icons/linkedin.svg';
import github from '../../icons/github.svg';
import facebook from '../../icons/facebook.svg';
import email from '../../icons/email.svg';

export function Contacts() {
    return(
        <div className={style.myContacts}>
        <div className={style.contact}>Contact me: </div>
        <div className={style.contact} onClick={() => {window.location ='mailto:laiskutis.monikai@gmail.com';}}><img src={email} alt="email" /></div>
        <div className={style.contact}><a href="https://www.linkedin.com/in/monikakasauskaite/"><img src={linkedin} alt="linkedin" /></a></div>
        <div className={style.contact}><a href="https://github.com/monicule"><img src={github} alt="github" /></a></div>
        <div className={style.contact}><a href="https://www.facebook.com/monicule"><img src={facebook} alt="facebook" /></a></div>
        </div>

    );
}
import style from './Footer.module.css';

export function Footer() {
    return (
      
  <footer>
    <div>
       <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2024 by Monika</span>
      </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
    </ul>
  </footer>



    )
}
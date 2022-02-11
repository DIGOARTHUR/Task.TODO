import '../styles/header.scss';
import logo from '../assets/img/logo.svg';

export function Header() {
 
  return (
    <header className="header">
      <div>
        <img src={logo}  alt="to.do" />
      </div>

    </header>
  )
}
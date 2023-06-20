import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header" aria-label="header">
      <NavLink className="navlink" to="/" end>
        <img src="logolight100.png"></img>
      </NavLink>
      <h1 id="headerText">Swiftie </h1>
    </div>
  );
}

export default Header;
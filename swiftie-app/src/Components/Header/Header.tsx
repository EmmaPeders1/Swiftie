import './Header.css';

/**
 * A Funtional component that contains the header
 */
function Header() {
  return (
    <div className="header" aria-label="header">
      <img src="logolight100.png"></img>
      <h1 id="headerText">Swiftie </h1>
    </div>
  );
}

export default Header;
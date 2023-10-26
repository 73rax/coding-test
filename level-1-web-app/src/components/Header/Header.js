import dashboardIcon from "../../assets/icons/dashboard.svg";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

import "./Header.scss";
import NavDropdownMenu from "../NavDropdownMenu/NavDropdownMenu";

function Header() {
  return (
    <header className="header">
      <section className="header__mobile">
        <img
          className="header__widget-icon"
          src={dashboardIcon}
          alt="sidebar toggle"
        />
        <img src={logo} alt="logo" className="header__logo" />
      </section>
      <section className="header__tablet-desktop">
        <div className="header__container">
          <article className="header__logo-wrapper">
            <img src={logo} alt="logo" className="header__logo" />
            <h1 className="header__title">SAMPLE PAGE</h1>
            <img className="header__widget-icon" src={dashboardIcon} alt="" />
          </article>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <Link to="#">
                <li className="header__nav-item">Home</li>
              </Link>

              <li className="header__nav-item features">
                <NavDropdownMenu header={"Features"} option={"Feature"} />
              </li>
              <li className="header__nav-item more">
                <NavDropdownMenu header={"More"} option={"Option"} />
              </li>
            </ul>
          </nav>
        </div>
        <form className="header__form" action="">
          <input
            className="header__search"
            type="search"
            placeholder="Enter your search here ..."
          />
        </form>
        <button className="header__login-button">Login</button>
      </section>
    </header>
  );
}

export default Header;

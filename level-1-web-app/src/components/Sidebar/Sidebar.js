import medalIcon from "../../assets/icons/medal-icon.png";
import computerIcon from "../../assets/icons/computer.svg";
import profileIcon from "../../assets/icons/profile-icon.png";
import { Link } from "react-router-dom";

import "./Sidebar.scss";

function Sidebar() {
  return (
    <section className="sidebar box-1">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item sidebar__item--computer">
            <Link to="/"></Link>
          </li>
          <li className="sidebar__item sidebar__item--profile">
            <Link></Link>
          </li>
          <li className="sidebar__item sidebar__item--group">
            <Link></Link>
          </li>
          <li className="sidebar__item sidebar__item--medal">
            <Link></Link>
          </li>
          <li className="sidebar__item sidebar__item--star">
            <Link></Link>
          </li>
          <li className="sidebar__item sidebar__item--rank">
            <Link></Link>
          </li>
          <li className="sidebar__item sidebar__item--diamond ">
            <Link></Link>
          </li>
          <li className="sidebar__item sidebar__item--page ">
            <Link></Link>
          </li>
          <li className="sidebar__item sidebar__item--message">
            <Link></Link>
          </li>
          <li className="sidebar__item sidebar__item--basket">
            <Link></Link>
          </li>
          <li className="sidebar__item sidebar__item--style">
            <Link></Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Sidebar;

import { NavLink } from "react-router-dom";
import { FiUser, FiHome } from "react-icons/fi";

export default function Navbar () {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
            <span className="icon">
              <FiHome />
            </span>
            <span className="title">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
            <span className="icon">
              <FiUser />
            </span>
            <span className="title">Profil</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

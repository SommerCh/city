import { NavLink } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="navbar">
            <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="icon">  </span>
                <span className="title">Home</span>
            </NavLink>

            <NavLink to="/categories" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="icon">  </span>
                <span className="title">Categories</span>
            </NavLink>
        </nav>
    );
};

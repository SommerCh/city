import { NavLink } from "react-router-dom";
import visitDenmarkHjerte from "../assets/logos/VisitDenmark-INT-Hjerte.png";

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="nav-links">
            <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="title">Home</span>
            </NavLink>

            <NavLink to="/categories" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="title">Explore</span>
            </NavLink>

            <NavLink to="/plan" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="title">Plan</span>
            </NavLink>
            </div>

            <div className="nav-logo">
                <img src={visitDenmarkHjerte} alt="VisitDenmark" />
            </div>
        </nav>
    );
};

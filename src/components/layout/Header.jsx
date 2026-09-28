import { NavLink } from "react-router-dom";
import './layout.css/all.css';

export const Header = () => {
    return (
    <nav className="navbar">
      <div className="logo">Company Logo</div>

      <div className="nav-links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/feature">Feature</NavLink>
        <NavLink to="/user-examples">User Examples</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/resources">Resources</NavLink>
      </div>

      <button>Cart</button>
    </nav>
  );

};
// src/components/Navbar.jsx
import Button from "./Button";
import "./Navbar.css";

export default function Navbar() {
  const handleNavClick = (section) => {
    alert(`Navigating to ${section}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">M<span>.</span></div>

      <div className="navbar-links">
        <Button text="Home" filled onClick={() => handleNavClick("Home")} />
        <span onClick={() => handleNavClick("About")}>About</span>
        <span onClick={() => handleNavClick("Projects")}>Projects</span>
        <span onClick={() => handleNavClick("Contact")}>Contact</span>
      </div>

      <Button text="HIRE ME" filled={false} onClick={() => alert("Redirect to Hire Me")} />
    </nav>
  );
}

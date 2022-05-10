import React, { useState } from "react";
import Button from "./Button";
import menuItems from "./MenuItems";
import "./Navbar.css";
import MesheryIcon from "../../assets/images/meshery-logo-light.png";
import MesheryText from "../../assets/images/meshery-logo-text.png";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <img src={MesheryIcon} height="45" />
      <img src={MesheryText} height="20" />
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>SIGN UP</Button>
    </nav>
  );
};

export default Navbar;

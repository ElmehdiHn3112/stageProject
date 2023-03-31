import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (

    <nav>
      <div className="logo--container">
        <img src={require("../images/logov5.png")} alt="logo" />
        <span>najah marbre</span>

      </div>
      <div>
        <ul id="navbar">
          <li>
            <NavLink to={'/'}>home</NavLink>

          </li>
          <li>
            <NavLink to={'/produits'}>product</NavLink>

          </li>
          <li>
            <NavLink to={''}>about</NavLink>

          </li>
          <li>
            <NavLink to={''}>contact us</NavLink>

          </li>
        </ul>
      </div>
    </nav>

  );
}
export default Navbar;

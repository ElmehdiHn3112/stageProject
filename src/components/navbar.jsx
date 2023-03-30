import React from "react";
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
              <a href="#">home</a>

            </li>
            <li>
              <a href="#">product</a>

            </li>
            <li>
              <a href="#">about</a>

            </li>
            <li>
              <a href="#">contact us</a>

            </li>
          </ul>
        </div>
      </nav>
    
  );
}
export default Navbar;

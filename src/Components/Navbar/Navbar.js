import { Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
const Navbar = () => {
 
  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <h1>Logo</h1>
        </div>
        <div className="navbar-right">
          <ul className="menu">
            <li>
              <Text component={Link} to={"/"}>
                Home
              </Text>
            </li>
            <li>
              <Text component={Link} to={"/about"}>
                About
              </Text>
            </li>
          
            <li>
              <Text component={Link} to={"/products"}>
                Products
                <ul className="dropdownmenu" >
                  <li>
                    <Text component={Link} to={"/apc"}>
                      Automatic Phase Changeover
                    </Text>
                  </li>
                  <li>
                    <Text component={Link} to={"/accl"}>
                      Automatic changeover with current limiter(ACCL)
                    </Text>
                  </li>
                  <li>
                    <Text component={Link} to={"/automatic-voltage"}>
                      Automatic Voltage Stabilizer
                    </Text>
                  </li>
                  <li>
                    <Text component={Link} to={"/automatic-water"}>
                      Automatic Water Level Controller
                    </Text>
                  </li>
                  <li>
                    <Text component={Link} to={"/automatic-powerfactor-panel"}>
                      Automatic Power Factor Control Panel
                    </Text>
                  </li>
                  <li>
                    <Text component={Link} to={"/servo-stabilizer"}>
                      Automatic Servo Stabilizer
                    </Text>
                  </li>
                  <li>
                    <Text component={Link} to={"/sub-starter-panel"}>
                      Submersible Pump Starter Panel
                    </Text>
                  </li>
                </ul>
              </Text>
            </li>
            <li>
              <Text component={Link} to={"/contact"}>
                Contact
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

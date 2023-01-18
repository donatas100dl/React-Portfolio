import React, { useState } from "react";
import "./Navbar.css";
import { faAddressBook, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className={`nav-box ${isOpen ? "hide" : "open"}`}>
        <div className={`nav-box-body`}>
          <div className="nav-box-nav">
            <div className="nav-box-navHead">
              <div className="navBrand">
                {" "}
                <a href="#home" className="">
                  MyPortfolio
                </a>{" "}
              </div>
              <div className="closeBtn" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon
                  style={{ width: "1rem", height: "1rem" }}
                  icon={faX}
                />
              </div>
            </div>
            <div className="nav-box-navMain">
              <ul className="nav-box-navLinks">
                <li className="navLink navHover">
                  <a href="#home" onClick={() => setIsOpen(!isOpen)}>
                    Home
                  </a>
                </li>
                <li className="navLink navHover">
                  <a href="#about" onClick={() => setIsOpen(!isOpen)}>
                    About me
                  </a>
                </li>
                <li className="navLink navHover">
                  <a href="#projects" onClick={() => setIsOpen(!isOpen)}>
                    Projects
                  </a>
                </li>
                <li className="navLink navHover">
                  <a href="#contact" onClick={() => setIsOpen(!isOpen)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-box-off" onClick={() => setIsOpen(!isOpen)}></div>
      </div>
      <nav className="navbar">
        <div className="navBrand">
          <a href="#">MyPortfolio</a>
        </div>
        <ul className={`navLinks  collapsed-nav`}>
          <li className="navLink navHover">
            <a href="#home">Home</a>
          </li>
          <li className="navLink navHover">
            <a href="#about">About me</a>
          </li>
          <li className="navLink navHover">
            <a href="#projects">Projects</a>
          </li>
          <li className="navLink navHover">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div
          className={`hamburger ${
            isOpen ? "open" : "hide"
          } collapsed-hamburger `}
        >
          <FontAwesomeIcon
            onClick={() => setIsOpen(!isOpen)}
            style={{ width: "1rem", height: "1rem" }}
            icon={faBars}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

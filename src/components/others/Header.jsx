import React from "react";
import Logo from "../../assets/images/home/site-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="full-width">
      <div id="top-header">
        <div id="left">
          <div id="logo">
            <Link to={"/"} id="img-logo">
              <img src={Logo} alt="site" />
            </Link>
          </div>
          <div id="search">
            <input placeholder="Search for anything" id="search-bar" />
            <button type="button" id="search-button">
              Search
            </button>
          </div>
        </div>
        <Link to={"/"} id="csr">
          Customer Service and Help <i className="fa-solid fa-headset"></i>
        </Link>
      </div>
      <div className="lower-header">
        <div className="nav-div">
          <nav className="nav">
            <ul className="nav-list">
              <Link to={"/"}>
                <li className="nav-item">Home</li>
              </Link>
              <Link to={"/categories"}>
                <li className="nav-item">Categories</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="nav-div-two">
          <nav className="nav">
            <ul className="nav-list">
              <Link to={"/"}>
                <li className="nav-item">
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </li>
              </Link>
              <Link to={"/"}>
                <li className="nav-item">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

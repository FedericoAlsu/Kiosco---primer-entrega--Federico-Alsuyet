import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "./img/kiosko.png";
import CartWidget from "./cartWidget.js";
import navbarCss from "./css/NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <a className="navbar-brand" href="#">
        <img src={logo} className='img-logo' />
      </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-kiosko" aria-controls="navbar-kiosko" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar-kiosko">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
    <CartWidget />
    </nav>
  );
};


export default Navbar;
import React, { useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simple recipes" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-lins show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Inicio
          </Link>
          <Link
            to="/servicios"
            className="nav-link"
            activeClassName="active-link"
          >
            servicios
          </Link>
          <Link
            to="/ventajas"
            className="nav-link"
            activeClassName="active-link"
          >
            ventajas
          </Link>

          <Link
            to="/nosotros"
            className="nav-link"
            activeClassName="active-link"
          >
            nosotros
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contacto" className="btn">
              contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

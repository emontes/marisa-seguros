import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear() + " "}
        <span>Marisa Seguros</span> Desarrollado por{" "}
        <a href="https://enriquemontes.com">Enrique Montes</a>
      </p>
    </footer>
  );
};

export default Footer;

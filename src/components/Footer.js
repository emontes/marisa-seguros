import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear() + " "}
        <span>Marisa Seguros</span> Desarrolado por{" "}
        <a href="https://enriquemontes.com">Enrique Montes</a>
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import RubrosDestacados from "../components/RubrosDestacados";
import Seo from "../components/SEO";
const index = () => {
  return (
    <Layout>
      <Seo title="Agente de seguros en Tulúm" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/agente-seguros-mio.jpg"
            alt="Agente de Seguros"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Agente de Seguros en Tulum</h1>
              <h4>
                Tu seguro es el único contrato que se vuelve dinero cuando lo
                necesitas!
              </h4>
            </div>
          </div>
        </header>
        <RubrosDestacados />
      </main>
    </Layout>
  );
};

export default index;

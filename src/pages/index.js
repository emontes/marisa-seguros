import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllRubros from "../components/AllRubros";
import Seo from "../components/SEO";
const index = () => {
  return (
    <Layout>
      <Seo title="Marisa Seguros" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/agente-seguros.jpeg"
            alt="Agente de Seguros"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Agente de Seguros en Puebla</h1>
              <h4>Cerca cuando más lo necesitas</h4>
            </div>
          </div>
        </header>
        <AllRubros />
      </main>
    </Layout>
  );
};

export default index;

import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import RubrosDestacados from "../components/RubrosDestacados";
import Seo from "../components/SEO";

const Nosotros = () => {
  return (
    <Layout>
      <Seo
        title="Acerca de Nosotros"
        description="Somos una agencia de experimentados agentes de seguros en Puebla"
      />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Acerca de Nosotros</h2>
            <p>
              Ofrecemos servicios de todo tipo de aseguradoras y planes a la
              medida se su empresa.
            </p>
            <p>
              Nuestro compromizo de seriedad es permanente y recide en el tiempo
              de experiencia asesorando clientes.
            </p>
            <Link to="/contacto" className="btn">
              Contacto
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Marisa, la fundadora de la empresa"
            className="about-img"
            placeholder="blurred"
          />
        </section>

        <section className="featured-recipes">
          <RubrosDestacados />
        </section>
      </main>
    </Layout>
  );
};

export default Nosotros;

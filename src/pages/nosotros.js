import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RubrosList from "../components/RubrosList";
import Seo from "../components/SEO";

const Nosotros = ({
  data: {
    allContentfulRubros: { nodes: rubros },
  },
}) => {
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
          <h5>Servicios Destacados</h5>
          <RubrosList rubros={rubros} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRubros(
      filter: {
        contenido: { tipo: { eq: "servicios" } }
        destacado: { eq: true }
      }
      sort: { fields: titulo, order: ASC }
    ) {
      nodes {
        id
        titulo
        imagen {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Nosotros;

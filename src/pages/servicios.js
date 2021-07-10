import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RubrosList from "../components/RubrosList";
import Seo from "../components/SEO";

const Servicios = ({ data }) => {
  const rubros = data.allContentfulRubros.nodes;
  return (
    <Layout>
      <Seo title="Servicios" description="servicios de seguros que ofrecemos" />
      <main className="page">
        <h1>Servicios</h1>
        <RubrosList rubros={rubros} />
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRubros(
      filter: { contenido: { tipo: { eq: "servicios" } } }
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

export default Servicios;

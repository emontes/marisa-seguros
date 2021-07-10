import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import VentajasList from "../components/VentajasList";
import Seo from "../components/SEO";

const Ventajas = ({ data }) => {
  const ventajas = data.allContentfulRubros.nodes;
  return (
    <Layout>
      <Seo
        title="Ventajas"
        description="ventajas de contratar su seguro con nosotros"
      />
      <main className="page">
        <h1>Ventajas</h1>
        <VentajasList ventajas={ventajas} />
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRubros(filter: { contenido: { tipo: { eq: "ventajas" } } }) {
      nodes {
        id
        titulo
        imagen {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        descripcion {
          descripcion
        }
      }
    }
  }
`;

export default Ventajas;

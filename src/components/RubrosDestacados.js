import React from "react";
import RubrosList from "./RubrosList";
import { graphql, useStaticQuery } from "gatsby";

const RubrosDestacados = () => {
  const data = useStaticQuery(query);
  const rubros = data.allContentfulRubros.nodes;
  return (
    <section className="featured-recipes">
      <h5>Servicios destacados</h5>
      <RubrosList rubros={rubros} />
    </section>
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

export default RubrosDestacados;

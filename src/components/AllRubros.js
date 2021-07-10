import React from "react";
import TagsList from "./TagsList";
import RubrosList from "./RubrosList";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const query = graphql`
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
        contenido {
          etiquetas
        }
        imagen {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;
const AllRubros = () => {
  const data = useStaticQuery(query);
  const rubros = data.allContentfulRubros.nodes;
  return (
    <Wrapper>
      {/* <TagsList rubros={rubros} /> */}
      <RubrosList rubros={rubros} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  grid-template-columns: 200px 1fr;
  gap: 1rem;
`;

export default AllRubros;

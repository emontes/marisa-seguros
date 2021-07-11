import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import RubrosList from "../components/RubrosList";
import Seo from "../components/SEO";
import TagsList from "../components/TagsList";
import styled from "styled-components";

const TagTemplate = ({ data, pageContext }) => {
  const rubros = data.allContentfulRubros.nodes;
  return (
    <Layout>
      <Seo
        title={pageContext.tag}
        description={`Los rubros que contienen ${pageContext.tag}`}
      />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <Wrapper>
          <TagsList rubros={rubros} />
          <RubrosList rubros={rubros} />
        </Wrapper>
      </main>
    </Layout>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 2rem 1rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: 200px 1fr;
    gap: 1rem;
  }
`;

export const query = graphql`
  query GetRubroByTag($tag: String) {
    allContentfulRubros(
      sort: { fields: titulo, order: ASC }
      filter: { contenido: { etiquetas: { eq: $tag } } }
    ) {
      nodes {
        titulo
        id
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

export default TagTemplate;

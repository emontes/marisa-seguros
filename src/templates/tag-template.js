import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import RubrosList from "../components/RubrosList";
import Seo from "../components/SEO";

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
        <div className="tag-recipes">
          <RubrosList rubros={rubros} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GetRubroByTag($tag: String) {
    allContentfulRubros(
      sort: { fields: titulo, order: ASC }
      filter: { contenido: { etiquetas: { eq: $tag } } }
    ) {
      nodes {
        titulo
        id
        imagen {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default TagTemplate;

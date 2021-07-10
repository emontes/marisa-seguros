import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
import Seo from "../components/SEO";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRubros.nodes);
  return (
    <Layout>
      <Seo
        title="Rubros"
        description="Rubros en el sitio de Marisa Seguros en Puebla"
      />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text, { lower: true });
            return (
              <Link to={`/rubros/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} elemento(s)</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRubros {
      nodes {
        contenido {
          etiquetas
        }
      }
    }
  }
`;

export default Tags;

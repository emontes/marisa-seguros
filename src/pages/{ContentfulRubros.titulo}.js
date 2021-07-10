import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import slugify from "slugify";
import Seo from "../components/SEO";

const RubroTemplate = ({ data }) => {
  const {
    titulo,
    contenido,
    descripcion: { descripcion },
    imagen,
  } = data.contentfulRubros;
  const pathToImage = getImage(imagen);
  const { etiquetas } = contenido;
  return (
    <Layout>
      <Seo title={titulo} description={descripcion} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={titulo}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{titulo}</h2>
              <p>{descripcion}</p>

              {/* tags */}
              <p className="recipe-tags">
                {etiquetas.map((tag, index) => {
                  const slug = slugify(tag, { lower: true });

                  return (
                    <Link to={`/rubros/${slug}`} key={index}>
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRubro($titulo: String) {
    contentfulRubros(titulo: { eq: $titulo }) {
      titulo
      contenido {
        etiquetas
      }
      descripcion {
        descripcion
      }
      imagen {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default RubroTemplate;

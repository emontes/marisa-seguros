import React from "react";
import setupTags from "../utils/setupTags";
import { Link, graphql, useStaticQuery } from "gatsby";
import slugify from "slugify";

const query = graphql`
  {
    allContentfulRubros(sort: { fields: titulo, order: ASC }) {
      nodes {
        id
        titulo
        contenido {
          etiquetas
        }
      }
    }
  }
`;

const TagsList = () => {
  const data = useStaticQuery(query);
  const rubros = data.allContentfulRubros.nodes;
  const newTags = setupTags(rubros);
  return (
    <div className="tag-container">
      <h4>rubros</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });
          return (
            <Link to={`/rubros/${slug}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;

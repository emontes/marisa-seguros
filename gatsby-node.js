const path = require("path");
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRubros {
      allContentfulRubros {
        nodes {
          contenido {
            etiquetas
          }
        }
      }
    }
  `);

  result.data.allContentfulRubros.nodes.forEach((rubro) => {
    rubro.contenido.etiquetas.forEach((tag) => {
      const tagSlug = slugify(tag, { lower: true });
      createPage({
        path: `/rubros/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      });
    });
  });
};

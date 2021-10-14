require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://segurosmio.com",
    title: `Seguros MIO`,
    description:
      "Agente de seguros en Tulúm, cotiza y contrata seguro de autos, gastos médicos y una amplica gama de servicios para ayudarte en tus programas de prevención",
    titleTemplate: `%s | Seguros MIO`,
    twitterUsername: `@el_ade`,
    image: `/mainimg.jpg`,

    siteTitle: "Seguros en Puebla",
    authorName: "SegurosMIO",
    siteDescription: "Descripción del sitio de Seguros MIO",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "css",
        path: `${__dirname}/src/assets/css/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `hkl0odzyon00`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seguros MIO`,
        short_name: `SegurosMIO`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/seguros-mio.jpg",
      },
    },
  ],
};

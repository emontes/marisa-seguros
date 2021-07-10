import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";
import styled from "styled-components";

const RubrosList = ({ rubros = [] }) => {
  return (
    <Wrapper>
      {rubros.map((rubro) => {
        const { id, titulo, imagen } = rubro;
        const pathToImage = getImage(imagen);
        const slug = slugify(titulo, { lower: true });
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={titulo}
            />
            <h5>{titulo}</h5>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 2rem 1rem;
  padding-bottom: 3rem;
  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default RubrosList;

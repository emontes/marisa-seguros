import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";
import styled from "styled-components";

const VentajasList = ({ ventajas = [] }) => {
  return (
    <Wrapper>
      {ventajas.map((ventaja) => {
        const {
          id,
          titulo,
          imagen,
          descripcion: { descripcion },
        } = ventaja;
        const pathToImage = getImage(imagen);
        const slug = slugify(titulo, { lower: true });
        return (
          <div key={id} to={`/${slug}`} className="ventaja">
            <GatsbyImage image={pathToImage} className="imagen" alt={titulo} />
            <h4>{titulo}</h4>
            <div className="underline"></div>
            <p>{descripcion}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 2rem 1rem;
  padding-bottom: 3rem;
  text-align: center;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .ventaja {
    background: var(--primary-0);
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: var(--borderRadius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    :hover {
      background: var(--primary-500);
      color: var(--primary-0);
    }

    .underline {
      width: 3rem;
      height: 0.12rem;
      -webkit-transition: var(--transition);
      transition: var(--transition);
      background: var(--textColor);
      :hoover {
        background: var(--primary-700);
      }
    }

    .imagen {
      width: 30%;
      margin-bottom: 1.5rem;
      border-radius: 50%;
    }
  }
`;

export default VentajasList;

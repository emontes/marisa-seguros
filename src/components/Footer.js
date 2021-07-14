import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear() + " "}
        <span>Seguros mio</span> Desarrollado por{" "}
        <a href="https://enriquemontes.com">Enrique Montes</a>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  text-align: center;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--black);
  color: var(--white);

  h5 {
    margin-bottom: 0;
  }
  p {
    margin-bottom: 0;
  }

  a,
  span {
    color: var(--primary-500);
  }
`;

export default Footer;

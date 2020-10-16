import React from "react";
import "./About.scss";
import Container from "../../components/Container/Container";

const About = () => {
  return (
    <Container>
      <div className="about" id="about">
        <h2 className="about__title">Quem somos</h2>
        <p className="subtitle--2 about__subtitle">
          Nós somos uma empresa de desenvolvimento web que ajuda empresas a
          desenvolverem a sua ideia. Nosso time fornece desenvolvimento
          full-stack de ponta a ponta, incluindo concepção, design,
          desenvolvimento e suporte.
        </p>
      </div>
    </Container>
  );
};

export default About;

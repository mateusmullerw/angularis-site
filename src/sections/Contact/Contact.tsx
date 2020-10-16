import React from "react";
import "./Contact.scss";
import Container from "../../components/Container/Container";

const Contact = () => {
  return (
    <Container>
      <div className="contact" id="contact">
        <h2 className="contact__title">Quem somos</h2>
        <p className="subtitle--2 contact__subtitle">
          Nós somos uma empresa de desenvolvimento web que ajuda empresas a
          desenvolverem a sua ideia. Nosso time fornece desenvolvimento
          full-stack de ponta a ponta, incluindo concepção, design,
          desenvolvimento e suporte.
        </p>
      </div>
    </Container>
  );
};

export default Contact;

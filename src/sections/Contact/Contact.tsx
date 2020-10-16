import React from "react";
import "./Contact.scss";
import Container from "../../components/Container/Container";
import ContactForm from "./Form/Form.formik";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Container>
        <div className="contact__inner">
          <div className="contact__column contact__column--left">
            <h2 className="contact__title">Contato</h2>
            <p className="subtitle--2 contact__subtitle">
              Mande uma mensagem pra gente, em breve entraremos em contato.
            </p>
            <p className="subtitle--2 contact__email">
              comercial@angularis.tech
            </p>
          </div>
          <div className="contact__column contact__column--right">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;

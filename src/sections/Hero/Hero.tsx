import React from "react";
import "./Hero.scss";
import hero from "assets/hero.jpg";
import Button from "../../components/Button/Button";
import scrollTo from "../../utils/scrollTo";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={hero} alt="" className="hero__img" />
      <div className="hero__content">
        <h1 className="hero__title">Desenvolvimento e inovação</h1>
        <p className="subtitle--1 hero__subtitle">
          Somos seu parceiro digital para transformar sua visão do futuro em
          realidade
        </p>
        <Button
          onClick={() => scrollTo("contact")}
          label="Solicitar orçamento"
          large
          secondary
        />
      </div>
    </div>
  );
};

export default Hero;

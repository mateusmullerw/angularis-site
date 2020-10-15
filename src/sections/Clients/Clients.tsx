import React, { useState, useEffect } from "react";
import "./Clients.scss";
import Container from "../../components/Container/Container";
import Exablack from "../../assets/exablack.png";
import Nowee from "../../assets/nowee.png";
import Ideplan from "../../assets/ideplan.png";

interface IClient {
  name: string;
  image: string;
  description: Array<string>;
}
const clients = [
  {
    name: "Ideplan",
    image: Ideplan,
    description: [
      "Desenvolvimento de plataforma para planejamento urbano na Redenção, Pará",
      "",
    ],
  },
  {
    name: "Exablack",
    image: Exablack,
    description: [
      "Parceira em automação de processos BPM e Desenvolvimento de Software.",
      "",
      "Projetos:",
      "Marketplace Nacional do SENAI Nacional.",
      "Plataforma de tendências de moda.",
      "Plataforma de roadmap tecnológicos da área de química.",
      "Aplicativo de avaliação de empresas têxteis.",
    ],
  },
  {
    name: "Nowee",
    image: Nowee,
    description: [
      "Desenvolvimento de plataforma paraescola de inglês online",
      "",
    ],
  },
];

interface ISlideProps {
  active: boolean;
  client: IClient;
  slidesAmout: number;
}
const Slide = (props: ISlideProps) => {
  const { active, client, slidesAmout } = props;
  return (
    <div
      style={{ width: `${100 / slidesAmout}%` }}
      className={`slide ${active ? "slide--active" : ""}`}
    >
      <h3 className="slide__name">{client.name}</h3>
      {client.description.map((line, index) => {
        return (
          <p key={index} className="body--1">
            {line}
          </p>
        );
      })}
    </div>
  );
};

interface IControlerProps {
  currentSlide: number;
  slidesAmout: number;
  clients: Array<IClient>;
  setActive: Function;
}
const Controler = (props: IControlerProps) => {
  const { currentSlide, slidesAmout, clients, setActive } = props;

  return (
    <div className="controler">
      <div
        className="controler__indicator"
        style={{
          width: `${100 / slidesAmout}%`,
          transform: `translateX(${100 * currentSlide}%)`,
        }}
      >
        <svg
          width="12"
          height="4"
          viewBox="0 0 12 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.3753 0.499756L1.78087 3.3753C1.27539 3.77969 0.647331 4 0 4H12C11.3527 4 10.7246 3.77969 10.2191 3.3753L6.62469 0.499756C6.25948 0.207581 5.74052 0.207581 5.3753 0.499756Z" />
        </svg>
      </div>
      {clients.map((client, index) => {
        return (
          <div className="controler__button" onClick={() => setActive(index)}>
            <img
              src={client.image}
              alt=""
              className={`controler__logo ${
                currentSlide === index ? "controler__logo--active" : ""
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

const Clients = () => {
  const [active, setActive] = useState(1);

  const setActiveSlide = () => {
    active === clients.length - 1 ? setActive(0) : setActive(active + 1);
  };
  useEffect(() => {
    const timer = setInterval(setActiveSlide, 6000);
    return () => clearInterval(timer);
  });

  return (
    <Container>
      <div className="clients" id="clients">
        <h2 className="clients__title">Clientes e parceiros</h2>
        <div className="clients__content">
          <div className="clients__description">
            <div
              className="clients__description__tray"
              style={{
                width: `${clients.length * 100}%`,
                transform: `translateX(${(-100 / clients.length) * active}%)`,
              }}
            >
              {clients.map((client, index) => {
                return (
                  <Slide
                    key={index}
                    client={client}
                    active={active === index}
                    slidesAmout={clients.length}
                  />
                );
              })}
            </div>
          </div>
          <Controler
            currentSlide={active}
            clients={clients}
            slidesAmout={clients.length}
            setActive={setActive}
          />
        </div>
      </div>
    </Container>
  );
};

export default Clients;

import React from "react";
import "./Services.scss";
import Container from "../../components/Container/Container";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import TechCard from "../../components/TechCard/TechCard";
import Support from "../../components/Icons/Support";
import Database from "../../components/Icons/Database";
import Devops from "../../components/Icons/Devops";
import Development from "../../components/Icons/Development";
import Design from "../../components/Icons/Design";
import Performance from "../../components/Icons/Performance";
import Powerbi from "../../assets/powerbi.png";
import Magento from "../../assets/magento.png";
import Liferay from "../../assets/liferay.png";
import Bonita from "../../assets/bonita.png";

const services = [
  {
    title: "Suporte",
    description: "Pode ligar a qualquer hora, estamos aqui para você 24/7.",
    icon: Support,
  },
  {
    title: "Infraestrutura e Hospedagem",
    description: "Manutenção, monitoramento e segurança para o seu produto.",
    icon: Database,
  },
  {
    title: "DevOps",
    description:
      "Automação e monitoramento em todas as etapas do desenvolvimento.",
    icon: Devops,
  },
  {
    title: "Desenvolvimento",
    description:
      "Stack amplo de desenvolvimento, encontramos solução para qualquer problema.",
    icon: Development,
  },
  {
    title: "UX e UI Design",
    description: "Interfáceis amigáveis para você e seus usuários navegarem",
    icon: Design,
  },
  {
    title: "Testes e Performance",
    description: "Garantem a qualidade do seu produto",
    icon: Performance,
  },
];

const technologies = [
  {
    title: "Power BI",
    description:
      "Vizualize dados de forma interativa e tenha recursos de inteligência de negócios.",
    icon: Powerbi,
  },
  {
    title: "Magento",
    description:
      "Sistema de e-commerce modular e de código aberto. Solução sólida, escalável e segura.",
    icon: Magento,
  },
  {
    title: "Liferay",
    description:
      "Construção de sites e portais com gerenciador de conteúdo profissional.",
    icon: Liferay,
  },
  {
    title: "Bonita Soft",
    description:
      "Plataforma de desenvolvimento de gerenciamento de processos de negócio.",
    icon: Bonita,
  },
];

const Services = () => {
  return (
    <Container>
      <div className="services" id="services">
        <h2 className="services__title">O que oferecemos</h2>
        <div className="services__content">
          <h3>Serviços</h3>
          <div className="services__service-grid">
            {services.map((service, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              );
            })}
          </div>
        </div>
        <div className="services__content">
          <h3>Tecnologias</h3>
          <div className="services__tech-grid">
            {technologies.map((tech, index) => {
              return (
                <TechCard
                  key={index}
                  title={tech.title}
                  description={tech.description}
                  icon={tech.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;

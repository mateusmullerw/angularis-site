import React from 'react';
import './Team.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LuizaC from '../../assets/team/LUIZA CARDOSO.jpeg';
import JP from '../../assets/team/JP.jpeg';
import Tefa from '../../assets/team/TEFA.jpeg';
import Gabriel from '../../assets/team/GABRIEL.jpeg';
import Thiago from '../../assets/team/THIAGO.jpeg';
import Mateus from '../../assets/team/MATEUS.jpeg';
import Cinthya from '../../assets/team/CINTHYA.jpeg';
import Ana from '../../assets/team/ANA.jpeg';
import Chaves from '../../assets/team/CHAVES.jpeg';
import LuizaL from '../../assets/team/LUIZA L.jpeg';
import Rosi from '../../assets/team/ROSI.jpeg';

const team = [
  {
    image: LuizaC,
    name: "Luiza Cardoso",
    description: "CEO e diretora comercial, toma conta da sua satisfação com os projetos ativamente do início ao fim"
  },
  {
    image: JP,
    name: "João Pedro Carvalho",
    description: "CTO e Desenvolvedor Fullstack Senior, coordena nossa equipe de desenvolvimento para garantir qualidade no serviço"
  },
  {
    image: Tefa,
    name: "Estefani Silva",
    description: "Diretora de Projetos, não pode ver um post-it, nossa diretora de projetos é viciada em cronogramas e cumprir metas, pode deixar com ela o seu projeto"
  },
  {
    image: Gabriel,
    name: "Gabriel Pereira de Souza",
    description: "Co-fundador, Desenvolvedor Fullstack, um programador inquieto com experiência em desenvolvimento de software, infraestrutura e certificado BonitaSoft"
  },
  {
    image: Thiago,
    name: "Thiago de Campos",
    description: "Desenvolvedor fullstack, tem o papel de líder da equipe de frontend, então é a ele que devemos agradecer aos nossos lindos layouts"
  },
  {
    image: Mateus,
    name: "Mateus Müller",
    description: "Designer UI/UX, transforma os seus requisitos de projetos em interfaces simples e fáceis de navegar"
  },
  {
    image: Cinthya,
    name: "Cinthya Weigel",
    description: "Desenvolvedora Frontend, ela é quem está por trás do desenvolvimento dos nossos belos layouts"
  },
  {
    image: Ana,
    name: "Ana Luiza Cadorin",
    description: "Gerente de projetos, ela veio para somar o nosso time de gestão. Com ela não tem tempo ruim, sempre sorrindo e muito gentil"
  },
  {
    image: Chaves,
    name: "Rodrigo Chaves",
    description: "Desenvolvedor Fullstack, mais conhecido com Chaves/Chavão, é nossa peça “chave” no desenvolvimento de lojas e sites além de ser nosso mestre de infra"
  },
  {
    image: LuizaL,
    name: "Luíza Lessa",
    description: "Luíza Lessa, graduada em direito no CESUSC, é responsável por cuidar dos nossos contratos e contas. É melhor não chamar ela se não for para fazer \"direito\""
  },
  {
    image: Rosi,
    name: "Rosiane Cabral",
    description: "Rosi, está no time para manter o relacionamento e a fidelidade do cliente para que ele alcance o resultado máximo do produto ou serviço adquirido. Bem humorada e comunicativa, Rosi, como boa aquariana sempre surpreende positivamente!"
  }
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.2
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Member = (props: any) => {

  return (
    <div className="team__carousel--item">
      <img src={props.image} alt={props.name} />
      <div className="team__carousel--item-detail">
        <h1>{props.name}</h1>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  )
}

const Team = React.forwardRef<HTMLDivElement>((props, ref) => {

  const Fade = require('react-reveal/Fade');

  return (
    <div ref={ref} className="team" id="team">

      <div className="team__carousel">
        <Carousel responsive={responsive}>
          {team.map(member => (
            <Fade left>
              <Member
                image={member.image}
                title={member.name}
                description={member.description}
              />
            </Fade>
          ))}
        </Carousel>
      </div>

      <Fade left>
        <h1 className="team__title">NOSSO TIME</h1>
      </Fade>

    </div>
  )
});

export default Team;
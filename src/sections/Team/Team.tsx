import React from "react";
import "./Team.scss";
import Container from "../../components/Container/Container";
import TeamCard from "../../components/TeamCard/TeamCard";
import LuizaCardoso from "../../assets/team/luiza-cardoso.png";
import Ana from "../../assets/team/ana.png";
import Chaves from "../../assets/team/chaves.png";
import Gabriel from "../../assets/team/gabriel.png";
import JoaoPedro from "../../assets/team/joao-pedro.png";
import LuizaLessa from "../../assets/team/luiza-lessa.png";
import Estefani from "../../assets/team/estefani.png";
import Rosi from "../../assets/team/rosi.png";
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
const team = [
  {
    name: "Luiza Cardoso",
    position: ["CEO", "Diretora Comercial"],
    picture: LuizaCardoso,
  },
  {
    name: "João Pedro Carvalho",
    position: ["CTO", "Desenvolvedor Fullstack"],
    picture: JoaoPedro,
  },
  {
    name: "Estefani Silva",
    position: ["Diretora de Projetos"],
    picture: Estefani,
  },
  {
    name: "Gabriel Pereira",
    position: ["Co-fundador", "Desenvolvedor Fullstack"],
    picture: Gabriel,
  },
  {
    name: "Ana Luiza",
    position: ["Gerente de Projetos"],
    picture: Ana,
  },
  {
    name: "Rodrigo Chaves",
    position: ["Desenvolvedor Fullstack"],
    picture: Chaves,
  },
  {
    name: "Luiza Lessa",
    position: ["Gerente Admnistrativa"],
    picture: LuizaLessa,
  },
  {
    name: "Rosi",
    position: ["Analista de Sucesso do Cliente"],
    picture: Rosi,
  },
];
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 9999999, min: 1300 },
    items: 8,
  },
  six: {
    breakpoint: { max: 1300, min: 1100 },
    items: 6,
  },
  five: {
    breakpoint: { max: 1100, min: 900 },
    items: 5,
  },
  four: {
    breakpoint: { max: 900, min: 750 },
    items: 4,
  },
  three: {
    breakpoint: { max: 750, min: 550 },
    items: 3,
  },
  two: {
    breakpoint: { max: 550, min: 400 },
    items: 2,
  },
  one: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
  },
};
const Team = () => {
  return (
    <Container>
      <div className="team" id="team">
        <h2 className="team__title">Nosso time</h2>
        <Carousel responsive={responsive}>
          {team.map((member, index) => {
            return (
              <TeamCard
                key={index}
                name={member.name}
                position={member.position}
                picture={member.picture}
              />
            );
          })}
        </Carousel>
      </div>
    </Container>
  );
};

export default Team;

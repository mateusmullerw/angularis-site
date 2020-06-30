import React from 'react'; 
import './Team.scss'; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LuizaC from '../../assets/team/LUIZA CARDOSO.jpeg';
import JP from '../../assets/team/JP.jpeg';
import Tefa from '../../assets/team/TEFA.jpeg';
import Mateus from '../../assets/team/MATEUS.jpeg';
import Gabriel from '../../assets/team/GABRIEL.jpeg';
import Thiago from '../../assets/team/THIAGO.jpeg';
import Cinthya from '../../assets/team/CINTHYA.jpeg';
import Ana from '../../assets/team/ANA.jpeg';
import Chaves from '../../assets/team/CHAVES.jpeg';
import LuizaL from '../../assets/team/LUIZA L.jpeg';
import Rosi from '../../assets/team/ROSI.jpeg';


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
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Team = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
            <div ref={ref} className="team" id="team"> 

                <div className="team__carousel">
                    <Carousel responsive={responsive}>
                      <div className="team__carousel--item">
                        <img src={LuizaC} alt="Luiza Cardoso" />
                        <div className="team__carousel--item-detail">
                              <h1>Luiza Cardoso</h1>
                              <p>
                                CEO e diretora comercial, toma conta da sua satisfação com os projetos ativamente do início ao fim
                              </p>
                        </div>
                      </div>
                      <div className="team__carousel--item" >
                        <img src={JP} alt="João Pedro" />
                        <div className="team__carousel--item-detail">
                              <h1>João Pedro Carvalho</h1>
                              <p>
                              CTO e Desenvolvedor Fullstack Senior, coordena nossa equipe de desenvolvimento para garantir qualidade no serviço.
                              </p>
                        </div>
                      </div>
                      <div  className="team__carousel--item" >
                        <img src={Tefa} alt="Estefani" />
                        <div className="team__carousel--item-detail">
                              <h1>Estefani Silva</h1>
                              <p>
                              Diretora de Projetos, não pode ver um post-it, nossa diretora de projetos é viciada em cronogramas e cumprir metas, pode deixar com ela o seu projeto.
                              </p>
                        </div>
                      </div>
                      <div  className="team__carousel--item" >
                        <img src={Mateus} alt="Mateus" />
                        <div className="team__carousel--item-detail">
                              <h1>Mateus Müller</h1>
                              <p>
                              Designer UI/UX, transforma os seus requisitos de projetos em interfaces simples e fáceis de navegar
                              </p>
                        </div>
                      </div>
                      <div  className="team__carousel--item" >
                        <img src={Gabriel} alt="Gabriel" />
                        <div className="team__carousel--item-detail">
                              <h1>Gabriel Pereira de Souza</h1>
                              <p>
                              Co-fundador, Desenvolvedor Fullstack, um programador inquieto com experiência em desenvolvimento de software, infraestrutura e certificado BonitaSoft
                              </p>
                        </div>
                      </div>
                      <div  className="team__carousel--item" >
                        <img src={Thiago} alt="Thiago" />
                        <div className="team__carousel--item-detail">
                              <h1>Thiago de Campos</h1>
                              <p>
                              Desenvolvedor fullstack, tem o papel de líder da equipe de frontend, então é a ele que devemos agradecer aos nossos lindos layouts.
                              </p>
                        </div>
                      </div>
                      <div  className="team__carousel--item" >
                        <img src={Cinthya} alt="Cinthya" />
                        <div className="team__carousel--item-detail">
                              <h1>Cinthya Weigel</h1>
                              <p>
                              Desenvolvedora Frontend, ela é quem está por trás do desenvolvimento dos nossos belos layouts.
                              </p>
                        </div>
                      </div>
                      <div  className="team__carousel--item" >
                        <img src={Ana} alt="Ana Luiza" />
                        <div className="team__carousel--item-detail">
                              <h1>Ana Luiza Cadorin</h1>
                              <p>
                              Gerente de projetos, ela veio para somar o nosso time de gestão. Com ela não tem tempo ruim, sempre sorrindo e muito gentil.
                              </p>
                        </div>
                      </div>
                      <div className="team__carousel--item" >
                        <img src={Chaves} alt="Rodrigo" />
                        <div className="team__carousel--item-detail">
                              <h1>Rodrigo Chaves</h1>
                              <p>
                              Desenvolvedor Fullstack, mais conhecido com Chaves/Chavão, é nossa peça “chave” no desenvolvimento de lojas e sites além de ser nosso mestre de infra. 
                              </p>
                        </div>
                      </div>
                      <div  className="team__carousel--item" >
                        <img src={LuizaL} alt="Luiza L" />
                        <div className="team__carousel--item-detail">
                              <h1>Luíza Lessa</h1>
                              <p>
                              Luíza Lessa, graduada em direito no CESUSC, é responsável por cuidar dos nossos contratos e contas. É melhor não chamar ela se não for para fazer "direito".
                              </p>
                        </div>
                      </div>
                      <div  className="team__carousel--item" >
                        <img src={Rosi} alt="Rosi" />
                        <div className="team__carousel--item-detail">
                              <h1>Rosiane Cabral</h1>
                              <p>
                              Rosi, está no time para manter o relacionamento e a fidelidade do cliente para que ele alcance o resultado máximo do produto ou serviço adquirido. Bem humorada e comunicativa, Rosi, como boa aquariana sempre surpreende positivamente!
                              </p>
                        </div>
                      </div>
                    </Carousel> 
                </div>


                <h1 className="team__title">NOSSO TIME</h1>
            </div>
    )
});

export default Team;
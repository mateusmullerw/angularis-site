import React from 'react'; 
import './Partners.scss'; 
import Carousel from 'react-multi-carousel';
import Exablack from '../../assets/exablack.png';
import Ideplan from '../../assets/ideplan.png';
import Nowee from '../../assets/nowee.png';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Partners = React.forwardRef<HTMLDivElement>((props, ref) => {

    const Fade = require('react-reveal/Fade');

    return(

        <>
            <div ref={ref} className="partners" id="parceiros">

                <Fade left>
                    <div className="partners__title">
                        <h1>Clientes e parceiros</h1>
                        <h1 style={{color: '#fff'}}>excelentes</h1>
                        <h1>nos ajudam na trajetória</h1>
                    </div>
                </Fade>
               
{/*                     
                <Carousel responsive={responsive}>
                   <div className="partners__list--item">
                        <img src={Exablack} alt="Exablack"/>
                        <p>Parceira em automação de processos BPM e Desenvolvimento de Software</p>
                        <p>Desenvolvimento de Marketplace Nacional do SENAI Nacional, plataforma de tendências de moda, plataforma de roadmaps tecnológicos da área de química e aplicativo de avaliação de empresas têxteis</p>
                    </div>
                    <div className="partners__list--item" style={{marginBottom: '100px', marginTop: '100px'}}>
                        <img src={Ideplan}  alt="Ideplan"/>
                        <p>Desenvolvimento de plataforma para planejamento urbano na Redenção, Pará</p>
                    </div>
                    <div className="partners__list--item">
                        <img src={Nowee} alt="Nowee"/>
                        <p>Desenvolvimento de plataforma para escola de inglês online </p>
                    </div>
                </Carousel> */}

                <Fade top cascade>
                    <ul className="partners__list">
                        <li className="partners__list--item">
                            <img src={Exablack} alt="Exablack"/>
                            <p>Parceira em automação de processos BPM e Desenvolvimento de Software</p>
                            <p>Desenvolvimento de Marketplace Nacional do SENAI Nacional, plataforma de tendências de moda, plataforma de roadmaps tecnológicos da área de química e aplicativo de avaliação de empresas têxteis</p>
                        </li>
                        <li className="partners__list--item" style={{marginBottom: '100px', marginTop: '100px'}}>
                            <img src={Ideplan}  alt="Ideplan"/>
                            <p>Desenvolvimento de plataforma para planejamento urbano na Redenção, Pará</p>
                        </li>
                        <li className="partners__list--item">
                            <img src={Nowee} alt="Nowee"/>
                            <p>Desenvolvimento de plataforma para escola de inglês online </p>
                        </li>
                    </ul>
                </Fade>
            </div>
        </>
    )
});

export default Partners; 
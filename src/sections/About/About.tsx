import React from 'react';
import { Typography } from '@material-ui/core';
import './About.scss';
import LogoBranco from '../../assets/vermelho.svg';
import FlagIcon from '../../assets/icons/flag.svg';
import Diamond from '../../assets/icons/diamond-alt.svg';


const About = React.forwardRef<HTMLDivElement>((props, ref) => {

  
    return (
        <div className="about" id="aboutus" ref={ref}>

            <div className="about__group1">
                <img src={LogoBranco} className="about__logo" />
                <Typography variant="body1" className="about__meaning">
                Significa a pedra que sustenta tudo, a decisão de colocar este nome na empresa foi 
                por conta da necessidade que os sócios tem em tomar conta total dos seus clientes, 
                suprir suas expectativas, realizar seus pedidos com a maior qualidade possível, 
                gerenciar qualquer tipo de problema e manter contato diário com o mesmo.
                </Typography>
            </div>

            <div className="about__visionContainer">
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                    <img src={FlagIcon} className="about_icon"/>
                    <div className="about__visionContainer--group"> 
                        <Typography className="about__title">Missão</Typography>
                        <Typography className="about__vision">Construir soluções de qualidade para tornar ideias realidade Visão</Typography>
                    </div>
                </div>
                
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                    <img src={Diamond} className="about_icon"/>

                    <div> 
                        <Typography className="about__title">Visão</Typography>
                        <Typography className="about__vision">Obter reconhecimento no polo de inovação e empreendedorismo, que é Florianópolis, através da qualidade dos serviços prestados aos clientes.</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
  });
  
  export default About;
import React from 'react';
import './BannerHero.scss';
import BannerImage from '../../assets/bannertrasparent.png';
import Typing from 'react-typing-animation';
import classes from '*.module.css';

const BannerHero = React.forwardRef<HTMLDivElement>((props, ref) => {

    const Fade = require('react-reveal/Fade');

    return(
        <div ref={ref} className="banner"  id="bannerHero">
           

            <div className="bannerHero__text">
                <Typing cursor={true} speed={10}>
                    <h1 className="bannerHero__title">DESENVOLVEMOS SONHOS</h1>
                </Typing>
                <p className="bannerHero__caption">Somos seu parceiro digital para transformar sua visão do futuro em realidade</p>
            </div>
                
                
                
        
            <Fade right>
                <div className="bannerHero__image-container">
                <img className="bannerHero__image" src={BannerImage}  />
                </div>
            </Fade>
            
        </div>
    )
});

export default BannerHero;
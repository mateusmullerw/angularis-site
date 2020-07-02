import React from 'react';
import './BannerHero.scss';
import BannerImage from '../../assets/bannertrasparent.png';
import Typing from 'react-typing-animation';

const BannerHero = React.forwardRef<HTMLDivElement>((props, ref) => {

    const Fade = require('react-reveal/Fade');

    return(
        <div className="banner">
            <div ref={ref} className="bannerHero" id="bannerHero">

                <div className="bannerHero__text bannerTextAnimation">
                    <Typing cursor={true} speed={10}>
                        <h1 className="bannerHero__title">DESENVOLVEMOS SONHOS</h1>
                    </Typing>
                    <p className="bannerHero__caption">Somos seu parceiro digital para transformar sua visão do futuro em realidade</p>
                </div>
                
                
                
            </div>
            <Fade right>
                <img className="bannerHero__image" src={BannerImage}  />
            </Fade>
            
        </div>
    )
});

export default BannerHero;
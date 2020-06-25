import React from 'react';
import './BannerHero.scss';
import Header from '../Header/Header';
import SocialIcons from '../../components/SocialIcons/SocialIcons';

const BannerHero = () => {
    return(
        <>
            <Header black/>
            <div className="bannerHero">

                <div className="bannerHero__text">
                    <h1 className="bannerHero__title">DESENVOLVEMOS SONHOS</h1>
                    <p className="bannerHero__caption">Somos seu parceiro digital para transformar sua visão do futuro em realidade</p>
                </div>
                
                <img />
                
            </div>
           
        </>
    )
}

export default BannerHero;
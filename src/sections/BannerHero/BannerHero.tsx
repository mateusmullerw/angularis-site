import React from 'react';
import './BannerHero.scss';

const BannerHero = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <>
            <div ref={ref} className="bannerHero" id="bannerHero">

                <div className="bannerHero__text">
                    <h1 className="bannerHero__title">DESENVOLVEMOS SONHOS</h1>
                    <p className="bannerHero__caption">Somos seu parceiro digital para transformar sua visão do futuro em realidade</p>
                </div>
                
                <img />
                
            </div>
           
        </>
    )
});

export default BannerHero;
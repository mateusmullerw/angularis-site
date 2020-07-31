import React from 'react'; 
import './Promo.scss'; 

const Promo = React.forwardRef<HTMLDivElement>((props, ref) => {

    const Fade = require('react-reveal/Fade');

    return(
        <div className="promo" ref={ref}> 
            <Fade left>
            <div>
                <h1 className="promo_title1">PROGRAMA DE APOIO A </h1>
                <p className="promo_subtitle">
                    Mulheres empreendedoras 
                    <br/>
                    Pequenas empresas
                </p>
            </div>
            </Fade>
            <Fade right>
                <div> 
                    <p className="promo_discount">
                        10%
                        <br/>
                        OFF
                    </p>
                </div>
            </Fade>
        </div>
    )
});

export default Promo;
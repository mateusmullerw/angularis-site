import React from 'react'; 
import './Footer.scss'; 
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
    return(
        <>
            <div className="socialContact">
                <LinkedInIcon fontSize="large" className="socialIcons__icon"/>
                <InstagramIcon fontSize="large" className="socialIcons__icon"/>
                <TwitterIcon fontSize="large" className="socialIcons__icon"/>
                <FacebookIcon fontSize="large" className="socialIcons__icon"/>
            </div>
            <div className="footer">



                <div className="footer__info"> 
                    <h5>Nosso escritório</h5>
                    <p> Rua Lauro Linhares, 2010 - 4 andar, Sala 405, Torre A</p>
                    <p>comercial@angularis.tech</p>
                    <p>(48) 4042-0207</p>
                </div>

                <ul className="footer__menu">
                    <li>Serviços</li>
                    <li>Parceiros</li>
                    <li>Sobre nós</li>
                    <li>Time</li>
                </ul>

            </div>

        </>
    )
}

export default Footer;
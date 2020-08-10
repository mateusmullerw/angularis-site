import React from 'react'; 
import './Footer.scss'; 
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import TiktokIcon from '../../assets/icons/tiktok.svg';

const Footer = () => {

    const openLink = (link: string) => {
        window.open(link, '_blank')
    }


    return(
        <>
            <div className="socialContact">
                <LinkedInIcon fontSize="large" className="socialIcons__icon" onClick={() => {openLink('https://www.linkedin.com/company/angularis-tech/')}}/>
                <InstagramIcon fontSize="large" className="socialIcons__icon" onClick={() => {openLink('https://www.instagram.com/angularis.tech/')}}/>
                <TwitterIcon fontSize="large" className="socialIcons__icon" onClick={() => {openLink('https://twitter.com/angularis_tech')}}/>
                <FacebookIcon fontSize="large" className="socialIcons__icon" onClick={() => {openLink('https://www.facebook.com/angularis.tech')}}/>
                <img className="socialIcons__icon" src={TiktokIcon} onClick={() => {openLink('https://www.tiktok.com/@angularis.tech')}}/>
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
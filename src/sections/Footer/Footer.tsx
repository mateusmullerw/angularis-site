import React from "react";
import "./Footer.scss";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import SocialFacebook from "../../components/Icons/SocialFacebook";
import SocialInstagram from "../../components/Icons/SocialInsta";
import SocialTwitter from "../../components/Icons/SocialTwitter";
import SocialLinkedin from "../../components/Icons/SocialLinkedin";
import SocialTiktok from "../../components/Icons/SocialTiktok";

const social = [
  {
    icon: SocialFacebook,
    link: "https://www.facebook.com/angularis.tech",
  },
  {
    icon: SocialInstagram,
    link: "https://www.instagram.com/angularis.tech/",
  },
  {
    icon: SocialTwitter,
    link: "https://twitter.com/angularis_tech",
  },
  {
    icon: SocialLinkedin,
    link: "https://www.linkedin.com/company/angularis-tech/",
  },
  {
    icon: SocialTiktok,
    link: "https://www.tiktok.com/@angularis.tech",
  },
];

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__info">
            <Logo className="footer__logo" color="white" />
            <p className="body--2">
              Rua Lauro Linhares, 2010 - 4 andar, Sala 405, Torre A
            </p>
            <p className="body--2">comercial@angularis.tech</p>
          </div>
          <div className="footer__social">
            {social.map((rede, index) => {
              return (
                <a
                  key={index}
                  href={rede.link}
                  target="blank"
                  className="footer__social__item"
                >
                  {rede.icon()}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

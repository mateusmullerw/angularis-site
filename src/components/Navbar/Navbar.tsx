import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import LogoPreto from "../../assets/preto.svg";
import LogoBranco from "../../assets/branco.svg";
import Container from "../Container/Container";
import isMobile from "../../utils/useIsMobile";
import MenuIcon from "../../components/Icons/MenuIcon";
import CloseIcon from "../../components/Icons/CloseIcon";
import IconButton from "../IconButton/IconButton";
import scrollTo from "../../utils/useScrollTo";

interface ILogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  logo: string;
}
const Logo = (props: ILogoProps) => {
  const { logo, ...rest } = props;
  return <img className="navbar__logo" src={logo} alt="Logo" {...rest} />;
};

interface INavlinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  mobile?: boolean;
}
const Navlink = (props: INavlinkProps) => {
  const { label, mobile, ...rest } = props;
  return (
    <button
      className={`navbar__link ${mobile ? "navbar__link--mobile" : ""}`}
      {...rest}
    >
      {label}
    </button>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [colorNavbar, setColorNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setColorNavbar(window.pageYOffset > 60);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setColorNavbar(window.pageYOffset > 60);
      });
    };
  }, []);

  const logo = colorNavbar || isMenuOpen ? LogoPreto : LogoBranco;
  const SelectedMenuIcon = isMenuOpen ? CloseIcon : MenuIcon;

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const scrollToSection = (section: string) => {
    scrollTo(section);
    setIsMenuOpen(false);
  };

  const navlinks = [
    {
      label: "Quem somos",
      to: "about",
    },
    {
      label: "Parceiros",
      to: "clients",
    },
    {
      label: "Serviços",
      to: "services",
    },
    {
      label: "Nosso time",
      to: "team",
    },
    {
      label: "Contato",
      to: "contact",
    },
  ];

  return (
    <div className={`navbar ${colorNavbar ? "navbar--white" : ""}`}>
      <Container>
        <div className="navbar__container">
          {isMobile() ? (
            <>
              <div
                className={`navbar__menu--mobile ${
                  isMenuOpen ? "navbar__menu--mobile--open" : ""
                }`}
              >
                {navlinks.map((link, index) => {
                  return (
                    <Navlink
                      mobile
                      key={index}
                      label={link.label}
                      onClick={() => scrollToSection(link.to)}
                    />
                  );
                })}
              </div>
              <Logo logo={logo} onClick={() => scrollToSection("home")} />
              <IconButton onClick={toggleMenu}>
                <SelectedMenuIcon
                  className={`navbar__icon ${
                    !colorNavbar && !isMenuOpen ? "navbar__icon--white" : ""
                  }`}
                />
              </IconButton>
            </>
          ) : (
            <>
              <Logo logo={logo} onClick={() => scrollToSection("home")} />
              <ul className="navbar__menu">
                {navlinks.map((link, index) => {
                  return (
                    <Navlink
                      key={index}
                      label={link.label}
                      onClick={() => scrollToSection(link.to)}
                    />
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

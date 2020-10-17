import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import Logo from "../../components/Logo/Logo";
import Container from "../Container/Container";
import isMobile from "../../utils/useIsMobile";
import MenuIcon from "../../components/Icons/MenuIcon";
import CloseIcon from "../../components/Icons/CloseIcon";
import IconButton from "../IconButton/IconButton";
import scrollTo from "../../utils/scrollTo";

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

  const logoColor = colorNavbar || isMenuOpen ? "primary" : "white";
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
              <Logo
                href="#"
                className="navbar__logo"
                color={logoColor}
                onClick={() => scrollToSection("home")}
              />
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
              <Logo
                href="#"
                className="navbar__logo"
                color={logoColor}
                onClick={() => scrollToSection("home")}
              />
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

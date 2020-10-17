import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import Logo from "../../components/Logo/Logo";
import Container from "../Container/Container";
import isMobile from "../../utils/useIsMobile";
import MenuIcon from "../../components/Icons/MenuIcon";
import CloseIcon from "../../components/Icons/CloseIcon";
import IconButton from "../IconButton/IconButton";
import scrollTo from "../../utils/scrollTo";
import getSize from "../../utils/getSize";
import getPosition from "../../utils/getPosition";
import isLinkActive from "../../utils/isLinkActive";

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

const NavlinkActiveIndicator = (props: {
  navlinks: Array<{ label: string; to: string }>;
}) => {
  const navlinks = props.navlinks;
  const [active, setActive] = useState(5);
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(
    getPosition(`navlink_${navlinks[0].to}`)
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      isLinkActive("products") && setActive(0);
      navlinks.forEach((link, index) => {
        isLinkActive(link.to) && setActive(index);
      });
      isLinkActive("home") && setActive(5);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  useEffect(() => {
    if (active < navlinks.length) {
      setWidth(getSize(`navlink_${navlinks[active].to}`).width);
      setPosition(getPosition(`navlink_${navlinks[active].to}`));
    } else {
      setWidth(0);
      setPosition(getPosition(`navlink_${navlinks[0].to}`));
    }
  }, [active, navlinks]);

  let style = {
    width: `${width}px`,
    left: `${position.left}px`,
    top: `${position.bottom - 3}px`,
  };
  return <div style={style} className="navbar__avctive-indicator"></div>;
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
                <NavlinkActiveIndicator navlinks={navlinks} />
                {navlinks.map((link, index) => {
                  return (
                    <Navlink
                      id={`navlink_${link.to}`}
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

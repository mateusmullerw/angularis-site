import React, { useState, useEffect, useRef } from 'react';
import './Header.scss';
import LogoPreto from '../../assets/preto.svg';
import LogoBranco from '../../assets/branco.svg'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-scroll';

const Header = (props: { sectionColor: number }) => {

    const [isMobile, setMobile] = useState(false);
    const [open, setOpen] = useState(false);

    const rootRef: any = useRef(null);

    const headerBackground = ["#3C3B3B", "#FFFFFF", "#4AA8B1", "#3C3B3B", "#F06F62"]
    const headerItemsBlack = [false, true, true, false, true]
    const black = headerItemsBlack[props.sectionColor]
    const backgroundColor = headerBackground[props.sectionColor]
    const logo = headerItemsBlack[props.sectionColor] ? LogoPreto : LogoBranco

    useEffect(() => {
        console.log(backgroundColor);
        const updateWidth = () => {
            if (rootRef.current) {
                setMobile(rootRef.current.offsetWidth < 950 ? true : false)
            }
        };
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);

       
    }, [backgroundColor]);

    const toggleMenu = () => {
        setOpen((open) => !open);
    }

    

    return (
        <React.Fragment>
            <div className="header" style={{ backgroundColor: backgroundColor}} ref={rootRef}>
                <Link to="banner" spy={true} smooth={true} duration={500}>
                    <img className="header__logo" src={logo} alt="Logo" />
                </Link>


                {!isMobile ?

                    (
                        <ul className="header__menu">
                            <Link to="services" spy={true} smooth={true} duration={500}>
                                <li className={`header__menu-item ${black && "header__menu-item--black"}`}>Serviços</li>
                            </Link>
                            <Link to="partners" spy={true} smooth={true} duration={500}>
                                <li className={`header__menu-item ${black && "header__menu-item--black"}`}>Parceiros</li>
                            </Link>
                            <Link to="aboutus" spy={true} smooth={true} duration={500}>
                                <li className={`header__menu-item ${black && "header__menu-item--black"}`}>Sobre nós</li>
                            </Link>
                            <Link to="team" spy={true} smooth={true} duration={500}>
                                <li className={`header__menu-item ${black && "header__menu-item--black"}`}>Time</li>
                            </Link>
                            <Link to="contact" spy={true} smooth={true} duration={500}>
                                <li className={`header__menu-item ${black && "header__menu-item--black"}`}>Contato</li>
                            </Link>

                        </ul>
                    ) :

                    (
                        <div className="header__menu-mobile">
                            <MenuIcon id="btn-toggle" className={`header__menu-mobile__icon ${black && "header__menu-mobile__icon--black"}`} fontSize="large" onClick={toggleMenu} />
                        </div>
                    )

                }
            </div>
            <div className={open ? "header__menu-open" : "header__menu-mobile__container"} id="menu-container">
                <div className="header">
                    <img className="header__logo" src={LogoPreto} alt="Logo" />
                    <CloseIcon className="header__menu-mobile__icon" fontSize="large" onClick={toggleMenu} />
                </div>
                <ul id="menu-mobile" className="header__menu-mobile__list">

                    <Link to="services" spy={true} smooth={true} duration={500}>
                        <li className="header__menu-mobile--item">Serviços</li>
                    </Link>
                    <Link to="partners" spy={true} smooth={true} duration={500}>
                        <li className="header__menu-mobile--item">Parceiros</li>
                    </Link>
                    <Link to="aboutus" spy={true} smooth={true} duration={500}>
                        <li className="header__menu-mobile--item">Sobre nós</li>
                    </Link>
                    <Link to="team" spy={true} smooth={true} duration={500}>
                        <li className="header__menu-mobile--item">Time</li>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} duration={500}>
                        <li className="header__menu-mobile--item">Contato</li>
                    </Link>
                </ul>
            </div>
        </React.Fragment>
    )

}

export default Header;
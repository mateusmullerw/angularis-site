import React, { useState, useEffect, useRef } from 'react'; 
import './Header.scss';
import LogoPreto from '../../assets/preto.svg';
import LogoBranco from '../../assets/branco.svg'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-scroll';

const Header = (props: {black: boolean}) => {

    const [isMobile, setMobile] = useState(false);
    const [open, setOpen] = useState(false);
    
    const rootRef: any = useRef(null);
  
    useEffect(() => {
        const updateWidth = () => {
        if (rootRef.current) {
            setMobile(rootRef.current.offsetWidth < 950 ? true : false)
        }
        };
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const toggleMenu = () => {
        setOpen((open) => !open);
    }

    return (
        <>
       
        <div className="header" ref={rootRef}>

            { props.black ? 
            ( <img className="header__logo"  src={LogoPreto} alt="Logo"/>) : 
            ( <img className="header__logo"  src={LogoBranco} alt="LogoBranco"/>)}


            {!isMobile ? 
                
                (
                    <ul className="header__menu">
                        <Link to="services" spy={true} smooth={true} duration={500}>
                            <li style={{color: props.black ? '#000' : '#FFFFFF'}} className="header__menu--item">Serviços</li>
                        </Link>
                        <Link to="partners" spy={true} smooth={true} duration={500}>
                            <li style={{color: props.black ? '#000' : '#FFFFFF'}} className="header__menu--item">Parceiros</li>
                        </Link>
                        <Link to="team" spy={true} smooth={true} duration={500}>
                         <li style={{color: props.black ? '#000' : '#FFFFFF'}} className="header__menu--item">Time</li>
                        </Link>
                        <Link to="contact" spy={true} smooth={true} duration={500}>
                            <li style={{color: props.black ? '#000' : '#FFFFFF'}} className="header__menu--item">Contato</li>
                        </Link>
                        
                    </ul>
                ) : 

                (
                    <div className="header__menu-mobile">
                        <MenuIcon style={{color: props.black ? '#000' : '#FFFFFF'}} id="btn-toggle" className="header__menu-mobile__icon" fontSize="large" onClick={toggleMenu} />
                    </div>
                )
                
            } 
        </div>
        <div className={open ? "header__menu-open" : "header__menu-mobile__container"} id="menu-container">
            <div className="header">
                <img className="header__logo"  src={LogoPreto} alt="Logo"/>
                <CloseIcon className="header__menu-mobile__icon" fontSize="large" onClick={toggleMenu}/>
            </div>    
            <ul id="menu-mobile" className="header__menu-mobile__list">

                        <Link to="services" spy={true} smooth={true} duration={500}>
                            <li className="header__menu-mobile--item">Serviços</li>
                        </Link>
                        <Link to="partners" spy={true} smooth={true} duration={500}>
                             <li className="header__menu-mobile--item">Parceiros</li>
                        </Link>
                        <Link to="team" spy={true} smooth={true} duration={500}>
                            <li className="header__menu-mobile--item">Time</li>
                        </Link>
                        <Link to="contact" spy={true} smooth={true} duration={500}>
                             <li className="header__menu-mobile--item">Contato</li>
                        </Link>    
             </ul>
        </div>
        </>
    )

}

export default Header;
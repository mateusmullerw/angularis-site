import React, { useState, useEffect, useRef } from 'react'; 
import './Header.scss';
import LogoPreto from '../../assets/preto.svg';
import LogoBranco from '../../assets/branco.svg'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

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
                        <li style={{color: props.black ? '#3C3B3B' : '#FFFFFF'}} className="header__menu--item">Serviços</li>
                        <li style={{color: props.black ? '#3C3B3B' : '#FFFFFF'}} className="header__menu--item">Parceiros</li>
                        <li style={{color: props.black ? '#3C3B3B' : '#FFFFFF'}} className="header__menu--item">Sobre nós</li>
                        <li style={{color: props.black ? '#3C3B3B' : '#FFFFFF'}} className="header__menu--item">Time</li>
                    </ul>
                ) : 

                (
                    <div className="header__menu-mobile">
                        <MenuIcon id="btn-toggle" className="header__menu-mobile__icon" fontSize="large" onClick={toggleMenu} />
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
                <li className="header__menu-mobile--item">Serviços</li>
                <li className="header__menu-mobile--item">Parceiros</li>
                <li className="header__menu-mobile--item">Sobre nós</li>
                <li className="header__menu-mobile--item">Time</li>
             </ul>
        </div>
        </>
    )

}

export default Header;
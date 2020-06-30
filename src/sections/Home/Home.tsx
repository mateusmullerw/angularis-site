import React, { useEffect, useState, useRef  }  from 'react';
import BannerHero from '../BannerHero/BannerHero';
import Services from '../Services/Services';
import Partners from '../Partners/Partners';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import SocialIcons from '../../components/SocialIcons/SocialIcons';

const Home = () => {

    const [ changeColor, setChangeColor] = useState(true);

    const bannerRef = React.createRef<HTMLDivElement>();
    const servicesRef = React.createRef<HTMLDivElement>();
    const partnersRef = React.createRef<HTMLDivElement>();
    const teamRef = React.createRef<HTMLDivElement>();
    const contactRef = React.createRef<HTMLDivElement>();


    
    
    useEffect(() => {
        const listenScrollEvent = () => {
            if (servicesRef.current && partnersRef.current && teamRef.current && contactRef.current) {
                if((servicesRef.current.offsetTop < window.scrollY && partnersRef.current.offsetTop > window.scrollY) || (teamRef.current.offsetTop < window.scrollY && contactRef.current.offsetTop > window.scrollY)){
                    setChangeColor(false);
                } else {
                    setChangeColor(true)
                }
            }

          
        }
        window.addEventListener('scroll', listenScrollEvent);
        listenScrollEvent();
        return () => window.removeEventListener('scroll', listenScrollEvent);
    })


 

    return(
        <div style={{overflowX: "hidden"}}>
            <Header black={changeColor}/>
            <BannerHero ref={bannerRef} />
            <Services ref={servicesRef}/>
            <Partners ref={partnersRef}/>
            <Team ref={teamRef}/>
            <Contact ref={contactRef}/>
            <Footer/>
        </div>
    )
}

export default Home;
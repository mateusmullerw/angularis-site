import React, { useEffect, useState } from 'react';
import BannerHero from '../BannerHero/BannerHero';
import Services from '../Services/Services';
import Partners from '../Partners/Partners';
import About from '../About/About';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import Products from '../Products/Products';


const Home = () => {

    const [changeColor, setChangeColor] = useState(0);

    const bannerRef = React.createRef<HTMLDivElement>();
    const servicesRef = React.createRef<HTMLDivElement>();
    const partnersRef = React.createRef<HTMLDivElement>();
    const aboutUsRef = React.createRef<HTMLDivElement>();
    const teamRef = React.createRef<HTMLDivElement>();
    const promoRef = React.createRef<HTMLDivElement>();
    const contactRef = React.createRef<HTMLDivElement>();


    useEffect(() => {
        const listenScrollEvent = () => {
            if (servicesRef.current && partnersRef.current && aboutUsRef.current && teamRef.current && promoRef.current && contactRef.current) {
                if ((servicesRef.current.offsetTop < window.scrollY + 90 && partnersRef.current.offsetTop > window.scrollY + 90)) {
                    setChangeColor(1);
                } else if ((partnersRef.current.offsetTop < window.scrollY + 90 && teamRef.current.offsetTop > window.scrollY + 90)) {
                    setChangeColor(2);
                } else if ((aboutUsRef.current.offsetTop < window.scrollY + 90 && aboutUsRef.current.offsetTop > window.scrollY + 90)) {
                    setChangeColor(3);
                } else if ((teamRef.current.offsetTop < window.scrollY + 90 && contactRef.current.offsetTop > window.scrollY + 90)) {
                    setChangeColor(3);
                } else if ((promoRef.current.offsetTop < window.scrollY + 90 && promoRef.current.offsetTop > window.scrollY + 90)) {
                    setChangeColor(2);
                } else if (contactRef.current.offsetTop < window.scrollY + 90 && contactRef.current.offsetTop > window.scrollY + 90)  {
                    setChangeColor(4);
                } else {
                    setChangeColor(0)
                }
            }


        }
        window.addEventListener('scroll', listenScrollEvent);
        listenScrollEvent();
        return () => window.removeEventListener('scroll', listenScrollEvent);
    })




    return (
        <div style={{ overflowX: "hidden" }}>
            <Header sectionColor={changeColor} />
            <BannerHero ref={bannerRef} />
            <Services ref={servicesRef} />
            <Partners ref={partnersRef} />
            <Products/>
            <About ref={aboutUsRef}/>
            <Team ref={teamRef} />
            <Promo ref={promoRef}/>
            <Contact ref={contactRef} />
            <Footer />
        </div>
    )
}

export default Home;
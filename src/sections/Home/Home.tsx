import React  from 'react'; 
import BannerHero from '../BannerHero/BannerHero';
import Services from '../Services/Services';
import Partners from '../Partners/Partners';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import SocialIcons from '../../components/SocialIcons/SocialIcons';

const Home = () => {
    return(
        <div style={{overflowX: "hidden"}}>
            <Header black={false}/>
            <BannerHero/>
            <Services/>
            <Partners/>
            <Team/>
            <Contact/>
            <Footer/>
            <SocialIcons color="#FFFFFF" />
        </div>
    )
}

export default Home;
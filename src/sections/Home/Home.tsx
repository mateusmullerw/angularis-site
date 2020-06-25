import React  from 'react'; 
import BannerHero from '../BannerHero/BannerHero';
import Services from '../Services/Services';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import Partners from '../Partners/Partners';

const Home = () => {
    return(
        <div>
            <BannerHero/>
            <Services/>
            <Partners/>
            <SocialIcons color="#3C3B3B"/>
        </div>
    )
}

export default Home;
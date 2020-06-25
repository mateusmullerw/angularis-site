import React  from 'react'; 
import Header from '../Header/Header';
import BannerHero from '../BannerHero/BannerHero';
import SocialIcons from '../../components/SocialIcons/SocialIcons';

const Home = () => {
    return(
        <div>
            <Header/>
            <BannerHero/>
            <SocialIcons/>
        </div>
    )
}

export default Home;
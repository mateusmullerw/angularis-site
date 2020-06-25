import React from 'react'; 
import './SocialIcons.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const SocialIcons = () => {
    return (
        <div className="socialIcons"> 
            <LinkedInIcon className="socialIcons__icon"/>
            <InstagramIcon className="socialIcons__icon"/>
            <TwitterIcon className="socialIcons__icon"/>
            <FacebookIcon className="socialIcons__icon"/>
        </div>
    )
}

export default SocialIcons;
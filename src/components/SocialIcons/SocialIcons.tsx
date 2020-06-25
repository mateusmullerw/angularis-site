import React from 'react'; 
import './SocialIcons.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const SocialIcons = (props: any) => {

    return (
        <div className="socialIcons"> 
            <LinkedInIcon style={{color: props.color}} className="socialIcons__icon"/>
            <InstagramIcon style={{color: props.color}} className="socialIcons__icon"/>
            <TwitterIcon  style={{color: props.color}} className="socialIcons__icon"/>
            <FacebookIcon style={{color: props.color}} className="socialIcons__icon"/>
        </div>
    )
}

export default SocialIcons;
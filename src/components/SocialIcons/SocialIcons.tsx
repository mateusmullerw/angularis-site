import React from 'react'; 
import './SocialIcons.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const SocialIcons = (props: any) => {

    const openLink = (link: string) => {
        window.open(link, '_blank')
    }

    return (
        <div className="socialIcons"> 
            <LinkedInIcon style={{color: props.color}} className="socialIcons__icon" onClick={() => {openLink('https://www.linkedin.com/company/angularis-tech/')}} />
            <InstagramIcon style={{color: props.color}} className="socialIcons__icon" onClick={() => {openLink('https://www.instagram.com/angularis.tech/')}} />
            <TwitterIcon  style={{color: props.color}} className="socialIcons__icon" onClick={() => {openLink('https://twitter.com/angularis_tech')}} />
            <FacebookIcon style={{color: props.color}} className="socialIcons__icon" onClick={() => {openLink('https://www.facebook.com/angularis.tech')}}/>
        </div>
    )
}

export default SocialIcons;
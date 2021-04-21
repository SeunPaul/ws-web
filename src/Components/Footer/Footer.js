import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/wsSvgLogo.svg';
import { ReactComponent as Location} from '../../assets/svg/location.svg';
import { ReactComponent as Facebook} from '../../assets/svg/facebook.svg';
import { ReactComponent as Instagram} from '../../assets/svg/instagram.svg';
import { ReactComponent as Twitter} from '../../assets/svg/twitter.svg';
import './Footer.css'

const Footer = ()=>{
    return(
        <div className="web-footer">
            <Logo className = "web-footer-logo"/>
            <p><Location className="web-footer-loc"/>University Of Lagos, Nigeria.</p>
            <p>Email: waltersamservices@gmail.com</p>
            <p>Call / whatsapp: 09083435247</p>
            <div className ="web-footer-social">
                <p><Facebook className="web-footer-face"/> Waltersam Services</p>
                <p><Instagram className="web-footer-insta"/> Waltersam_Services</p>
                <p><Twitter className="web-footer-twit"/> WaltersamServi1</p>
            </div>
        </div>
    )
}

export default Footer;
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/svg/wsSvgLogo.svg';
import SideTab from '../SideTab/SideTab'
import './Navigation.css';

const Navigation = ({page})=>{
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        if(menuOpen){
            setMenuOpen(false)
        }else{
            setMenuOpen(true)
        }
    }

    const onChangePage = ()=>{
        window.scrollTo({top: 0, behaviour: 'smooth'});
    }

    return(
        <>
        <div className="web-navigation">
            <div className="web_nav-logo_sec">
                <Logo className="web_nav-logo"/>
            </div>
            <div
                className={`web_menu-btn${menuOpen ? ' web_menu-open' : ''}`}
                onClick={toggleMenu}
            >
                <div className="web_menu-btn__burger" />
            </div>
            <div className="web_nav-list_sec">
                <Link onClick = {onChangePage} className="web-list_wrapper" to ="/home">
                    <p className={`web_nav-list_item${page === 'Home'? ' webactive': ""}`}>Home</p>
                </Link>
                <Link onClick = {onChangePage} className="web-list_wrapper" to ="/about">
                    <p className={`web_nav-list_item${page === 'About'? ' webactive': ""}`}>About Us</p>
                </Link>
                <Link onClick = {onChangePage} className="web-list_wrapper" to ="/contact">
                    <p className={`web_nav-list_item${page === 'Contact'? ' webactive': ""}`}>Contact Us</p>
                </Link>
                <Link onClick = {onChangePage} className="web-list_wrapper" to ="/team">
                   <p className={`web_nav-list_item${page === 'Team'? ' webactive': ""}`}>Our Team</p>
                </Link>
                <Link onClick = {onChangePage} className="web-list_wrapper" to ="/blog">
                    <p className={`web_nav-list_item${page === 'Blog'? ' webactive': ""}`}>Blog</p>
                </Link>
            </div>
        </div>
        <SideTab menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </>
    )
}

export default Navigation;
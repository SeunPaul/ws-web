import React from 'react';
import { Link } from 'react-router-dom';
import './SideTab.css';

const SideTab = ({menuOpen, setMenuOpen})=>{
    return(
        <div className={`sideTab ${menuOpen? " show": ""}`}>
            <div className="sideTab-list_sec">
                <Link 
                    onClick = {()=>{
                        setMenuOpen(false);
                        window.scrollTo({top: 0, behaviour: 'smooth'});
                    }} 
                    className="sideTab-list-wrapper" to ="/home"
                >
                    <p>Home</p>
                </Link>
                <Link 
                    onClick = {()=>{
                        setMenuOpen(false);
                        window.scrollTo({top: 0, behaviour: 'smooth'});
                    }}  
                    className="sideTab-list-wrapper" to ="/about"
                >
                    <p>About Us</p>
                </Link>
                <Link 
                    onClick = {()=>{
                        setMenuOpen(false);
                        window.scrollTo({top: 0, behaviour: 'smooth'});
                    }} 
                    className="sideTab-list-wrapper" to ="/contact"
                >
                    <p>Contact Us</p>
                </Link>
                <Link 
                    onClick = {()=>{
                        setMenuOpen(false);
                        window.scrollTo({top: 0, behaviour: 'smooth'});
                    }}
                    className="sideTab-list-wrapper" to ="/team"
                >
                    <p>Team</p>
                </Link>
                <Link 
                    onClick = {()=>{
                        setMenuOpen(false);
                        window.scrollTo({top: 0, behaviour: 'smooth'});
                    }}
                    className="sideTab-list-wrapper" to ="/blog"
                >
                    <p>Blog</p>
                </Link>
            </div>
        </div>
    )
}

export default SideTab;
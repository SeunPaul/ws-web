import React from 'react';
import Navigation from '../../Components/Navigation/Navigation'
import { ReactComponent as Diamond } from '../../assets/svg/wsdiamond.svg';
import './About.css';

const About = ()=>{
    return(
        <div className="web-about">
            <Navigation page = {"About"}/>
            <div className="web_home-second_sec">
                <Diamond className="web-diamond"/>
                <p className="web-about-rear">about us</p>
                <h3 className="web-about-fore"><span className="web-blue_text">About</span> Us</h3>
                <p className="web-about-brief">Waltersam is an educational organization, keened and aimed at giving students and aspirants
                    of all universities in Nigeria the opportunity to fulfil their academic dreams through the provision 
                    of past questions, tutorials, Educational online packages, online lectures, books (online and 
                    offline), mock exams of highly important examinations, accommodation, fast and reliable exam
                    regitration, admission guide and processing, project assistance, and many more. Waltersam is of 
                    one goal - helping students enjoy the journey of education and achieving the best destination of 
                    their life.
                </p>
            </div>
            <div className="web_home-second_sec">
                <Diamond className="web-diamond"/>
                <p className="web-about-rear">brief history</p>
                <h3 className="web-about-fore"><span className="web-blue_text">Brief</span> History</h3>
                <p className="web-about-brief">Waltersam Sevices was founded in Dec 17 2018. The first service 
                    ever rendered by waltersam service was accommodation services. Thereafter, we went fully into 
                    educational and consultancy in june 26 2019 by providing students with study materials such as 
                    past questions with detailed and explanatory solutions, simplified notes etc. Examination 
                    registration, project assistance, tutorials, admission guide and processing and so on was added 
                    to the services. Waltersam services have always love to be better, in 2020 we came up with a 
                    unique exam standard cbt software for exam practice, online mock examination for aspirant and 
                    undergraduates.
                </p>
            </div>
            <div className="web_home-second_sec">
                <Diamond className="web-diamond"/>
                <p className="web-about-rear">our ceo</p>
                <h3 className="web-about-fore"><span className="web-blue_text">Our</span> CEO</h3>
                <div className = "web-our_ceo-img-wrapper">
                    <img className = "web-our_ceo-img" src ="https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171899/waltersamimg_u1h78y.png" alt=""/>
                </div>
                <p className="web-about-brief">Johnson Samuel Olamilekan popularly known as Waltersam is an 
                    educational enthusiast who was born on the 28th of may 1997. samuel hails from Ogun state 
                    and started his early education at Royal primary school (2002 - 2008) then moved on to Royal 
                    Kriston college (2008 - 2014) for his secondary education. In further pursuit of academic 
                    buoyancy he attended Adams college for his A - level program. He is currently undergoing his 
                    B.Sc in Applied Physics Electronics in the prestigious University of Lagos. With a mindset of 
                    an entrepreneur and an academic enthusiast he began to follow the path of the relentless service 
                    delivery. He is the CEO of waltersam services. Waltersam services is an enterprise targeted at 
                    making the sojoun of undergraduates an impactful one.
                </p>
            </div>
        </div>
    )
}

export default About;
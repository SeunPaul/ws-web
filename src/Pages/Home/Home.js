import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CorouOne } from '../../assets/svg/wsS1.svg';
import { ReactComponent as CorouTwo } from '../../assets/svg/wsS2.svg';
import { ReactComponent as CorouThree } from '../../assets/svg/wsS3.svg';
import { ReactComponent as CorouFour } from '../../assets/svg/wsS4.svg';
import { ReactComponent as CorouFive } from '../../assets/svg/wsS5.svg';
import { ReactComponent as Diamond } from '../../assets/svg/wsdiamond.svg';
import { ReactComponent as GroupPic } from '../../assets/svg/wsGrouppic.svg';
import { ReactComponent as Ser1} from '../../assets/svg/wsSer1.svg';
import { ReactComponent as Ser2} from '../../assets/svg/wsSer2.svg';
import { ReactComponent as Ser3} from '../../assets/svg/wsSer3.svg';
import { ReactComponent as Ser4} from '../../assets/svg/wsSer4.svg';
import { ReactComponent as RightArr } from '../../assets/svg/wsrightarrow.svg';
import { ReactComponent as Wwu } from '../../assets/svg/wsWWU.svg';
import { ReactComponent as Email } from '../../assets/svg/email.svg';
import { ReactComponent as WhatsApp } from '../../assets/svg/whatsapp.svg';
import Navigation from '../../Components/Navigation/Navigation';
import './Home.css';


const Home = ()=>{
    const [currentImage, setCurrentImage] = useState(0)
    const images = [
        <CorouOne className="fisrt_sec-corou"/>,
        <CorouTwo className="fisrt_sec-corou"/>,
        <CorouThree className="fisrt_sec-corou"/>,
        <CorouFour className="fisrt_sec-corou"/>,
        <CorouFive className="fisrt_sec-corou"/>
    ]

    const changeImage = ()=>{
        setTimeout(()=>{
            if(currentImage < images.length-1){
                setCurrentImage(currentImage+1)
            }else{
                setCurrentImage(0)
            }
        }, 3000)
    }

    const displayImage = ()=>{
        changeImage()
        return(images[currentImage])
    }
    const shortTeamImages = [
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171899/waltersamimg_u1h78y.png',
            name: 'Johnson Samuel O.',
            nick: 'Waltersam',
            role: 'CEO'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171900/muizimg_mz0zgz.png',
            name: 'Ayanteju Muiz A.',
            nick: '',
            role: 'General Manager'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171821/eyitayoimg_tzc6fz.png',
            name: 'Shogade Eyitayo Q.',
            nick: '',
            role: 'Production Manager'
        }
    ]

    const sponsorImages = [
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171817/dmd_rccdph.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171816/dclab_dg1mgx.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171815/cplus_b3pa2g.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171892/st_l110mf.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171887/sampips_xgpaoo.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171878/gv_xtahrp.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171819/elgarcia_th825y.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171877/folatoes_jb051n.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171814/aromatics_tq06bj.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608229267/olayinka_nnftct.jpg',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171814/beau_slewbg.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171890/sirlumi_nqoiju.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171816/diamond_f2o5yf.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171893/swift_hzgybd.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171879/krawdwise_ekh1ty.png'
    ]

    return(
        <div className="web-home">
            <Navigation page = {"Home"}/>
            <div className="web_home-first_sec">
                <div className="web-brand-sec">
                    <h3 className="web-brand-name">Waltersam <span className="web-blue_text">Services</span></h3>
                    <div className="web-brand-desc">
                        <p className="web-brand-desc-content">Waltersam services is an enterprise targeted at making 
                            the sojourn of undergraduates an impactful one.
                        </p>
                    </div>
                    <div className = "web-contact-btn_wrapper">
                        <div className = "web-contact-btn">
                            Contact Us
                        </div>
                        <div className = "web-contact-options">
                            <a href="https://api.whatsapp.com/send?phone=2349083435247&text=Hi%20Waltersam%2C%20I%20am" target="_blank" rel="noreferrer" className = "web-contact-options-wa"><WhatsApp className="web-contact-options-ico"/>WhatsApp</a>
                            <Link to="/contact" className = "web-contact-options-e"><Email className="web-contact-options-ico"/>Email</Link>
                        </div>
                    </div>
                </div>
                <div>
                    {displayImage()}
                </div>
            </div>
            <div className="web_home-second_sec">
                <Diamond className="web-diamond"/>
                <p className="web-about-rear">about us</p>
                <h3 className="web-about-fore"><span className="web-blue_text">About</span> Us</h3>
                <p className="web-about-brief">Waltersam is an educational organization, keened and aimed at giving students and aspirants
                    of all universities in Nigeria the opportunity to fulfil their academic dreams through the provision 
                    of past questions, tutorials, Educational online packages, online lectures, books (online and 
                    offline), mock exams of highly important examinations, accommodation, fast and reliable exam
                    registration, admission guide and processing, project assistance, and many more.<br/> <br/>Waltersam is of 
                    one goal - helping students enjoy the journey of education and achieving the best destination of 
                    their life.
                </p>
            </div>
            <div className="web_home-third_sec">
                <div className="text-sec">
                    <div className="web-mission">
                        <h3><span className="web-blue_text">Our</span> mission</h3>
                        <p>To bring the academic dreams of university 
                            students to reality and to support them with 
                            trustable processes and tutorials.
                        </p>
                    </div>
                    <div className="web-vision">
                        <h3><span className="web-blue_text">Our</span> vision</h3>
                        <p>To make the academic life of all student in the 
                            university an easy one and to be a strong fort 
                            for struggling students to rise up again.
                        </p>
                    </div>
                </div>
                <GroupPic className="web-grouppic"/>
            </div>
            <div className="web_home-fourth_sec">
                <h3 className="web-services-fore"><span className="web-blue_text">Our</span> Services</h3>
                <div className="ser-sec-a">
                    <Ser1 className="serImg"/>
                    <div className="ser-sec-text">
                        <h2>Sales of study materials for
                            aspirants, undergraduates and 
                            post graduates.
                        </h2>
                        <p>Past questions with detailed and simplified solutions</p>
                        <p>Textbooks</p>
                        <p>Simplified key-points</p>
                    </div>
                </div>
                <div className="ser-sec-b">
                    <Ser2 className="serImg"/>
                    <div className="ser-sec-text">
                        <h2>Consultancy</h2>
                        <h4>Project assistance for undergradutes and postgraduate</h4>
                        <p>such as STA 121, FSC 113, CSC 227, final year projects etc.</p>
                        <h4>Admission guide and processing</h4>
                        <h4>Online mock examination for aspirants and undergraduates</h4>
                    </div>
                </div>
                <div className="ser-sec-a">
                    <Ser3 className="serImg"/>
                    <div className="ser-sec-text">
                        <h2>Accommodation services for students</h2>
                        <p>Apartment of various kinds</p>
                        <p>Private hostels</p>
                        <p>Bedspace balloting for desired hostel</p>
                    </div>
                </div>
                <div className="ser-sec-b">
                    <Ser4 className="serImg"/>
                    <div className="ser-sec-text">
                        <h3>Sales of waec scratch cards</h3>
                        <h3>Printing of original jamb result, Jamb admission letter, Uploading of results. etc.</h3>
                    </div>
                </div>
            </div>
            <div className="web_home-fifth_sec">
                <h3 className="web-team-fore"><span className="web-blue_text">Meet The</span> Team</h3>
                <div className="plaque-container">
                    {shortTeamImages.map((person)=>(
                        <div className="plaque" key={person.imgUrl}>
                            <img src={person.imgUrl} alt=""/>
                            <div className="content">
                                <h3>{person.name}</h3>
                                <p>{person.nick}</p>
                                <p>{person.role}</p>
                            </div>
                        </div>
                    ))}
		        </div>
                <Link onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth'})}} className = "team-view_all" to="/team">
                    Veiw all
                    <RightArr className="web-right_arr"/>
                </Link>
            </div>
            <div className="web_home-sixth_sec">
                <div className="work-with-us-text_sec">
                    <h1>Ready to work with us?</h1>
                    <p>we are always here and ready to help.</p>
                    <h3>Email: <span className="web-blue_text">waltersamservices@gmail.com</span></h3>
                    <h3>or call / whatsapp: 09083435247</h3>
                </div>
                <Wwu className="work-with-us"/>
            </div>
            <div className="web_home-seventh_sec">
                <h3 className="web-sponsor-fore"><span className="web-blue_text">Proud</span> Sponsors</h3>
                <div className="sponsor-images_wrapper">
                {
                    sponsorImages.map((url)=>(
                        <img 
                            key = {url}
                            className="sponsor-image"
                            src={url}
                            alt=""
                        />
                    ))
                }
                </div>
            </div>
        </div>
    )

}

export default Home;
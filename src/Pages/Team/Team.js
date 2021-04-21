import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import './Team.css'

const Team = ()=>{
    const wsTeam = [
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171821/eyitayoimg_tzc6fz.png',
            name: 'Shogade Eyitayo Q.',
            role: 'Production Manager'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171900/muizimg_mz0zgz.png',
            name: 'Ayanteju Muiz A.',
            role: 'General Manager'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171895/omoleimg_jeigz6.png',
            name: 'Omole Temiloluwa E.',
            role: 'Social media content manager'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171820/danielimg_idmys0.png',
            name: 'Ojeyomi Daniel A.',
            role: 'Typist'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171818/ceeplusimg_t70rlx.png',
            name: 'Cee plus.',
            role: 'Graphic designer'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171900/lutfa_jsybjf.png',
            name: 'Adeoye Lutfat A.',
            role: 'Special Adviser'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171893/ishola_zb0svz.png',
            name: 'Ishola Temitope.',
            role: 'Legal Advisor'
        }
    ]

    const wsTutors = [
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171878/greenimg_x8ofda.png',
            name: 'Abayomi Green A.'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171877/ezeimg_hnzwph.png',
            name: 'Izima Kingsley E.'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171892/soburimg_wukrkc.png',
            name: 'Saliu Abdus-Sobur k.'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171881/mosesimg_uceowl.png',
            name: 'Denapo Moses D.'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171889/shokesimg_c7dclq.png',
            name: 'Sokunbi Temiloluwa.'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171886/olaimg_cnwejl.png',
            name: 'Olasunkanmi Daniel.'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171897/tobisamimg_kcautj.png',
            name: 'Adesokan Oluwatobiloba S.'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171819/avieroimg_bja1tk.png',
            name: 'Adeoye Olamilekan S.'
        },
        {
            imgUrl: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171891/musimg_nqrygn.png',
            name: 'Raji Mustapha A.'
        }
    ]

    return(
        <div className="web-team">
            <Navigation page = {"Team"}/>
            <div className="web-team_ws">
                <h1><span className="web-blue_text">Team</span>WS</h1>
                <p className="cute-web_text">Meet the geniuses behind Waltersam Services</p>
                <div className="web-team-tile">
                    <img className="web-team-tile_img" src="https://res.cloudinary.com/ds5l1k3bl/image/upload/v1608171899/waltersamimg_u1h78y.png" alt=""/>
                    <div className="web-team-tile_content">
                        <h3>Johnson Samuel O.</h3>
                        <p>Waltersam</p>
                        <p>CEO</p>
                    </div>
                </div>
                <div className="web-team-members">
                    {
                    wsTeam.map((person)=>(
                        <div className="web-team-tile">
                            <img className="web-team-tile_img" src={person.imgUrl} alt=""/>
                            <div className="web-team-tile_content">
                                <h3>{person.name}</h3>
                                <p>{person.role}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <div className="web-team-tutors">    
                    <h1><span className="web-blue_text">WS</span> Tutors</h1>
                    <div className="web-team-members">
                        {
                        wsTutors.map((person)=>(
                            <div className="web-team-tile">
                                <img className="web-team-tile_img" src={person.imgUrl} alt=""/>
                                <div className="web-team-tile_content">
                                    <h3>{person.name}</h3>
                                    <p>{person.role}</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
            <div className="web-tutor_ws">

            </div>
        </div>
    )
}

export default Team;
import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import { ReactComponent as Coming } from '../../assets/svg/comingSoon.svg';
import './Blog.css'

const Blog = ()=>{
    return(
        <div className="web-blog">
            <Navigation page = {"Blog"}/>
            <Coming className="not-ready"/>
            <div className="web-blog-coming_msg">
                <h1>Oops!!!</h1>
                <p>Kindly stay with us, our team is working to give you the best</p>
                <p>Will be available soon</p>
            </div>
        </div>
    )
}

export default Blog;
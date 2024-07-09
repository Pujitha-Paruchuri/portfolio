import React from 'react';
import '../style/home.css';
import { Link } from 'react-router-dom';
import homeimage from '../videos/video.mp4';
function Home() {
    return (

        <div className="main">
            <div>
                <video src={homeimage} autoPlay loop muted />
            </div>
            <div className="content">
                <p>Welcome to Food Blog</p>

                <div className="linkcontent">
                    <Link to="/home">Home<br /></Link>
                    <Link to="/register">Register<br /></Link>
                    <Link to="/login">Login<br /></Link>
                    <Link to="/about">About<br /></Link>
                    <Link>Contact<br /></Link>
                </div>
            </div>

        </div>

    )
}
export default Home;
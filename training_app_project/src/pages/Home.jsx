// src/pages/Home.jsx

import React from "react";

const Home = () => {
    return (
        <section className="first_section home" >
            <div className="home_text">
                <div className="home_text_heading">
                    <h1>The most intelligent program for you</h1>
                </div>
                <div className="home_text_and_button">
                    <p>ProgressAI is an innovative fitness tracking app that helps users to take their fitness goals. With its minimalist interface, ProgressAI offers customized workout plans, progress tracking, and AI driven insights to help you reach your fitness goals.</p>
                    <button className="btn" onclick="location.href='/sign-up.html'">Try For Free</button>
                </div>
            </div>
            <div className="home_image">
                <img src="" alt="" />
            </div>
        </section>
    );
};

export default Home;
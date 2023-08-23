import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import {motion} from 'framer-motion';

const Hero = () => {

    const transition = {type: 'spring', duration: 3}

    return (
        <div className='hero'>

            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                
                {/* The best ad */}
                <div className="the-best-ad">
                    <motion.div
                    initial={{left: '238px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                    >
                    </motion.div>
                    <span>The best fitness club in town</span>
                </div>

                {/* Hero Heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                        Here, we will help you to shape and build your ideal body and live up your life to the fullest
                        </span>
                    </div>
                </div>

                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                {/* Hero Buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>

                <motion.div 
                initial={{right: '-1rem'}}
                whilstInView={{right: '4rem'}}
                transition={transition}
                className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* Hero Images */}
                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back' />

                {/* Calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burnt</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
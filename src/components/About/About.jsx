import React, {useEffect, useState} from 'react'
import './About.css'
import WELCOME_DATA from '../Welcome.json';


const About = (props) => {

    
    return (
        <div className="AboutContainer">
            {props.language === 'port' 
                ? 
                    <h3>{WELCOME_DATA[1].port}</h3>
                :
                    <h3>{WELCOME_DATA[1].eng}</h3>
            }
            <text></text>
            <div className="AboutText">
                {props.language === 'port' 
                ? 
                    <text>{WELCOME_DATA[2].port}</text>
                :
                    <text>{WELCOME_DATA[2].eng}</text>
                }
            </div>
        </div>
    )
}

export default About

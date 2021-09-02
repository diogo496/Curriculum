import React, {useEffect, useState} from 'react'
import './Toolbar.css'
import image from '../../assets/foto1.png'
import portugueseFlag from '../../assets/portugueseFlag.png';
import englishFlag from '../../assets/englishFlag.png';
import WELCOME_DATA from '../Welcome.json';

const Toolbar = (props) => {

    

   
    
    return (
        <div className="container">
            <img className="image" src={image} alt="firstImage"></img>
            <text className="myName">Diogo Reis</text>
            
            <div style={{position:"absolute", zIndex:"100", color:"white", fontSize:"3vw", width:"40%", marginLeft:"5%", marginTop:"25%", textAlign:"left"}}>
                {props.language === 'port' 
                ? 
                    <text>{WELCOME_DATA[0].port}</text>
                :
                    <text>{WELCOME_DATA[0].eng}</text>
                }
            </div>
            
        </div>
    )
}

export default Toolbar

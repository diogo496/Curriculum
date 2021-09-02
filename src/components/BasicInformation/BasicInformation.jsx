import React from 'react'
import './BasicInformation.css'
import WELCOME_DATA from '../Welcome.json';
import {GrLinkedin} from 'react-icons/gr'
import {SiGmail} from 'react-icons/si'
import {AiFillLinkedin} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {MdPerson} from 'react-icons/md'
import {BiWorld} from 'react-icons/bi'
const BasicInformation = (props) => {


    const goToLinkedin = () =>{
        window.open('https://www.linkedin.com/in/diogo-reis-4s96/', '_blank');
    }

    return (
        <div className="BasicInformationContainer">
            {props.language === 'port' 
                ? 
                    <h3>{WELCOME_DATA[3].port}</h3>
                :
                    <h3>{WELCOME_DATA[3].eng}</h3>
            }
            <div style={{marginBottom:"7px"}}>
                <MdPerson size={"3vw"} style={{marginRight:"15px" , verticalAlign:"middle"}}/>
                Diogo Reis
            </div>
            <div style={{marginBottom:"7px"}} onClick={goToLinkedin}>
                <AiFillLinkedin size={"3vw"} style={{marginRight:"15px", verticalAlign:"middle"}}/> 
                https://www.linkedin.com/in/diogo-reis-4s96/
                
            </div>
            <div style={{marginBottom:"7px"}}>
                <SiGmail size={"3vw"} style={{marginRight:"15px", verticalAlign:"middle"}}/>
                diogoreis496@gmail.com
            </div>
            <div style={{marginBottom:"7px"}}>
                <GoLocation size={"3vw"} style={{marginRight:"15px", verticalAlign:"middle"}}/>
                Portugal, Seixal - Corroios
            </div>
            <div style={{marginBottom:"7px"}}>
                <BiWorld size={"3vw"} style={{marginRight:"15px", verticalAlign:"middle"}}/>
                {props.language === 'port' 
                ? 
                    <span>{WELCOME_DATA[4].port}</span>
                :
                    <span>{WELCOME_DATA[4].eng}</span>
            } 
            </div>
        </div>
    )
}

export default BasicInformation

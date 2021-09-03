import React, {useState} from 'react';
import './Experience.css';
import WELCOME_DATA from '../Welcome.json';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const Experience = (props) => {
    return (
        <div className="ExperienceContainer">
            {props.language === 'port' ?
                <div>
                    <h3>{WELCOME_DATA[33].port}</h3>
                    <hr width="1" size="300" style={{position:"absolute", zIndex:"200", marginTop:"0%", color:"black", marginLeft:"50vw"}}></hr>
                    <div className="leftCard">
                        <h4>{WELCOME_DATA[34].port}</h4>
                        <h5>Operations - Automation {`&`} Tools</h5>
                        <text>{WELCOME_DATA[35].port}</text>
                        <br/>
                        <text>{WELCOME_DATA[36].port}</text>
                        <h5>Technical Architecture/Digital enablement</h5>
                        <text>{WELCOME_DATA[37].port}</text>
                        <br/>
                        <text>{WELCOME_DATA[38].port}</text>
                        <text>{WELCOME_DATA[39].port}</text>
                        <text>{WELCOME_DATA[40].port}</text>


 
                        
                    </div>
                    <div className="rightCard">

                    </div>
                    <div className="leftCard">

                    </div>
                    <div className="rightCard">

                    </div>

                </div>
            : 
                <div>
                    <h3>{WELCOME_DATA[33].eng}</h3>
                </div>
            }
        </div>
    )
}

export default Experience

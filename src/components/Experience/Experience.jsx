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
                    <hr width="1" size="750" style={{position:"absolute", zIndex:"200", marginTop:"0%", color:"black", marginLeft:"50vw"}}></hr>
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
                        <br/>
                        <text>{WELCOME_DATA[39].port}</text>
                        <br/>
                        <text>{WELCOME_DATA[40].port}</text>
                        <br/>
                        <text>{WELCOME_DATA[41].port}</text>
                    </div>
                    <div className="rightCard">
                        <h4>{WELCOME_DATA[42].port}</h4>
                        <h5>{WELCOME_DATA[43].port}</h5>
                        <text>{WELCOME_DATA[44].port}</text>
                        <br/>
                        <h5>{WELCOME_DATA[45].port}</h5>
                        <text>{WELCOME_DATA[46].port}</text>

                    </div>
                    <div className="leftCard">
                    <h4>{WELCOME_DATA[47].port}</h4>
                        <h5>{WELCOME_DATA[48].port}</h5>
                        <text>{WELCOME_DATA[49].port}</text>
                        <br/>
                        <text>{WELCOME_DATA[50].port}</text>
                        <br/>
                        <text>{WELCOME_DATA[51].port}</text>


                    </div>
                    <div className="rightCard">
                        <h4>{WELCOME_DATA[52].port}</h4>
                        <h5>{WELCOME_DATA[53].port}</h5>
                        <text>{WELCOME_DATA[54].port}</text>
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

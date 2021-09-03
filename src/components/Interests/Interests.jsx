import React from 'react';
import './Interests.css';
import WELCOME_DATA from '../Welcome.json';
import softwareDevelopmentIcon from '../../assets/software-development.png';
import systemsArchitectureIcon from '../../assets/systems-architecture.png';
import renewableEnergyIcon from '../../assets/renewable-energy.jpg';
import smartGridsIcon from '../../assets/smart-grids.png';


const Interests = (props) => {


    return (
        <div className="InterestsContainer">
        {props.language=== 'port'
        ?
            <div>
                <h3>{WELCOME_DATA[5].port}</h3>
                <div className="InterestsText">
                <table style={{marginTop:"0px", marginLeft: "5%", textAlign:"center", border:"0px ", borderRadius:"5px", width:"90%", fontSize:"18px"}}>
                    <tbody id="content">
                        <tr  >
                            <td >{WELCOME_DATA[6].port}
                            </td>
                            <td >{WELCOME_DATA[7].port}
                            </td>
                            <td >{WELCOME_DATA[8].port}

                            </td>
                            <td >{WELCOME_DATA[9].port}
                            </td>
                        </tr>
                        <tr>
                        <td >
                                <img className="interestsImg" alt="softwareDev" src={softwareDevelopmentIcon}></img>
                            </td>
                            <td >
                                <img className="interestsImg" alt="systemsArch" src={systemsArchitectureIcon}></img>
                            </td>
                            <td >
                            <img className="interestsImg" alt="smart" src={smartGridsIcon}></img>

                            </td>
                            <td >
                            <img  className="interestsImg" alt="renewable" src={renewableEnergyIcon}></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        : 
            <div>
                <h3>{WELCOME_DATA[5].eng}</h3>
                <div className="InterestsText">
                <table style={{marginTop:"0px", marginLeft: "5%", textAlign:"center", border:"0px ", borderRadius:"5px", width:"90%", fontSize:"18px"}}>
                    <tbody id="content">
                        <tr  >
                            <td >{WELCOME_DATA[6].eng}
                            </td>
                            <td >{WELCOME_DATA[7].eng}
                            </td>
                            <td >{WELCOME_DATA[8].eng}

                            </td>
                            <td >{WELCOME_DATA[9].eng}
                            </td>
                        </tr>
                        <tr>
                        <td >
                                <img className="interestsImg" alt="softwareDev" src={softwareDevelopmentIcon}></img>
                            </td>
                            <td >
                                <img className="interestsImg" alt="systemsArch" src={systemsArchitectureIcon}></img>
                            </td>
                            <td >
                            <img className="interestsImg" alt="smart" src={smartGridsIcon}></img>

                            </td>
                            <td >
                            <img  className="interestsImg" alt="renewable" src={renewableEnergyIcon}></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        }
        

        </div>
    )
}

export default Interests

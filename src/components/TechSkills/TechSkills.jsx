import React from 'react'
import './TechSkills.css'
import WELCOME_DATA from '../Welcome.json';


const TechSkills = (props) => {
    return (
        <div className="TechSkillsContainer">
            {props.language=== 'port'
            ?
                <div>
                    <h3>{WELCOME_DATA[10].port}</h3>
                    <h4>{WELCOME_DATA[11].port}</h4>
                    <table style={{marginTop:"0px", marginLeft: "5%", textAlign:"center", border:"1px solid grey ", borderRadius:"5px", width:"90%", fontSize:"18px"}}>
                    <tbody id="content">
                        <th>Development</th>
                        <th>QA</th>
                        <th>Production</th>
                    </tbody>
                    <tbody >
                        <tr style={{borderBottom:"1px solid grey"}}>
                            <td>{WELCOME_DATA[12].port}</td>
                            <td>{WELCOME_DATA[15].port}</td>
                            <td>{WELCOME_DATA[16].port}</td>
                        </tr>
                        <tr>
                            <td>{WELCOME_DATA[13].port}</td>
                        </tr>
                        <tr>
                            <td>{WELCOME_DATA[14].port}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            :
                <div>
                    <h3>{WELCOME_DATA[10].eng}</h3>
                    <h4>{WELCOME_DATA[11].eng}</h4>
                </div>
            }
        </div>
    )
}

export default TechSkills

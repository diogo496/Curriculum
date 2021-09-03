import React, {useState, useEffect} from 'react'
import './TechSkills.css'
import WELCOME_DATA from '../Welcome.json';


const TechSkills = (props) => {

    const [length, setLength] = useState(false)

    const listenScrollEvent = (event) => {
        if (window.scrollY < 70) {
          return setLength(false)
        } else if (window.scrollY > 70) {
          return setLength(true)
        } 
        console.log(window.scrollY)
      }
      
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        console.log(window.scrollY)
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      });

    return (
        <div className="TechSkillsContainer">
            {props.language=== 'port'
            ?
                <div>
                    <h3>{WELCOME_DATA[10].port}</h3>
                    <h4>{WELCOME_DATA[11].port}</h4>
                    
                    <table style={{marginTop:"0px", marginLeft: "5%", textAlign:"center", border:"1px solid grey ", borderRadius:"5px", width:"90%", fontSize:"18px"}}>
                    <tbody id="content">
                        <th style={{width:"30%"}}>Skill </th>
                        <th></th>
                    </tbody>
                    <tbody >
                        <tr>
                            <td>{WELCOME_DATA[12].port}</td>
                            <td>{length?
                                <div className="Skill">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[13].port}</td>
                            <td>{length?
                                <div className="Skill1">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[14].port}</td>
                            <td>{length?
                                <div className="Skill2">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[15].port}</td>
                            <td>{length?
                                <div className="Skill3">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[16].port}</td>
                            <td>{length?
                                <div className="Skill4">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[17].port}</td>
                            <td>{length?
                                <div className="Skill5">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[18].port}</td>
                            <td>{length?
                                <div className="Skill6">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[19].port}</td>
                            <td>{length?
                                <div className="Skill7">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[20].port}</td>
                            <td>{length?
                                <div className="Skill8">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[21].port}</td>
                            <td>{length?
                                <div className="Skill9">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[22].port}</td>
                            <td>{length?
                                <div className="Skill10">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[23].port}</td>
                            <td>{length?
                                <div className="Skill11">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[24].port}</td>
                            <td>{length?
                                <div className="Skill12">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[25].port}</td>
                            <td>{length?
                                <div className="Skill13">
                                </div>: null}
                            </td>
                        </tr>  
                    </tbody>
                    </table>

                    <h4>{WELCOME_DATA[26].port}</h4>
                    <table style={{marginTop:"0px", marginLeft: "5%", textAlign:"center", border:"1px solid grey ", borderRadius:"5px", width:"90%", fontSize:"18px"}}>
                        <tbody id="content">
                            <th style={{width:"30%"}}>Skill </th>
                            <th></th>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>{WELCOME_DATA[27].port}</td>
                                <td>{length?
                                    <div className="Skill7">
                                    </div>: null}
                                </td>
                            </tr>
                            <tr>
                                <td>{WELCOME_DATA[28].port}</td>
                                <td>{length?
                                    <div className="Skill1">
                                    </div>: null}
                                </td>
                            </tr>
                            <tr>
                                <td>{WELCOME_DATA[29].port}</td>
                                <td>{length?
                                    <div className="Skill7">
                                    </div>: null}
                                </td>
                            </tr>
                            <tr>
                                <td>{WELCOME_DATA[30].port}</td>
                                <td>{length?
                                    <div className="Skill7">
                                    </div>: null}
                                </td>
                            </tr>
                            <tr>
                                <td>{WELCOME_DATA[31].port}</td>
                                <td>{length?
                                    <div className="Skill4">
                                    </div>: null}
                                </td>
                            </tr>
                            <tr>
                                <td>{WELCOME_DATA[32].port}</td>
                                <td>{length?
                                    <div className="Skill1">
                                    </div>: null}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            :
                <div>
                    <h3>{WELCOME_DATA[10].eng}</h3>
                    <h4>{WELCOME_DATA[11].eng}</h4>
                    <table style={{marginTop:"0px", marginLeft: "5%", textAlign:"center", border:"1px solid grey ", borderRadius:"5px", width:"90%", fontSize:"18px"}}>
                    <tbody id="content">
                        <th style={{width:"30%"}}>Skill </th>
                        <th></th>
                    </tbody>
                    <tbody >
                        <tr>
                            <td>{WELCOME_DATA[12].eng}</td>
                            <td>{length?
                                <div className="Skill">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[13].eng}</td>
                            <td>{length?
                                <div className="Skill1">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[14].eng}</td>
                            <td>{length?
                                <div className="Skill2">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[15].eng}</td>
                            <td>{length?
                                <div className="Skill3">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[16].eng}</td>
                            <td>{length?
                                <div className="Skill4">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[17].eng}</td>
                            <td>{length?
                                <div className="Skill5">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[18].eng}</td>
                            <td>{length?
                                <div className="Skill6">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[19].eng}</td>
                            <td>{length?
                                <div className="Skill7">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[20].eng}</td>
                            <td>{length?
                                <div className="Skill8">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[21].eng}</td>
                            <td>{length?
                                <div className="Skill9">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[22].eng}</td>
                            <td>{length?
                                <div className="Skill10">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[23].eng}</td>
                            <td>{length?
                                <div className="Skill11">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[24].eng}</td>
                            <td>{length?
                                <div className="Skill12">
                                </div>: null}
                            </td>
                        </tr>
                        <tr >
                            <td>{WELCOME_DATA[25].eng}</td>
                            <td>{length?
                                <div className="Skill13">
                                </div>: null}
                            </td>
                        </tr>  
                    </tbody>
                    </table>

                    <h4>{WELCOME_DATA[26].eng}</h4>
                    <table style={{marginTop:"0px", marginLeft: "5%", textAlign:"center", border:"1px solid grey ", borderRadius:"5px", width:"90%", fontSize:"18px"}}>
                        <tbody id="content">
                            <th style={{width:"30%"}}>Skill </th>
                            <th></th>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>{WELCOME_DATA[27].eng}</td>
                                <td>{length?
                                    <div className="Skill7">
                                    </div>: null}
                                </td>
                            </tr>
                            <tr>
                                <td>{WELCOME_DATA[28].eng}</td>
                                <td>{length?
                                    <div className="Skill1">
                                    </div>: null}
                                </td>
                            </tr>
                            <tr>
                                <td>{WELCOME_DATA[29].eng}</td>
                                <td>{length?
                                    <div className="Skill7">
                                    </div>: null}
                                </td>
                            </tr>
                            <tr>
                                <td>{WELCOME_DATA[30].eng}</td>
                                <td>{length?
                                    <div className="Skill7">
                                    </div>: null}
                                </td>
                            </tr>
                            <tr>
                                <td>{WELCOME_DATA[31].eng}</td>
                                <td>{length?
                                    <div className="Skill4">
                                    </div>: null}
                                </td>
                            </tr>
                            <tr>
                                <td>{WELCOME_DATA[32].eng}</td>
                                <td>{length?
                                    <div className="Skill1">
                                    </div>: null}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default TechSkills

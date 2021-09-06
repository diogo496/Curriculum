import React, {useState, useEffect, useRef} from 'react'
import { Toolbar, About, BasicInformation, Interests, TechSkills, Experience } from '../../components';
import portugueseFlag from '../../assets/portugueseFlag.png';
import englishFlag from '../../assets/englishFlag.png';
import './New.css'
import TEXT from '../../components/Text.json'

const New = () => {

    const [language,setLanguage] = useState(0)
    const [imageHeight, setImageHeight] = useState(false);
    const [isMobile, setIsMobile] = useState(true)

    const myRef = useRef(null)

    const refAbout = useRef(null)
    const refBasicInfo = useRef(null)
    const refInterests = useRef(null)
    const refSkills = useRef(null)
    const refExperience = useRef(null)

    const executeScrollAbout = () => refAbout.current.scrollIntoView()    
    const executeScrollInfo = () => refBasicInfo.current.scrollIntoView()    
    const executeScrollInterests = () => refInterests.current.scrollIntoView()    
    const executeScrollSkills = () => refSkills.current.scrollIntoView()    
    const executeScrollExperience = () => refExperience.current.scrollIntoView()    


    const handlePort = ()=> {
        localStorage.setItem('language','port')
        setLanguage(0)

    }

    const handleEng = ()=> {
        localStorage.setItem('language','eng')
        setLanguage(1)
    }

    const handleResize = () =>{
        if (window.innerWidth <720){
            setIsMobile(false)
        }else{
            setIsMobile(window.innerWidth)
        }
        console.log("innerWidth=>",window.innerWidth)
    }

    const getImageHeight = (height) => {
        setImageHeight(height)
        console.log("height in home page =>",height)
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        if (!imageHeight){
            setImageHeight(430)
        }
        console.log("isMobile=>",isMobile)
        
        if( isMobile > 1100){
            setImageHeight(430)
        }else if(isMobile >720){
            setImageHeight(270)
        }
    })

    return (
        <div style={{overflowX:"hidden"}}>
            <div className="selectLanguageToolBar">
                <img className="flagEng" src={englishFlag} alt="englishFlag" onClick={handleEng}></img>
                <img className="flagPort" src={portugueseFlag} alt="portugueseFlag" onClick={handlePort}></img>
                <span style={{float:"right", paddingRight:"5px", paddingTop:"2px"}}>Select language</span>
            </div>
            <Toolbar getImageHeight={getImageHeight} language={language}></Toolbar>
            <div style={{position:"relative", width:"auto", height:imageHeight}}></div>
            <div className="MenuContainer">
                <div className="MenuItem" onClick={executeScrollAbout}>
                    {TEXT[1][language].text} 
                </div>
                <div className="MenuItem" onClick={executeScrollInfo}> 
                    {TEXT[3][language].text}
                </div>
                <div className="MenuItem" onClick={executeScrollInterests}> 
                    {TEXT[5][language].text}
                </div>
                <div className="MenuItem" onClick={executeScrollSkills}>
                    {TEXT[10][language].text}
                </div>
                <div className="MenuLastItem" onClick={executeScrollExperience}> 
                    {TEXT[33][language].text}
                </div>
            </div>
            <About  language={language} ref={refAbout}></About>
            <BasicInformation language={language} ref={refBasicInfo}/>
            <Interests language={language} isMobile={isMobile} ref={refInterests}/>
            <TechSkills language={language} ref={refSkills}/>
            <Experience language={language} isMobile={isMobile} ref={refExperience}/>



        </div>
    )
}

export default New

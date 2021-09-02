import React, {useState} from 'react'
import { Toolbar, About, BasicInformation } from '../components';
import portugueseFlag from '../assets/portugueseFlag.png';
import englishFlag from '../assets/englishFlag.png';
import './HomePage.css';
const HomePage = () => {

    const [language,setLanguage] = useState('port')

    const handlePort = ()=> {
        localStorage.setItem('language','port')
        setLanguage('port')

    }

    const handleEng = ()=> {
        localStorage.setItem('language','eng')
        setLanguage()
    }


    return (
        <div>
            <div className="selectLanguage">
                <img className="flagPort" src={portugueseFlag} alt="portugueseFlag" onClick={handlePort}></img>
                <img className="flagEng" src={englishFlag} alt="englishFlag" onClick={handleEng}></img>

            </div>
            <Toolbar language={language}></Toolbar>
            <About language={language}></About>
            <BasicInformation language={language}/>
            
        </div>
    )
}

export default HomePage

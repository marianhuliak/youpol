import React, { useState , useEffect} from 'react';
import logo from '../images/youpol_logo_2017.svg';
import magnifier from '../images/search_magnifier.svg';
import themeImg from '../images/theme_button.png';
import './Nav.css';
import './Theme.css'



const Nav = () => {

    const [currentTheme, setCurrentTheme] = useState('light'); 

    const clickThemeHandler = () => {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
        
    }

    /*
    useEffect(() => {
       document.body.className = currentTheme === 'light' ? 'body-light' : 'body-dark'; 

    }, [currentTheme]); 
    */

    useEffect(() => {
        document.body.classList.remove('body-light', 'body-dark');
        
        const className = currentTheme === 'light' ? 'body-light' : 'body-dark';
        document.body.classList.add(className);
    }, [currentTheme]);
    

    return (
        <div className="navi">
            <div className="mainLogoContainer">
                <img className='mainLogo' src={logo} alt="Logo" />
            </div>

            <div className="searchContainer">
                <label className='exp'>
                    <input className="searchInput" type="text" placeholder="Search" />
                    <button className="searchButton">
                        <img style={{ width: "30px" }} src={magnifier} alt="YouPol music" />
                    </button>
                </label>
            </div>

            <div className="themeButtonContainer">
                <button onClick={clickThemeHandler} className="themeButton">
                    <img style={{ width: "30px" }} src={themeImg} alt="Theme" />
                </button>
            </div>

        </div>


    );
};

export default Nav;

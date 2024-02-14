import React, { useState , useEffect} from 'react';
import logo from '../images/youpol_logo_2017.svg';
import logoWhite from '../images/youpol_logo_2017_white.svg';
import magnifier from '../images/search_magnifier.svg';
import themeImg from '../images/theme_button.png';
import './Nav.css';
import './Theme.css'


const Nav = () => {

    const [currentTheme, setCurrentTheme] = useState('light'); 
    const [inputValue, setInputValue] = useState('');

    const clickThemeHandler = () => {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    const clickSearchHandler = () => {
        setInputValue('');
    }

    useEffect(() => {
        document.body.classList.remove('body-light', 'body-dark');
        
        const className = currentTheme === 'light' ? 'body-light' : 'body-dark';
        document.body.classList.add(className);

    }, [currentTheme]);
    

    return (
        <div className="navi">
            <div className="mainLogoContainer">
                <img className='mainLogo' src={currentTheme === 'light' ? logo : logoWhite} alt="Logo" />
            </div>

            <div className="searchContainer">
                <label className='exp'>
                    <input className="searchInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                    type="text" placeholder="Search" />
                    <button onClick={clickSearchHandler} className="searchButton">
                        <img style={{ width: "30px" }} src={magnifier} alt="YouPol music" />
                    </button>
                </label>
            </div>

            <div> 
                <input onClick={clickThemeHandler} type="checkbox" id="checkbox" />
            </div>
           

        </div>


    );
};

export default Nav;

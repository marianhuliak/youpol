import React, { useState } from 'react';
import Nav from './Nav.js';
import MainMenu from './MainMenu.js';
import Baner from './Baner.js';
import './Home.css';

const Home = () => {
    return (
        <>
            <Nav />
            <div className='homeComtainer'>
                <MainMenu />
                <Baner />
            </div>
            <h1>Hello</h1>
        </>
    );
};

export default Home;
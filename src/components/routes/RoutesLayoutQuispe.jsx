import React, {useState} from 'react';
import { Box, Grid } from '@material-ui/core';
import { NavbarQuispe } from './NavbarQuispe';
import { Routes, Route } from 'react-router-dom';
import { HomeQuispe } from '../home/HomeQuispe';
import { AboutQuispe} from '../about/AboutQuispe'
import './RoutesLayoutQuispe.css';

export const RoutesLayoutQuispe = () => {
    const [darkMode, setDarkMode] = useState(true);
    function handleClick() {
        setDarkMode(!darkMode);
    }
    return(
        <Grid container spacing={1} className={`content ${darkMode ? 'dark' : 'light'}`}>
            <Grid item xs={11} component={'header'} className={`${darkMode? 'dark' : 'light'}`}>
                <NavbarQuispe darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item xs={11} className={`container-content ${darkMode? 'dark' : 'light'}`}>
                <Routes>
                    <Route exact path={'/Home'} element={<HomeQuispe/>}/>
                    <Route exact path={'/AboutQuispe'} element={<AboutQuispe/>}/>
                </Routes>
            </Grid>
            <Grid item xs={11} component={'footer'}>
                <Box className={`${darkMode? 'dark': 'light'} text-footer`}
                >
                    <p>template created with &hearts; by <a href={'https://es.reactjs.org/'}>react js</a></p>
                    <p>&copy; 2022</p>
                </Box>
            </Grid>
        </Grid>
    )
}
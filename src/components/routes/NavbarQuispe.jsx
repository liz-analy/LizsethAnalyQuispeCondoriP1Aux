import { Box, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { info } from '../utilities/Info';
import './NavbarQuispe.css'
import UserContext from '../../context/UserContext';
import MoreInfo from '../utilities/MoreInfo';

export const NavbarQuispe = ({ darkMode, handleClick }) => {
    
    const userData={
        nombre: `${info.firstName}`,
        apellido:`${info.lastName}`,
    }

    const location = useLocation();
    const [active,setActive]= useState(location.pathname==='/'?'home': location.pathname.slice(1,location.pathname.length));
    console.log("🚀 ~ file: NavbarQuispe.jsx ~ line 29 ~ NavbarQuispe ~ active", active)
    return(

        <UserContext.Provider value={userData}>
            <Grid container component={'nav'}>
            <Grid item xs={5} component={'section'} className={``}>
                {
                    info.links.map(link =>(
                        <Link key={link.active} to={link.to} className={`links ${(link.active === active && !link.type) && 'active'}`}
                        onClick={() => setActive(link.active)}>
                            
                            <p className={`${darkMode ? 'dark' : 'light'}`} >{link.name}</p>
                        </Link>
                    ))
                }
            </Grid>
            <Grid item xs={2} component={'section'}>
                <Box>
                    {
                        darkMode ?
                        <img className='bombilla' onClick={handleClick}
                        src="https://cdn.pixabay.com/photo/2016/03/31/15/29/bulb-1293332_640.png" alt=""/>
                        :
                        <img className='bombilla' onClick={handleClick}
                        src="https://cdn.pixabay.com/photo/2016/04/09/16/09/light-bulb-1318335_1280.png" alt=""/>
                    }
                </Box>
            </Grid>
                <Grid item xs={2} component={'section'}>
                    <Box>
                        <img className='imagen'  
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibg5f0fBrTxJSacQUfseRAN27xwQD9tId5Q&usqp=CAU" alt=""/>
                        
                        </Box>
                    <MoreInfo />
                </Grid>
            </Grid>
        </UserContext.Provider>
    )
}
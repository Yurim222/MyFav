import React, { Component } from 'react';
import {Box, Tabs, Tab, Typography, AppBar, CssBaseline} from '@mui/material';
import SearchPage from './SearchPage';
import Youtube from './Youtube';
import Secondtab from './Secondtab';
import Chart from './Chart';
import chart_list from './data';


export default function App () {
    const [currentTab, setCurrentTab] = React.useState(0);
    const [searchResult, setSearchResult] = React.useState([]);
    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    }

    return (
        <div style= {{ backgroundColor : "#303030", minHeight : "900px"}}>
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="fixed">
            <Typography align="center" variant="h3" color="inherit">Favorite Music</Typography>
            </AppBar>
            <AppBar position="fixed" style={{backgroundColor : "#303030", outlineColor:"#303030"}}>
                <Typography align="center" variant="h3" color="pink" style={{fontFamily :"fantasy"}}>Favorite Music</Typography>
            </AppBar>
            <div style={{height: 60, width: '100%', backgroundColor : "#303030"}}></div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor : "#303030"}}>
                <Tabs value={currentTab} onChange={handleTabChange} aria-label="basic tabs" centered >
                  <Tab label="Search Music" value={0} style={{color: "pink"}}/>
                  <Tab label="Favorites" value={1} style={{color: "pink"}}/>
                  <Tab label="Chart"value={2} style={{color: "pink"}}/>
                  <Tab label="Video"value={3} style={{color: "pink"}}/>
                </Tabs>
            </Box>

            { currentTab == 0 && <SearchPage list={searchResult} onSearch={setSearchResult}/> }
            { currentTab == 1 && <Secondtab/>}
            { currentTab == 2 &&  <Chart list={chart_list}/>}
            { currentTab == 3 && <Youtube urlid = "ptfbkgbiitM"/>}
            
        </React.Fragment>
        </div>
    )
}


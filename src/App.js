import React from 'react';
import {Box, Tabs, Tab, Typography, AppBar, CssBaseline} from '@mui/material';
import SearchPage from './SearchPage';
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
        <React.Fragment>
            <CssBaseline/>

            <AppBar position="fixed" style={{backgroundColor : "#303030", outlineColor:"#303030"}}>
                <Typography align="center" variant="h3" color="pink" style={{fontFamily :"fantasy"}}>Favorite Music</Typography>
            </AppBar>
            <div style={{height: 60, width: '100%', backgroundColor : "#303030"}}></div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={currentTab} onChange={handleTabChange} aria-label="basic tabs"
                    centered style={{backgroundColor : "#303030", color: "pink"}}>
                  <Tab label="Search Music" value={0} style={{color: "pink"}}/>
                  <Tab label="Favorites" value={1} style={{color: "pink"}}/>
                  <Tab label="Chart"value={2} style={{color: "pink"}}/>
                  <Tab label="More Content2"value={3} style={{color: "pink"}}/>
                </Tabs>
            </Box>

            { currentTab == 0 && <SearchPage list={searchResult} onSearch={setSearchResult}/> }
            { currentTab == 1 && <Secondtab></Secondtab> }
            { currentTab == 2 &&  <Chart list={chart_list}/>}

        </React.Fragment>
    )
};


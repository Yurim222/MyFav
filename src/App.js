import React from 'react';
import {Box, Tabs, Tab, Typography, AppBar, CssBaseline} from '@mui/material';
import SearchPage from './SearchPage';
import Secondtab from './Secondtab';


export default function App () {
    const [currentTab, setCurrentTab] = React.useState(0);
    const [searchResult, setSearchResult] = React.useState([]);


    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    }

    return (
        <React.Fragment>
            <CssBaseline/>

            <AppBar position="fixed" style={{background : '#FCE4EC'}}>
                <Typography align="center" variant="h3" color="black">Favorite Music</Typography>
            </AppBar>
            <div style={{height: 60, width: '100%'}}></div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTab} onChange={handleTabChange} aria-label="basic tabs"
                    centered >
                  <Tab label="Search Music" value={0}  />
                  <Tab label="Favorites" value={1}  />
                  <Tab label="More Contents"value={2}  />
                  <Tab label="VIDEOS"value={3}  />
                </Tabs>
            </Box>

            { currentTab == 0 && <SearchPage list={searchResult} onSearch={setSearchResult}/> }
            { currentTab == 1 && <Secondtab></Secondtab> }
            { currentTab == 2 &&  
                <Typography align="center" variant="h2" > Item Three </Typography>}

        </React.Fragment>
    )
};


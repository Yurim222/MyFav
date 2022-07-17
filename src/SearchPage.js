import React from 'react';
import {Button, TextField, Typography} from '@mui/material';
import MusicList from './MusicList';

export default function SearchPage ({list, onSearch}) {
    const [searchWord, setSearchWord] = React.useState('');
    
    const styles = {
        btn: {
            backgroundColor : "pink",
            paddingColor : "#303030",
            
            
        },
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchWord);
        setSearchWord('');
        fetch(`http://itunes.apple.com/search?term=${searchWord}&entity=album`)
        .then(r => r.json()).then(r => {
            console.log(r);
            onSearch(r.results);
            setSearchWord('');
        }).catch(e => console.log('error when search musician'));
    }
    
    const handleSearchTextChange = (event) => {
        setSearchWord(event.target.value);
    }
    
    return (
        <React.Fragment>

            <form style={{display: 'flex', flexDirection: "column", marginTop : "30px", marginBottom : "25px", backgroundColor : "#303030"}}>
            <div>
                <Typography variant='h1' style={{ marginBottom : '2%', fontFamily :"fantasy"}} color="pink" align="center">
                    		mashed potato</Typography>
            </div>
            <div style={{display : 'flex', marginLeft : 'auto', marginRight : 'auto', marginBottom:'3%', backgroundColor : "#303030"}}>
                    <TextField variant="outlined" label="Music Album Search" type="search" style={{width : 450, backgroundColor : "white", marginRight : "3%", color:"pink"}}
                        onChange={handleSearchTextChange} value={searchWord}>
                    </TextField>
                    <Button variant="contained" color="primary" 
                        type="submit" onClick={handleSearch}
                        sx={styles.btn}
                        >
                        Search
                    </Button>
                </div>
            </form>

            <MusicList list={list}>
            </MusicList>
        </React.Fragment>
    )
}

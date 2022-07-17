import React from 'react';
import {Button, TextField} from '@mui/material';
import MusicList from './MusicList';

export default function SearchPage ({list, onSearch}) {
    const [searchWord, setSearchWord] = React.useState('');
    
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

            <form style={{display: 'flex', marginTop : 20, marginBottom : 15}}>
                <div style={{display : 'flex', marginLeft : 'auto', marginRight : 'auto',}}>
                    <TextField variant="outlined" label="Music Album Search" type="search" style={{width : 450}}
                        onChange={handleSearchTextChange} value={searchWord}>
                    </TextField>
                    <Button variant="contained" color="primary" 
                        type="submit" onClick={handleSearch} 
                        style={{marginLeft : 20, color : "black"}}>
                        Search
                    </Button>
                </div>
            </form>

            <MusicList list={list}></MusicList>
        </React.Fragment>
    )
}

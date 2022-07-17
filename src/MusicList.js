import React, { useEffect } from 'react';
import {Card, CardContent, CardActions, Typography, IconButton} from '@mui/material';
import {Favorite, FavoriteBorder} from '@mui/icons-material';
import SnackMsg from './SnackMsg';
import {useStore} from "../src/model/Store"

const styles = {
    content : {},
    layout : {
        display : 'flex',
        justifyContent : 'center'
    },
    card: {
        minWidth: 275,
        maxWidth: 600,
        marginBottom : "20pt",
        marginLeft : 'auto',
        marginRight : 'auto',
        backgroundColor : "white",
    },
};


export default function MusicList ({list}) {
    const [likes, setLikes]= React.useState({});
    const [snackState, setSnackState] = React.useState({open : false, msg : ''})

    const toggleFavorite = (id, name) => {
        // React Hooks useState() with Object
        // https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object

        // state variables are read-only. You cannot update state variables directly.

        setLikes({...likes, [id] : !likes[id]}); 

        //snackState = { open : true, msg : `${id} is clicked`}
        setSnackState({...snackState, open : true, msg : `${name} is added` })
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackState({open : false, msg : ''});
    }       
    

    const {likelist,add} = useStore();
    //src/model/Store.js에 있는 전역 변수 및 함수를 가져와서 쓴다. 이런식으로 어떠한 페이지에서도 likeList를 가져올 수 있음
    return (
        <div>
            {list.map(item => {
                return (
                <Card sx={styles.card} key={item.collectionId}>
                  <CardContent style={{display:"flex", flexDirection: "row"}}>
                    <img className = "artwork" src = {item.artworkUrl100} width= "70px" height="70px" style={{marginRight:"3%", justifyContent:"left"}}/>
                    <div style={{justifyContent:"center", width : 600}}>
                        <Typography variant="subtitle1"> {item.collectionCensoredName}</Typography>
                        <Typography variant="subtitle2"> {item.artistName}</Typography>
                    </div>
                    <CardActions>
                        <IconButton  onClick={()=>{
                                toggleFavorite(item.collectionId, item.collectionName);
                                add(item);
                            }
                                } style={{color : "pink"}}>
                        {(likes[item.collectionId] === true) ? 
                                <Favorite /> : <FavoriteBorder /> }
                        </IconButton>
                    </CardActions>
                    </CardContent>
                </Card>)
            })}
            <SnackMsg open = {snackState.open} message={snackState.msg} 
                onClose={handleSnackbarClose}/>
        </div>
    );
}
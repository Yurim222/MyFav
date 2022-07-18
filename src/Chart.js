import React from 'react';
import {Card, CardContent, Typography, CardActions, IconButton} from '@mui/material';
import {AiFillLike, AiOutlineLike} from 'react-icons/ai';
import SnackMsg from './SnackMsg';
import {useStore} from "../src/model/Store"



export default function Chart ({list}) {
    const [likes, setLikes] = React.useState({});
    const [snackState, setSnackState] = React.useState({open : false, msg : ''})

    const togglelike = (id, name) => {

        setLikes({...likes, [id] : !likes[id]}); 
        setSnackState({...snackState, open : true, msg : `${name} is added` })
    }
    
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackState({open : false, msg : ''});
    }     

    const {likelist,add} = useStore();

    return (
        <div style={{backgroundColor : "#303030", outlineColor:"pink"}}>
        <Typography variant='h2' style={{ marginTop : '2%', marginBottom : '2%', fontFamily :"fantasy"}} color="pink" align="center">
                    Billboard 200</Typography>
            {list.data.map(item => {
                return (
                <Card style={{backgroundColor:"#303030"}}>
                    <CardContent sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <div style= {{width : 50, height : 70, backgroundColor: "#303030", textAlign:"center"}}>
                            <Typography align="center" variant="h4" color="pink" style={{justifyContent: "center"}}>{item.rank}</Typography>
                        </div>
                            <img src={item.image} style= {{width : 70, height : 70, marginLeft : '3%', marginRight :'3%', backgroundColor: "#303030"}}/>
                        <div style={{width : 300, height: 70, backgroundColor: "#303030"}}>
                        <Typography variant="subtitle1" color="white"> {item.name}</Typography>
                        <Typography variant="subtitle2" color="white"> {item.artist}</Typography>
                        </div>   
                        <CardActions>
                        <IconButton  onClick={()=>{
                                togglelike(item.rank, item.name);
                            }
                                } style={{color : "pink"}}>
                        {(likes[item.rank] === true) ? 
                                <AiFillLike/> : <AiOutlineLike/> }
                        </IconButton>
                    </CardActions>
                        </CardContent>
                </Card>
                )
            })}
            <SnackMsg open = {snackState.open} message={snackState.msg} 
                onClose={handleSnackbarClose}/>
        </div>
    ); 
}


import React from 'react';
import {Card, CardContent, Typography, CardActions, IconButton} from '@mui/material';
import {Favorite, FavoriteBorder} from '@mui/icons-material';



export default function Chart ({list}) {
    const [likes, setLikes] = React.useState({});

const toggleFavorite = (id) => () => {
    setLikes({...likes, [id] : !likes[id]});
}
    return (
        <div style={{backgroundColor : "#303030", outlineColor:"pink"}}>
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
                        <IconButton  onClick={toggleFavorite(item.rank)} style = {{color : "pink"}}>
                            {(likes[item.rank] === true) ? 
                                <Favorite /> : <FavoriteBorder /> }
                        </IconButton>
                    </CardActions>
                        </CardContent>
                </Card>)
            })}
        </div>
    ); 
}


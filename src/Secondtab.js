import React, { useEffect } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  AppBar,
  CssBaseline,
  Card,
  CardContent,
  CardActions,
  IconButton
} from "@mui/material";
import MusicList from "./MusicList";
import { likes } from "./MusicList";
import {useStore} from "../src/model/Store"
import {Favorite, FavoriteBorder} from '@mui/icons-material';
import SnackMsg from './SnackMsg';
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
  },
};
export default function Secondtab() {
  const { likelist, delLike} = useStore();

  const [snackState, setSnackState] = React.useState({open : false, msg : ''})

  const handleSnackbarClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }

      setSnackState({open : false, msg : ''});
  } 
  const toggleFavoriteDel = (id,name)=>{
    setSnackState({...snackState, open : true, msg : `${name} is clicked` })
}
  useEffect(()=>{
    console.log("likelist",likelist.map(v=>v))
  },[likelist])
  return (
    <>
      {likelist.map((v)=>{
        return(
          <Card sx={styles.card} key={v.collectionId}>
            <CardContent>
              <Typography variant="subtitle2"> {v.artistName}</Typography>
              <Typography variant="subtitle1"> {v.collectionCensoredName}</Typography>
            </CardContent>
            <CardActions>
                        <IconButton  onClick={()=>{
                              toggleFavoriteDel(v.collectionId,v.collectionName)
                              delLike(v)
                            }
                                } style={{color : "pink"}}>
                        <Favorite /> 
                        </IconButton>
            </CardActions>
          </Card>
        )
      })}
      <SnackMsg open = {snackState.open} message={snackState.msg} 
                onClose={handleSnackbarClose}/>
    </>
  );
}

// main 페이지 하트 유지안됨
// delete 구현 해야됨
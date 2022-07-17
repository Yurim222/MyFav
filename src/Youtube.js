import React, { useState, useCallback } from 'react';
import ReactPlayer from 'react-player';
import {VscTriangleDown} from 'react-icons/vsc';
import {BsBookmarkHeartFill} from 'react-icons/bs';
import {IoHeartCircleOutline, IoLogoOctocat} from 'react-icons/io5';

var i = 0;
var url = "https://youtube.com/embed/";
var urlid = ['JC6budcACNE','6eEZ7DJMzuk','HoXrZsXyYMw','JAj9mGT0OfY','WPdWvnAAurg','bn_l7PTuSH0'];
var nameid = ['생감자', '최윤서', '한아영', '김유림', '이은정', '고하루'];
let button = url+urlid[i];

export default function Youtube(){
    // var url = ['ptfbkgbiitM','1o1YxCaVr2k','U1vB5_iWRaw'];  
    // var urlid = url.map(function(string){
    // return string;
    // });

    const [, updateState] = useState();
    const forceUpdate = useCallback(()=>updateState({}),[]);
    
    const onClickHandler1 = () =>{
        button = url+urlid[0];
        name = nameid[0];
        console.log(button);
    }

    const onClickHandler2 = () =>{
        button = url+urlid[1];
        name = nameid[1];
        console.log(button);
    }

    const onClickHandler3 = () =>{
        button = url+urlid[2];
        name = nameid[2];
        console.log(button);
    }

    const onClickHandler4 = () =>{
        button = url+urlid[3];
        name = nameid[3];
        console.log(button);
    }

    const onClickHandler5 = () =>{
        button = url+urlid[4];
        name = nameid[4];
        console.log(button);
    }

    const onClickHandler6 = () =>{
        button = url+urlid[5];
        name = nameid[5];
        console.log(button);
    }

    const styles = {
        btn : {
            padding:"0px", 
            border:"0px", 
            width:200, 
            height:200, 
            margin :"1.5%"
        },
        img : {
            width:200,
            height:200,
        }
    };

    return(
        <div align = "center" style={{backgroundColor:"#303030"}}>
            <h1 style={{color :"pink"}}><IoHeartCircleOutline color="pink"/> {name}님의 플레이리스트 </h1>
            <h1 style={{color :"pink"}}>click !</h1>
            <VscTriangleDown color="pink"/>
            <div align = "center">
            <div><button onClick = {onClickHandler1} style={styles.btn}><img src = "../img/momento.png" style ={styles.img}/></button>
            <button onClick = {onClickHandler2} style={styles.btn}><img src = "../img/heartiz.png" style ={styles.img}/></button>
            <button onClick = {onClickHandler3} style={styles.btn}><img src = "../img/everyletter.png" style ={styles.img}/></button></div>
            <div><button onClick = {onClickHandler4} style={styles.btn}><img src = "../img/4only.png" style ={styles.img}/></button>
            <button onClick = {onClickHandler5} style={styles.btn}><img src = "../img/savage.png" style ={styles.img}/></button>
            <button onClick = {onClickHandler6} style={styles.btn}><img src = "../img/newplant.png" style ={styles.img}/></button></div>
            </div>
            <h1><BsBookmarkHeartFill style={{color :"pink"}}/></h1>
            <h1 style={{color :"pink"}}>videos</h1>
            <div align = "center">
                <ReactPlayer 
                className = "player"
                url = {button}
                playing = {true}
                muted = {true}
                controls = {true}
                />
                <h3 style={{color :"pink"}}>탭 이동 후 음악 재생 됩니다</h3>
                <IoLogoOctocat color="pink"/>
                <h5 style={{color :"pink"}}>@mashedpotato.2022_ajou_summercoding</h5>
            </div>
            </div>
        )
}

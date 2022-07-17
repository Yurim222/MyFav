import React, { useState, useCallback } from 'react';
import ReactPlayer from 'react-player';
import {VscTriangleDown} from 'react-icons/vsc';
import {BsBookmarkHeartFill} from 'react-icons/bs';
import {IoHeartCircleOutline, IoLogoOctocat} from 'react-icons/io5';

var i = 0;
var url = "https://youtube.com/embed/";
var urlid = ['ptfbkgbiitM','U1vB5_iWRaw','HoXrZsXyYMw','JAj9mGT0OfY','rfl9vXP_fnQ','bn_l7PTuSH0'];
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


    return(
        <div align = "center">
            <h1><IoHeartCircleOutline/> {name}님의 플레이리스트 </h1>
            <h1>click !</h1>
            <VscTriangleDown/>
            <div align = "center">
            <div><button onClick = {onClickHandler1}><img src = "../img/momento.png" style ={{width:200, height:200}}/></button>
            <button onClick = {onClickHandler2}><img src = "../img/heartiz.png" style ={{width:200, height:200}}/></button>
            <button onClick = {onClickHandler3}><img src = "../img/everyletter.png" style ={{width:200, height:200}}/></button></div>
            <div><button onClick = {onClickHandler4}><img src = "../img/4only.png" style ={{width:200, height:200}}/></button>
            <button onClick = {onClickHandler5}><img src = "../img/savage.png" style ={{width:200, height:200}}/></button>
            <button onClick = {onClickHandler6}><img src = "../img/newplant.png" style ={{width:200, height:200}}/></button></div>
            </div>
            <h1><BsBookmarkHeartFill/></h1>
            <h1>videos</h1>
            <div align = "center">
                <ReactPlayer 
                className = "player"
                url = {button}
                playing = {true}
                muted = {true}
                controls = {true}
                />
                <h3>탭 이동 후 음악 재생 됩니다</h3>
                <IoLogoOctocat/>
                <h5>@mashedpotato.2022_ajou_summercoding</h5>
            </div>
            </div>
        )
}

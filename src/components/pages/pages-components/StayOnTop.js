import React from 'react';
import  './StayOnTop.css'
import {useState, useEffect} from 'react';


export default function StayOnTop(props){
    let elementTop;
    let getElementTop = () => {
        let StayOnTop = document.querySelector("#stay-on-top");
        // elementTop = StayOnTop.getBoundingClientRect().top;
        if(elementTop < 0){
            // StayOnTop.style.position = 'sticky'
        }
    }
        
    window.addEventListener('scroll', getElementTop)
        
    return(
    <>
        <div id='stay-on-top'>
            <div id='header'>{props.actualPage}</div>
            <div id='body'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, fugiat repellat! Perspiciatis, asperiores.</div>
        </div>
    </>);
}
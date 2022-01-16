import React from 'react';
import  './StayOnTop.css'
import {useState, useEffect} from 'react';


export default function StayOnTop(props){
    let prevScrollPos;
    let elementTop;
    let getElementTop = () => {
        if(elementTop < 0){
            // StayOnTop.style.position = 'sticky'
        }
    }
        
    window.addEventListener('scroll', getElementTop)
    
    let displayOnTop = () => {
        let currentScrollPos = window.scrollY;
        const stayOnTop = document.querySelector("#stay-on-top");
        let rect = stayOnTop.getBoundingClientRect();
        
        if(currentScrollPos < prevScrollPos || currentScrollPos == prevScrollPos){
            stayOnTop.style.top = '129px'
        }else{
            stayOnTop.style.top = '0px'
            
        }
        
        prevScrollPos = currentScrollPos;
    }

    window.addEventListener('scroll', displayOnTop);
        
    return(
    <>
        <div id='stay-on-top'>
            <div id='header'>{props.actualPage}</div>
        </div>
    </>);
}
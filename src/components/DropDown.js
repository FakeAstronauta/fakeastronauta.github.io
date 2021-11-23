import React from 'react';
import  './DropDown.css'
import {useState, useEffect} from 'react';

export default function DropDown(){
    useEffect(() => {
        let d = document.getElementsByClassName('drop-down-menu');
        d[0].style.backgroundColor = over ? 'white' : 'transparent';
    }, [])

    return(
        <div className = 'drop-down-menu'></div>
        );

}
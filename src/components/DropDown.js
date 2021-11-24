import React from 'react';
import  './DropDown.css'
import {useState, useEffect} from 'react';

export default function DropDown(){
    useEffect(() => {
        // var slideSource = document.getElementById('drop-down-menu');
        // slideSource.style.opacity = 1;
        // slideSource.classList.toggle('fade');

    }, [])

    return(
        <div id = 'drop-down-menu'></div>
        );

}
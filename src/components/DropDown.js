import React from 'react';
import  './DropDown.css'
import  FirstContents from './drop-down-contents/FirstContents'
import  SecondContents from './drop-down-contents/SecondContents'
import {Link} from 'react-router-dom';

// import {useState, useEffect} from 'react';

export default function DropDown(props){
    let names = [<FirstContents/>, <SecondContents/>]
    // useEffect(() => {
        
    // }, [])
    
    return(
        <div id='drop-down-menu' >
            {names[props.contentNumber]}
        </div>
        );

}
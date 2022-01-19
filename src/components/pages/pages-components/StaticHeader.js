import React from 'react';
import  './StaticHeader.css'
import { useState, useEffect } from 'react';


export default function StaticHeader(props){
    
    useEffect(async ()=>{
        const container = document.querySelector('#static-header');
        
        let raw = await fetch(`https://api.pexels.com/v1/photos/${props.headerImage}&size=small`,
            { headers: {
                Authorization: ''
            }});
            let data = await raw.json();
            container.innerHTML = `<img src='${data.src.landscape}'></img>`
    }, [])

    return(
    <>
    <div id='static-header'>
    </div>
        
    </>);
}
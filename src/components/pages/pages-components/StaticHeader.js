import React from 'react';
import  './StaticHeader.css'
import { useState, useEffect } from 'react';


export default function StaticHeader(props){
    
    useEffect(async ()=>{
        const container = document.querySelector('#static-header');
        
        let raw = await fetch(`https://api.pexels.com/v1/photos/${props.headerImage}&size=small`,
            { headers: {
                Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
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
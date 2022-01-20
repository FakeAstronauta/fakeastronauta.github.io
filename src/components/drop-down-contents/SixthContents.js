import React from 'react';
import {Link} from 'react-router-dom';
import './ContentsStyles.css'
import { useState, useEffect } from 'react';


export default function SixthContents(props){
    useEffect(async ()=>{
        const image = document.querySelector('.dropdown-contents > img');
        let raw = await fetch(`https://api.pexels.com/v1/photos/247115&size=small`,
        { headers: {
            Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
        }});
        let data = await raw.json();
        // imagesLinks.push(data.src.medium)
        image.src = data.src.medium;

        
    }, [])

    return(
        <div className='dropdown-contents inter'>
            <ul>
                <li className='title'>ALIQUAM</li>
                <li><Link to='/gifts' class='link'>ELIT</Link></li>
                <li><Link to='/gifts' class='link'>SINT</Link> </li>
                <li><Link to='/gifts' class='link'>DOLOR, SIT</Link></li>
                <li><Link to='/gifts' class='link'>CONSECTETUR</Link></li>
                <li><Link to='/gifts' class='link'>SINT ODIT</Link></li>
            </ul>
            <img className='drop-dow-images dropdown-big-image full-lenght-when-resize' src='https://via.placeholder.com/410x280'/> 
        </div>
    )
}

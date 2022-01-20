import React from 'react';
import {Link} from 'react-router-dom';
import './ContentsStyles.css'
import { useState, useEffect } from 'react';


export default function ThirdContents(props){
    const imagesId = ['10753697', '8980290'];
    let imagesLinks = [];

    useEffect(async ()=>{
        const firstImage = document.querySelector('.second-contents > .big-container > img');
        const secondImage = document.querySelector('.second-contents > .small-container > .inner > div > img');
        
        for(let id of imagesId){
            let raw = await fetch(`https://api.pexels.com/v1/photos/${id}&size=small`,
            { headers: {
                Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
            }});
            let data = await raw.json();
            imagesLinks.push(data.src.medium)
        }

        firstImage.src = imagesLinks[0];
        secondImage.src = imagesLinks[1];
    }, [])

    return(
            <div className='dropdown-contents second-contents'>
                <div className='big-container inter'>
                    <img className='drop-dow-images dropdown-small-images hide-when-resize' src='https://via.placeholder.com/179x229'/> 
                    <ul>
                        <li className='title'>CONSECTETUR</li>
                        <li><Link to='/' class='link'>DOLOR SIT AMET</Link></li>
                        
                    </ul>
                    
                </div>
                <div className='small-container inter'>
                    <span className='outside-title'>SINT ODIT</span>
                    <div className='inner'>
                        <div>
                            <img src='https://via.placeholder.com/179x229' className='drop-dow-images dropdown-small-images hide-when-resize'/> 
                        </div>
                        <ul>
                            <li className='title'>POSSIMUS EA QUAERAT</li>
                            <li><p className='paragraph gray-color'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt illum veniam facilis laborum soluta exercitationem, doloremque rerum aut? Deserunt corporis iure ea.</p></li>
                            <li><Link to='/our-accesories' class='link underline-links'>CONSECTETUR</Link></li>
                            <li style={{paddingTop: '10px'}}><Link to='/' class='link underline-links'  >SINT ODIT</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        
    )
}
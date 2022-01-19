import React from "react";
import './Offers.css';
import {useState, useEffect} from 'react';

export default function Offers(){
    useEffect(async ()=>{
        const container = document.querySelector('#offers > img');
        
        let raw = await fetch(`https://api.pexels.com/v1/photos/9393229&size=small`,
            { headers: {
                Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
            }});
            let data = await raw.json();
            container.src = data.src.landscape
    }, [])

    return(<>
        <div id='offers'>
            <img src='https://via.placeholder.com/507x380'></img>
            <div id='text'>
                <h2>Consectetur adipisicing elit</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique enim recusandae obcaecati itaque quos dolores!</p>
            </div>
        </div>
    
    </>);
}
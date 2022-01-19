import React from "react";
import './NewsSection.css';
import { useState, useEffect } from 'react';


export default function NewsSection(){
    useEffect(async ()=>{
        const container = document.querySelector('#news-section > img');
        
        let raw = await fetch(`https://api.pexels.com/v1/photos/1926769&size=small`,
            { headers: {
                Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
            }});
            let data = await raw.json();
            container.src = data.src.portrait
    }, [])

    return(<>
    {/* 1926769 */}
        <div id='news-section'>
            <img src=''></img>
            <div id='red-box'>
                <div id='text-box'>
                    <h2 className="cinzel">neque nisi facere impedit</h2>
                    <p className="inter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos sequi minima tempore voluptas illo reprehenderit suscipit, neque nisi facere impedit odit, fugiat magnam ullam consectetur nesciunt voluptates nemo id.</p>
                </div>
            </div>
        </div>
    </>)
}
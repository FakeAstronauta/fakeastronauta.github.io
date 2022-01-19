import React from "react";
import './ImagesGallery.css';
import {useState, useEffect} from 'react';

export default function ProductCounter(){
    useEffect( async () => {
        let container = document.querySelectorAll(`#images-gallery > #body > #images-container > div[class*='img-wrap']`)
        let raw = await fetch(`https://api.pexels.com/v1/search?query=gloss&per_page=5&orientation=portrait`,
            { headers: {
                Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
            }});
            let data = await raw.json();
                    
        container.forEach((d, i) => {d.innerHTML += `<img src='${data.photos[i].src.medium}'></img>`})
    }, [])
    return(<>
    <div id="images-gallery">
        <header>
            <div id='title'>Lorem ipsum</div>
        </header>
        <div id='body'>
            <div id='images-container'>
                <div className="img-wrap-one">
                    <p>Lorem ipsum dolor sit </p>
                    <div className="gradient"></div>
                </div>
                <div className="img-wrap-two">
                    <p>amet consectetur</p>
                    <div className="gradient"></div>
                </div>
                <div className="img-wrap-three">
                    <p>adipisicing elit</p>
                    <div className="gradient"></div>
                </div>
                <div className="img-wrap-four">
                    <p>Quam corrupti consequatur</p>
                    <div className="gradient"></div>
                </div>
                <div className="img-wrap-five">
                    <p>quia magni velit</p>
                    <div className="gradient"></div>
                </div>
            </div>
        </div>
    </div>
    </>)
}
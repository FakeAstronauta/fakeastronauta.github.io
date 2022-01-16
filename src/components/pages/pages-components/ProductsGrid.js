import React from 'react';
import  './ProductsGrid.css'
import { useState, useEffect } from 'react';

export default function ProductsGrid(){
    const [background, setBackground] = useState(null);

    function printInfo(){
        console.log(background.src.original);
    }

    useEffect(async ()=>{
        // let raw = await fetch('https://api.pexels.com/v1/photos/1126993',{ headers: {
        //     Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
        // }});
        // let data = await raw.json();
        // setBackground(data)
    }, []);

    background ? printInfo() : console.log('is null')

    return( 
       <>
        {background && <img src={background.src.medium}/>}
        
        <div class="grid-container">
            <div class="grid">
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                <div class='grid-item'>
                    <img src='pexels-godisable-jacob-965324.jpg'/>
                    <div id='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

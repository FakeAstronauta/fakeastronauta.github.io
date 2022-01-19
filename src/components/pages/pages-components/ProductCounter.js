import React from "react";
import './ProductCounter.css';
import {useState, useEffect} from 'react';

export default function ProductCounter(){
    let [textIndex, setTextIndex] = useState(0);
    let [imagesUrl, setImagesUrl] = useState([]);

    const thumbnailText = [
    'consectetur Magnam sit corporis quidem',
    'Lorem ipsum dolor sit',
    'amet consectetur adipisicing elit',
    'quas voluptates blanditiis maiores'
    ];

    let [bool, setBool] = useState(null);  //in this case I need useState because the app is redered after the value changes
    let [photoIndex, setPhotoIndex] = useState(0)
    let windowWidth = window.innerWidth;

    let addFade = () => { // el fade ocurre mal, las letras cambian normal. al presionarlo dos veces el fade no ocurre, creo que aun lo acciono antes que termine la transicion. puede que solo sea un limbo mental y que en eralidad solo me quede esperando el fade cuando en realidad no lo accione
        
        let bodyImage = document.querySelector('#product-counter > #body');
        if(bool != true){
            setBool(true);
            bodyImage.style.animation = 'fadeinout 1s linear none'
            setTimeout(() => {
                bodyImage.style.animation = 'none';
                setBool(false);
            }, 1000)
        }
    }

    // I was not able to fix the bug, when the page resize, the circle stay in the same previous position. I do not 
    // have enough time to fix it
    let moveSelector = (n, i) => {
        const smallContainer = document.querySelector('#product-counter > #body > #thumbnail > #img-container > img');
        const bigContainer = document.querySelector('#product-counter > #body > #image-full-size > img');
        let controllers = document.querySelector('#product-counter > #header > #controllers');
        if(bool != true){
            let buttonSelector = document.getElementById('circle-selector')
            buttonSelector.style.left = (((controllers.offsetWidth/8) * n) - (windowWidth >= 768 ? 13 : 10.5))  + 'px';
            addFade();
            setTimeout(() => { //change the text at the half of the transition
                setTextIndex(i);
                smallContainer.src = imagesUrl[i];
                bigContainer.src = imagesUrl[(imagesUrl.length / 2) + i]; // add the default image
            }, 500)
        }
        setPhotoIndex(i)
    }

    useEffect(async ()=>{
        const bigContainer = document.querySelector('#product-counter > #body > #image-full-size > img');
        const smallContainer = document.querySelector('#product-counter > #body > #thumbnail > #img-container > img');
        if(imagesUrl.length === 0){
            let raw = await fetch(`https://api.pexels.com/v1/search?query=perfume&per_page=8&orientation=portrait`,
            { headers: {
                Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
            }});
            let data = await raw.json();
            data.photos.forEach(async (d, i)=>{
                imagesUrl.push(d.src.portrait);
                // bigContainer.src = d.src.portrait;
                // smallContainer.src = d.src.medium;
                // container[i].innerHTML = `<img className='inner-gallery' src='${d.src.medium}'></img>`
            });
            console.log('fetch')
        }
        smallContainer.src = imagesUrl[0]; // add the default image
        bigContainer.src = imagesUrl[imagesUrl.length / 2]; // add the default image
        
    }, [])

    return(<>
        <div id='product-counter'>
            <div id='header'>
                <div id='title'>{thumbnailText[textIndex]}</div>
                <div id='controllers'>
                    <div id='controller-one' onClick={() => {moveSelector(1, 0)}}></div>
                    <div id='controller-two' onClick={() => {moveSelector(3, 1)}}></div>
                    <div id='controller-three' onClick={() => {moveSelector(5, 2)}}></div>
                    <div id='controller-four' onClick={() => {moveSelector(7, 3)}}></div>
                    <div id='circle-selector'></div>
                </div>
            </div>
            <div id='body'>
                <div id='thumbnail'>
                    <div id='img-container'>
                        <img src={imagesUrl[0]}></img>
                    </div>
                    <div id='title-container'>
                        <b>{thumbnailText[textIndex]}</b>
                    </div>
                    <div id='black-button'>LOREM IPSUM</div>
                </div>
                <div id='image-full-size'>
                    <img src='https://via.placeholder.com/350x480'></img>
                </div>
            </div>

        </div>
    </>)
}
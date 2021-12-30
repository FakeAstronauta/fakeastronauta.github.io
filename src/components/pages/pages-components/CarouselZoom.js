import React from 'react';
import  './CarouselZoom.css'
import {useState, useEffect} from 'react';


export default function CarouselZoom(){

    const galleryControls = ['previous', 'add', 'next'];
    const inner = document.querySelectorAll('.inner-gallery');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const carouselArray = [...galleryItems];
    const prev = document.querySelector('.gallery-control-prev');
    const next = document.querySelector('.gallery-control-next');
    const footerItems = [
        '1consectetur Magnam sit corporis quidem',
        '2Lorem ipsum dolor sit',
        '3amet consectetur adipisicing elit',
        '4Illo aliquid officiis',
        '5in ducimus nisi',
        '6nam dolor aperiam itaque', 
        '7quas voluptates blanditiis maiores'
    ];
    let lastprev = null;
    let lastnext = null;
    
    var [footerIndex, setfooterIndex] = useState(3);
    var [state, setState] = useState(false);
    
    var bool = null;
    var boolTwo = null;
    
    useEffect(() =>{

        let addFade = () => { // el fade ocurre mal, las letras cambian normal. al presionarlo dos veces el fade no ocurre, creo que aun lo acciono antes que termine la transicion. puede que solo sea un limbo mental y que en eralidad solo me quede esperando el fade cuando en realidad no lo accione
            let carouselFooterCont = document.querySelector('#carousel-footer-container');
            if(bool != true){
                bool = true;
                carouselFooterCont.style.animation = 'fadeinout 1s linear none'
                setTimeout(() => {
                    carouselFooterCont.style.animation = 'none';
                    bool = false
                }, 1000)
            }
        }

        let changeFooter = (i) => {
            if(bool != true){
                addFade();
                setTimeout(() => { //change the text at the half of the transition
                    if(true){setfooterIndex(footerIndex += i)} //se renderiza porque affecta de un solo al estate
                    if(footerIndex == footerItems.length){setfooterIndex(footerIndex -= footerIndex)}
                    if(footerIndex < 0){setfooterIndex(footerIndex += footerItems.length)}
                }, 500)
            }
        }

        // if the app rendered already
        if(state){

            // the buttons functions
            const moveToPrevious = () => {
                if(bool != true){
                if(lastprev != null){lastprev.style.transition = 'transform 1s'}; // the center element is scaled

                carouselArray[6].style.transition = 'none';
                lastprev = carouselArray[6]
                    setCurrentState(prev);
                }
                changeFooter(-1)
                
            }

            const moveToNext = () => {
                if(bool != true){
                if(lastnext != null){lastnext.style.transition = 'transform 1s'}; // the center element is scaled

                carouselArray[0].style.transition = 'none';
                lastnext = carouselArray[0]
                    setCurrentState(next);
                }
                changeFooter(1)
            }

            prev.addEventListener('click', moveToPrevious);
            next.addEventListener('click', moveToNext);

            // every element is updated and the carousel moves
            function updateGallery() {
                carouselArray.forEach(el => {
                    el.classList.remove('gallery-item-1');
                    el.classList.remove('gallery-item-2');
                    el.classList.remove('gallery-item-3');
                    el.classList.remove('gallery-item-4');
                    el.classList.remove('gallery-item-5');
                    el.classList.remove('gallery-item-6');
                    el.classList.remove('gallery-item-7');
                });
                
                // here every element rotates and gets the style of the earliest who was in the same place
                carouselArray.slice(0, 7).forEach((el, i) => {
                el.classList.add(`gallery-item-${i+1}`);
                });
            }

            // Update the current order of the carouselArray and gallery, here are passed the buttons
            function setCurrentState(direction) {
                if (direction.classList[0] == 'gallery-control-prev') {
                    carouselArray.unshift(carouselArray.pop()); // the last element is added at the beginning
                } else {
                    carouselArray.push(carouselArray.shift()); // the first element is added at the end
                }

                updateGallery();
            }

            
            return () => {
                prev.removeEventListener('click', moveToPrevious);
                next.removeEventListener('click', moveToNext);
            }
        }
        
        setState(true)

    }, [state])

    return(
    <>
    <div className="gallery">
        <span className='carousel-title inter'>LOREM IPSUM SIT AMET CONSECTETUR.</span>
        <div className="gallery-container">
            <div className="gallery-item gallery-item-1"><img className='inner-gallery' src='https://via.placeholder.com/200x300'></img></div>
            <div className="gallery-item gallery-item-2"><img className='inner-gallery' src='https://via.placeholder.com/200x300'></img></div>
            <div className="gallery-item gallery-item-3"><img className='inner-gallery' src='https://via.placeholder.com/200x300'></img></div>
            <div className="gallery-item gallery-item-4"><img className='inner-gallery' src='https://via.placeholder.com/200x300'></img></div>
            <div className="gallery-item gallery-item-5"><img className='inner-gallery' src='https://via.placeholder.com/200x300'></img></div>
            <div className="gallery-item gallery-item-6"><img className='inner-gallery' src='https://via.placeholder.com/200x300'></img></div>
            <div className="gallery-item gallery-item-7"><img className='inner-gallery' src='https://via.placeholder.com/200x300'></img></div>
            
            <span className="gallery-control-prev material-icons">navigate_before</span>
            <span className="gallery-control-next material-icons">navigate_next</span>
        </div>
        <div id='carousel-footer-container'>
            <span className='cinzel carousel-footer'>{footerItems[footerIndex]}</span>
            <div id='carousel-black-button'>
                <span id='button-text' className='inter'>LOREM IPSUM</span>
            </div>
        </div>
    </div>
    </>
    )
}

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

    let lastprev = null;
    let lastnext = null;
    var lastinner = null;

    const [state, setState] = useState(false)

    useEffect(() =>{
        if(state){
            console.log('fish')

            const moveToPrevious = () => {
                lastinner = inner[3];
                if(lastprev != null){lastprev.style.transition = 'transform 1s'};

                carouselArray[6].style.transition = 'none';
                lastprev = carouselArray[6]

                setCurrentState(prev);
            }

            const moveToNext = () => {
                lastinner = inner[3]
                if(lastnext != null){lastnext.style.transition = 'transform 1s'};

                carouselArray[0].style.transition = 'none';
                lastnext = carouselArray[0]

                setCurrentState(next);
            }

            prev.addEventListener('click', moveToPrevious);

            next.addEventListener('click', moveToNext);

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
                
                // here every elemento rotates and gets the style of the earliest who was in the same place
                carouselArray.slice(0, 7).forEach((el, i) => {
                el.classList.add(`gallery-item-${i+1}`);
                });
            }

                // carouselArray[4].style.transition = '1s';
                // carouselArray[0].style.transition = '1s';

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
    </div>
    </>
    )
}

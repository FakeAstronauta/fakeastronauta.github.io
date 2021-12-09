import React from 'react';
import  './CarouselZoom.css'
import {useState, useEffect} from 'react';


export default function CarouselZoom(){

    const galleryControls = ['previous', 'add', 'next'];
    const inner = document.querySelectorAll('.inner');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const carouselArray = [...galleryItems];
    const prev = document.querySelector('.gallery-controls-previous');
    const next = document.querySelector('.gallery-controls-next');

    let lastprev = null;
    let lastnext = null;
    let lastinner = null;

    const [state, setState] = useState(false)

    useEffect(() =>{
        if(state){

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
        }

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

            // carouselArray[4].style.transition = '1s';
            // carouselArray[0].style.transition = '1s';
        }

        // Update the current order of the carouselArray and gallery, here are passed the buttons
        function setCurrentState(direction) {

            if (direction.className == 'gallery-controls-previous') {
                carouselArray.unshift(carouselArray.pop()); // the last element is added at the beginning
            } else {
                carouselArray.push(carouselArray.shift()); // the first element is added at the end
            }

            updateGallery();
        }

        setState(true)

        return () => {
            prev.removeEventListener('click', moveToPrevious);
            next.removeEventListener('click', moveToNext);
        }

    }, [])

    return(
    <>
    <div className="gallery">
        <div className="gallery-container">
            <div className="gallery-item gallery-item-1"><img className='inner' src='https://via.placeholder.com/200x300'></img></div>
            <div className="gallery-item gallery-item-2"><img className='inner' src='https://via.placeholder.com/200x300'></img></div>
            <div className="gallery-item gallery-item-3"><img className='inner' src='https://via.placeholder.com/200x300'></img></div>
            <div className="gallery-item gallery-item-4"><img className='inner' src='https://via.placeholder.com/200x300'></img></div>
            <div className="gallery-item gallery-item-5"><img className='inner' src='https://via.placeholder.com/200x300'></img></div>
            <div className="gallery-item gallery-item-6"><img className='inner' src='https://via.placeholder.com/200x300'></img></div>
            <div className="gallery-item gallery-item-7"><img className='inner' src='https://via.placeholder.com/200x300'></img></div>
        </div>
        <div className="gallery-controls">
            <button type="button" className="gallery-controls-previous">prev</button>
            <button type="button" className="gallery-controls-next">next</button>
        </div>
    </div>
    </>
    )
}

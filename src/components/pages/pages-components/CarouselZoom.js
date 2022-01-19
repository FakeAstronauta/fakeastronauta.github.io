import React from 'react';
import  './CarouselZoom.css'
import {useState, useEffect} from 'react';

export default function CarouselZoom(){
    const galleryItems = document.querySelectorAll('.gallery-item');
    const carouselArray = [...galleryItems];
    const prev = document.querySelector('.gallery-control-prev');
    const next = document.querySelector('.gallery-control-next');
    const footerItems = [
        'consectetur Magnam sit corporis quidem',
        'Lorem ipsum dolor sit',
        'amet consectetur adipisicing elit',
        'Illo aliquid officiis',
        'in ducimus nisi',
        'nam dolor aperiam itaque', 
        'quas voluptates blanditiis maiores'
    ];

    let lastprev = null;
    let lastnext = null;
    
    let [footerIndex, setfooterIndex] = useState(3);
    let [state, setState] = useState(false);
    
    let bool = null; // in this case I can avoid using useState because the app is not redered after the value changes

    let addFade = () => { // el fade ocurre mal, las letras cambian normal. al presionarlo dos veces el fade no ocurre, creo que aun lo acciono antes que termine la transicion. puede que solo sea un limbo mental y que en eralidad solo me quede esperando el fade cuando en realidad no lo accione
        let carouselFooterCont = document.querySelector('#carousel-footer-container');
        if(bool != true){
            bool = true;
            carouselFooterCont.style.animation = 'fadeinout 1s linear none'
            setTimeout(() => {
                carouselFooterCont.style.animation = 'none';
                bool = false;
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

    useEffect(() =>{
        // if the app rendered already
        if(state){
            prev.addEventListener('click', moveToPrevious);
            next.addEventListener('click', moveToNext);

            return () => {
                prev.removeEventListener('click', moveToPrevious);
                next.removeEventListener('click', moveToNext);
            }
        }
        setState(true)
    }, [state])

    // Api consumption
    useEffect( async () =>{
        let container = document.querySelectorAll('.gallery-item')
        let singleImage = document.querySelector('#single-image')
        
        let raw = await fetch(`https://api.pexels.com/v1/search?query=purse&per_page=7&orientation=portrait`,
        { headers: {
            Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
        }});
        let data = await raw.json();

        data.photos.forEach(async (d, i)=>{
            container[i].innerHTML = `<img className='inner-gallery' src='${d.src.medium}'></img>`
        });
        // console.log(data.photos[0].src.medium)
        singleImage.src = data.photos[0].src.original;
    }, [])

    return(
    <>
    <div className="gallery">
        <span className='carousel-title inter'>LOREM IPSUM SIT AMET CONSECTETUR.</span>
        <div className="gallery-container">
            <div className="gallery-item gallery-item-1"></div>
            <div className="gallery-item gallery-item-2"></div>
            <div className="gallery-item gallery-item-3"></div>
            <div className="gallery-item gallery-item-4"></div>
            <div className="gallery-item gallery-item-5"></div>
            <div className="gallery-item gallery-item-6"></div>
            <div className="gallery-item gallery-item-7"></div>
            
            <div id='navigators-container'>
                <span className="gallery-control-prev material-icons">navigate_before</span>
                <span className="gallery-control-next material-icons">navigate_next</span>
            </div>
        </div>
        <img id='single-image' src='https://via.placeholder.com/650x750'></img>
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

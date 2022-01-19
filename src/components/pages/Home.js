import React from 'react';
import { useState, useEffect } from 'react';
import  './Home.css'

import CarouselZoom from './pages-components/CarouselZoom';
import NewsSection from './pages-components/NewsSection';
import ProductCounter from './pages-components/ProductCounter';
import ImagesGallery from './pages-components/ImagesGallery';
import Newsletter from './pages-components/Newsletter';
import Offers from './pages-components/Offers';

import {Carousel} from 'react-bootstrap';       
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DropDown(){
    const photoId = ['3811981', '10300959', '6763439']
    useEffect(async ()=>{
        let carousel = document.querySelectorAll('.d-block')
        photoId.forEach(async (d, i)=>{
            let raw = await fetch(`https://api.pexels.com/v1/photos/${d}&size=small`,
            { headers: {
                Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
            }});
            let data = await raw.json();
            carousel[i].src = data.src.landscape;
        })
    }, [])

    return(
    <>
    <style type="text/css">
    {`
        .w-100 {
            width: 100vw !important;
        }
        .carousel-control-next, .carousel-control-prev{
            z-index: 0;
        }
        .carousel-control-next-icon, .carousel-control-prev-icon{
            width: 6rem;
            height: 6rem;
        }    
        .carousel-indicators [data-bs-target]{
            width: 10px !important;
            height: 10px !important;
            border-radius: 50%;
            margin-left: 10px;
            margin-right: 10px;
        }

        .d-block{
            height: 100vh;
            object-fit: cover;
        }

        h3{
            font-size: 3rem;
        }

        p{
            font-size: 1.1rem;
        }

        .carousel-control-next-icon, .carousel-control-prev-icon{
            width: 3.5rem;
            height: 3.5rem;
        }
        
        @media screen and (max-width: 769px) {
            h3{
                font-size: 1.5rem;
            }

            .carousel-indicators [data-bs-target]{
                width: 5px !important;
                height: 5px !important;
            }

            p{
                font-size: .7rem;
            }
        }

    `}
    </style>
    <div id='home'>
        <div className='carousel-container'>
            <Carousel interval={3000}>
                <Carousel.Item className='header-carousel '>
                <div className='header-gradient'/>
                    <img
                    className="d-block w-100"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className='cinzel'>First slide label</h3>
                    <p className='inter'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='header-carousel '>
                    <div className='header-gradient'/>
                    <img
                    className="d-block w-100"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className='cinzel'>Second slide label</h3>
                    <p className='inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='header-carousel '>
                    <div className='header-gradient'/>
                    <img
                    className="d-block w-100"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className='cinzel'>Third slide label</h3>
                    <p className='inter'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
        <CarouselZoom></CarouselZoom>
        <NewsSection></NewsSection>
        <ProductCounter></ProductCounter>
        <ImagesGallery></ImagesGallery>
        <Offers></Offers>
        <Newsletter></Newsletter>
    </div>
    </>
    )
}
// I need to modify the carousel from boostrap

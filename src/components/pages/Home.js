import React from 'react';
import {Carousel} from 'react-bootstrap';
import  './Home.css'
import CarouselZoom from './pages-components/CarouselZoom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DropDown(){
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
    h3{
        font-size: 3rem;
    }

    p{
        font-size: 1.1rem;
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
                        src="pexels-godisable-jacob-965324.jpg"
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
                        src="pexels-godisable-jacob-965324.jpg"
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
                        src="pexels-godisable-jacob-965324.jpg"
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

            <img src='pexels-godisable-jacob-965324.jpg' style={{width: '100%', zIndex: '0'}}></img>
            {/* <a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, praesentium. Totam distinctio consectetur ducimus accusantium ut facere laudantium repellendus? Quod odit veritatis amet ut nobis, iure sit suscipit voluptatum.</a> */}
        </div>
    </>
    )
}
// I need to modify the carousel from boostrap

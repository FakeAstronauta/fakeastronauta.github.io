import React from "react";
import './ImagesGallery.css';
import {useState, useEffect} from 'react';

export default function ProductCounter(){
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
                    <img src='https://via.placeholder.com/230x400'></img>
                </div>
                <div className="img-wrap-two">
                    <p>amet consectetur</p>
                    <div className="gradient"></div>
                    <img src='https://via.placeholder.com/230x400'></img>
                </div>
                <div className="img-wrap-three">
                    <p>adipisicing elit</p>
                    <div className="gradient"></div>
                       <img src='https://via.placeholder.com/230x400'></img>
                </div>
                <div className="img-wrap-four">
                    <p>Quam corrupti consequatur</p>
                    <div className="gradient"></div>
                    <img src='https://via.placeholder.com/230x400'></img>
                </div>
                <div className="img-wrap-five">
                    <p>quia magni velit</p>
                    <div className="gradient"></div>
                    <img src='https://via.placeholder.com/230x400'></img>
                </div>
            </div>
        </div>
    </div>
    </>)
}
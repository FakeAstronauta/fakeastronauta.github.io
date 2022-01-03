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
                <div className="img-wrap"><img src='https://via.placeholder.com/230x400'></img></div>
                <div className="img-wrap"><img src='https://via.placeholder.com/230x400'></img></div>
                <div className="img-wrap"><img src='https://via.placeholder.com/230x400'></img></div>
                <div className="img-wrap"><img src='https://via.placeholder.com/230x400'></img></div>
                <div className="img-wrap"><img src='https://via.placeholder.com/230x400'></img></div>
            </div>
        </div>
    </div>
    </>)
}
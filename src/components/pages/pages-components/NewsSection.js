import React from "react";
import './NewsSection.css';

export default function NewsSection(){
    return(<>
        <div id='news-section'>
            <img src='https://via.placeholder.com/200x300'></img>
            <div id='red-box'>
                <div id='text-box'>
                    <h2 className="cinzel">neque nisi facere impedit</h2>
                    <p className="inter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos sequi minima tempore voluptas illo reprehenderit suscipit, neque nisi facere impedit odit, fugiat magnam ullam consectetur nesciunt voluptates nemo id.</p>
                </div>
            </div>
        </div>
    </>)
}
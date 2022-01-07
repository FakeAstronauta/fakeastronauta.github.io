import React from "react";
import './Newsletter.css';

export default function Newsletter(){
    return(<>
        <div id='newsletter'>
            <div id='text'>
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur dolorum id nemo facere aperiam consequuntur tenetur animi! Tempore fugit minus vel at.</p>
            </div>
            <div id="input">
                <form action="">
                    <input id='text-area' type='text' placeholder="Consectetur dolorum id nemo facere"></input>
                    <input id='button' type='submit'></input>
                </form>
            </div>
        </div>
    </>)
}
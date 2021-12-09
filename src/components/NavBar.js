import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

import './NavBar.css'
import '../App.css'
import DropDown from './DropDown';

export default function NavBar(){
    const [contentNumber, setcontentNumber] = useState(null);
    const [lastcontentNumber, setLastcontentNumber] = useState(null); // the last contentNumber    

    // used to show the underline content, if the mouse is over or out the elements
    const [mouseOut, setMouseOut] = useState(true);
    
    // only to chech when the cursor passes from one element to another
    const [state, setState] = useState(true)

    const [over, setOver] = useState(false); // display dropdown menu
    const [ready, setReady] = useState(false);  // used to avoid first render
    const r = () => setReady(true); // invoked under transition end block
    
//     const [background, setBackground] = useState(null);

//     useEffect(async ()=>{
//         let raw = await fetch('https://api.pexels.com/v1/photos/1126993',{ headers: {
//             Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
//         }});
//         let data = await raw.json();
//         setBackground(data)
//     }, []);


/** esto se acciona cuando el elemento ya esta creado y remueve ciertos elementos de la pagina*/
    useEffect(() => {

        // function called when transition ends
        const tr = () => {
            par.style.display = 'none';
        }

        if(over == false){
            // this deletes the dropdown menu
            var par = document.querySelector("#drop-down-menu");
            par.classList.add("none");

            // used to avoid the first render and launch an event after transition
            if(ready == true){
                if(par.style.opacity == 0 && par.style.display == 'none'){
                    par.addEventListener("transitionend", tr)
                }
            }

            r()

        }else if(over == true){
            // this shows the dropdown menu
            var par = document.querySelector("#drop-down-menu"); 
            par.style.display = 'flex';
            par.classList.remove("none");
        }
        
        // used to hide the underline style of the last element when the cursor is over another or out the menu
        if(lastcontentNumber != null){
            var underlineEffect = document.querySelectorAll(".nav-bar > .global-container > .nav-menu > .nav-item > .nav-links");
            underlineEffect[lastcontentNumber].style.backgroundSize = '0% 1px';
        }
        
        if (mouseOut == false){
            // used to show the underline content if the mouse is over
            var underlineEffect = document.querySelectorAll(".nav-bar > .global-container > .nav-menu > .nav-item > .nav-links");
            underlineEffect[contentNumber].style.backgroundSize = '100% 1px';
            setLastcontentNumber(contentNumber)

        }
        
        // turns menu's text to black when pointer is over
        let a = document.getElementsByClassName('link-style-white');
        for (let l of a){
            l.style.color= over ? 'black' : 'white';
        }
        
        var par = document.querySelector("#drop-down-menu");
        //This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it
        return () => {
            par.removeEventListener("transitionend", tr)
        }

    }, [over, state]);

    return(
        <>
        <nav className="nav-bar">
            <div className="global-container" >
                <div className="first-container" onMouseOver={() => {setMouseOut(true); setOver(false)}}>
                    <Link to = '/' className='logo link-style-white cinzel'>MONTREAL BOTÉZ</Link>
                    <div className="nav-bar-icons">
                        <Link to = '/' class="nav-bar-icon material-icons link-style-white">
                            search
                        </Link>
                        <Link to = '/' class="material-icons link-style-white">
                            person_outline
                        </Link>
                    </div>
                </div>
                <ul className='nav-menu' >
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setcontentNumber(0); setMouseOut(false); setOver(true); setState(!state)}}>TODAY'S</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setcontentNumber(1); setMouseOut(false); setOver(true); setState(!state)}}>HOT OUTFITS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setcontentNumber(2); setMouseOut(false); setOver(true); setState(!state)}}>OUR ACCESORIES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setcontentNumber(3); setMouseOut(false); setOver(true); setState(!state)}}>FRAGANCES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setcontentNumber(4); setMouseOut(false); setOver(true); setState(!state)}}>MAKEUP</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setcontentNumber(5); setMouseOut(false); setOver(true); setState(!state)}}>GIFTS</Link>
                    </li>
                </ul> 
            </div> 
        </nav>  
        <DropDown contentNumber={contentNumber} />
        </> 
        );
}

import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

import './NavBar.css'
import '../App.css'
import DropDown from './DropDown';

export default function NavBar(){
    const [contentNumber, setcontentNumber] = useState(0);

    const [transitionCompleted, settransitionCompleted] = useState(true);
    const completed = () => settransitionCompleted(!transitionCompleted);
    
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
        if(over == false){
            // this deletes the dropdown menu
            var par = document.querySelector("#drop-down-menu");
            par.classList.remove("enter");
            par.classList.add("none");
            
            // used to hide the underline style
            var underlineEffect = document.querySelectorAll(".nav-bar > .global-container > .nav-menu > .nav-item > .nav-links");
            underlineEffect[contentNumber].style.backgroundSize = '0% 1px';

            // used to avoid the first render
            if(ready == true){
                par.addEventListener("transitionend", () => {
                    if(transitionCompleted){console.log(transitionCompleted)}
                    completed();
                    par.style.display = 'none';
                    // console.log(over,
                    //     par.classList, par.style.display, underlineEffect[contentNumber].style.backgroundSize
                    // )
                })
            }
            if(transitionCompleted){console.log('out')}
            r();
            
            // this shows the dropdown menu
        }else if(over == true){
            
            // used to show the underline content
            var underlineEffect = document.querySelectorAll(".nav-bar > .global-container > .nav-menu > .nav-item > .nav-links");
            underlineEffect[contentNumber].style.backgroundSize = '100% 1px';

            var par = document.querySelector("#drop-down-menu");  /// el eror parece ser que se trata de leer cuando aun esta en display none 
            par.style.display = 'flex';
            par.classList.remove("none");
            par.classList.add("enter");

            // console.log(over, par.classList, par.style.display, underlineEffect[contentNumber].style.backgroundSize


            // )
        }
        
        let a = document.getElementsByClassName('link-style-white');
        for (let l of a){
            l.style.color= over ? 'black' : 'white';
        }

        completed();

        
    }, [over]);

    return(
        <>
        <nav className="nav-bar">
            <div className="global-container" >
                <div  className="first-container" onMouseOver={() => {setOver(false)}}>
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
                    <li className="nav-item" onMouseOver={() => {setcontentNumber(0)}}>
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setOver(true)}}>TODAY'S</Link>
                    </li>
                    <li className="nav-item" onMouseOver={() => {setcontentNumber(1)}}>
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setOver(true)}}>HOT OUTFITS</Link>
                    </li>
                    <li className="nav-item" onMouseOver={() => {setcontentNumber(2)}}>
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setOver(true)}} >OUR ACCESORIES</Link>
                    </li>
                    <li className="nav-item" onMouseOver={() => {setcontentNumber(3)}}>
                        <Link to='/' className='nav-links link-style-white'onMouseOver={() => {setOver(true)}}  >FRAGANCES</Link>
                    </li>
                    <li className="nav-item" onMouseOver={() => {setcontentNumber(4)}}>
                        <Link to='/' className='nav-links link-style-white'onMouseOver={() => {setOver(true)}}  >MAKEUP</Link>
                    </li>
                    <li className="nav-item" onMouseOver={() => {setcontentNumber(4)}}>
                        <Link to='/' className='nav-links link-style-white'onMouseOver={() => {setOver(true)}}  >GIFTS</Link>
                    </li>
                </ul> 
            </div> 
        </nav>  
        <DropDown contentNumber={contentNumber}/>
        <img src='pexels-godisable-jacob-965324.jpg' style={{width: '100%', zIndex: '0'}}></img>
        </> 
        );
}

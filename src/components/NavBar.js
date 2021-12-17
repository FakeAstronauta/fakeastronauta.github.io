import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

import './NavBar.css'
import '../App.css'
import DropDown from './DropDown';

export default function NavBar(){
    const [contentNumber, setcontentNumber] = useState(null); // the number of the option of the menu
    const [lastcontentNumber, setLastcontentNumber] = useState(null); // the last contentNumber    

    // used to show the underline content, if the mouse is over or out the elements
    const [mouseOut, setMouseOut] = useState(true);
    
    // only to chech when the cursor passes from one element to another
    const [state, setState] = useState(true)
    
    const [over, setOver] = useState(false); // display dropdown menu
    const [ready, setReady] = useState(false);  // used to avoid first render; invoked under transition end block
    
    // used to detect when the menu is in side mode, when the menu icon is clicked
    const [ClickOnMenu, setClickOnMenu] = useState(false);
    
    //defines when the side menu is shown, its used only to swhitch between two values that are not used
    const [showSideMenu, setShowSideMenu] = useState(false);

    var DropDownContents = document.querySelectorAll(".dropdown-contents");

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
            var par = document.querySelector(".drop-down-menu");
            par.style.display = 'none';

        }

        if(over == false){
            
            // this deletes the dropdown menu
            var par = document.querySelector(".drop-down-menu");
            
            par.classList.remove("show-dropdown"); // the opacity is set to 0
            par.classList.add("none");

            /** the first condition: used to avoid the first render and launch an event after transition
             *  the second condition: to avoid that the transitions starts before the earlier ends
             * */
            if(ready == true){
                par.addEventListener("transitionend", tr)
    
                //when dropdowns transition ends the elements disapear, this is useful when the pointer is out
                // THIS CAND BE IMPROVED TO CREATE A BETTER TRANSITION
                // setTimeout(() =>{
                DropDownContents[lastcontentNumber].style.display = 'none'
                // }, 10)

            }

            setReady(true)
                //  Y no se porque los elementos se acumulan cuando uso el display

        }else if(over == true){
            // this shows the dropdown menu
            var par = document.querySelector(".drop-down-menu");    
            par.style.display = 'flex';
            
            /**
             * This setTimeout is used to avoid bugs when the fade-in starts caused by the display = flex
             * (the soft effects is avoided and the menu appears)
             */
            setTimeout(() =>{
                par.classList.add("show-dropdown");
                par.classList.remove("none");
            }, 10)


        }

        // if the side menu is not displayed
        if(ClickOnMenu == false){
            // used to hide the underline style of the last element when the cursor is over another or out the menu
            if(lastcontentNumber != null){
                var underlineEffect = document.querySelectorAll(".nav-bar > .global-container > .nav-menu > .nav-item > .nav-links");
                underlineEffect[lastcontentNumber].style.backgroundSize = '0% 1px';
            }
            
            if (mouseOut == false){
                // used to show the underline content if the mouse is over
                var underlineEffect = document.querySelectorAll(".nav-bar > .global-container > .nav-menu > .nav-item > .nav-links");
                underlineEffect[contentNumber].style.backgroundSize = '100% 1px';
                setLastcontentNumber(contentNumber) // set the last number selected
                
            }

        }else{ // set the last number selected when side menu is displayed
            setLastcontentNumber(contentNumber)
        }
        
        // turns menu's text to black when pointer is over
        let a = document.getElementsByClassName('link-style-white');
        for (let l of a){
            l.style.color= over ? 'black' : 'white';
        }
        
        
        //This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it
        return () => {
            par.removeEventListener("transitionend", tr)
        }

    }, [over, state]);

    return(
        <>
        <nav className="nav-bar">
            <div className="global-container">
                <div className="first-container" onMouseOver={() => {setMouseOut(true); setOver(false)}}>
                    <div className="menu-icon" onClick={() => {setClickOnMenu(!ClickOnMenu)}}>
                        <i className="material-icons">{ClickOnMenu ? 'close' : 'menu'}</i>
                    </div>
                    <Link to = '/' className='logo link-style-white cinzel'>MONTREAL BOTÉZ</Link>
                    <div className="nav-bar-icons">
                        <Link to = '/' id='search' class="nav-bar-icon material-icons link-style-white">
                            search
                        </Link>
                        <Link to = '/' id='account-logo' class="material-icons link-style-white">
                            person_outline
                        </Link>
                    </div>
                </div>
                {/* TO DO: optimizar todos las funciones llamadas en los mouseover, son demasiadas
                    tambien parece necesario mover el addEvent y mejor usar las propiedades en los elementos */}
                <ul className={ClickOnMenu ? 'nav-menu active' : 'nav-menu'}>
                    <li id='close-button-menu'><span className="material-icons" onClick={() => {setClickOnMenu(!ClickOnMenu)}} >close</span></li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setcontentNumber(0); setMouseOut(false); setOver(true); setState(!state)}}>TODAY'S</Link>
                        <span class="material-icons">
                            chevron_right
                        </span>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setcontentNumber(1); setMouseOut(false); setOver(true); setState(!state)}}>HOT OUTFITS</Link>
                        <span class="material-icons">
                            chevron_right
                        </span>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setcontentNumber(2); setMouseOut(false); setOver(true); setState(!state)}}>OUR ACCESORIES</Link>
                        <span class="material-icons">
                            chevron_right
                        </span>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setcontentNumber(3); setMouseOut(false); setOver(true); setState(!state)}}>FRAGANCES</Link>
                        <span class="material-icons">
                            chevron_right
                        </span>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setcontentNumber(4); setMouseOut(false); setOver(true); setState(!state)}}>MAKEUP</Link>
                        <span class="material-icons">
                            chevron_right
                        </span>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' onMouseOver={() => {setcontentNumber(5); setMouseOut(false); setOver(true); setState(!state)}}>GIFTS</Link>
                        <span class="material-icons">
                            chevron_right
                        </span>
                    </li>
                </ul> 
            </div> 
        </nav>  
        <DropDown contentNumber={contentNumber} over={over} showSideMenu={showSideMenu}/>
        </> 
        );
}

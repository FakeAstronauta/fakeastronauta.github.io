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
    const [state, setState] = useState(true);
    
    const [over, setOver] = useState(false); // display dropdown menu
    const [ready, setReady] = useState(false);  // used to avoid first render; invoked under transition end block
    
    // used to detect when the menu is in side mode, when the menu icon is clicked
    const [ClickOnMenu, setClickOnMenu] = useState(false);

    const [currentColor, setCurrentColor] = useState('white'); // el color del texto del nav-menu, para evitar confusiones

    const toBlack = () => {
        let a = document.getElementsByClassName('link-style-white');
        for (let l of a){
            l.style.color= over ? 'black' : currentColor;
        }
    }

    
    
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
        // this function is needed, the listener must be removed at the return, but only works with a declared function
        let dropDownEvent = ()=>{setOver(false); setMouseOut(true)}
        
        // this blocks is the default assignation of the event, the one inside launchNavBarResize is when window resize and 
        // the side menu is displayed
        if(window.innerWidth > 1024){ // this condition avoids bugs with the events add to the dropdown
            /** add event listener to the dropDownContainer that fires when the mouse leaves*/
            let dropDownContainer = document.querySelector(".drop-down-menu > #drop-down-container");
            // esto no funcionaba porque solo habia agregado el over y no mouseOute al array dependencies
            dropDownContainer.addEventListener('mouseleave', dropDownEvent); //() => {setMouseOut(true); setOver(false)} 
        }

        /**this is fired every resize to detect when the window is upper than the condition and apply some styles */
        let launchNavBarResize = () => {
            if(window.innerWidth > 1024){ // this condition avoids bugs with the events add to the dropdown
                var body = document.querySelector("body");
                body.style.overflow ='auto';  // this keeps the the body overflow-auto when scrolling
                
                let par = document.querySelector(".drop-down-menu");
                par.style.display = 'none'; // this deletes the drop-down-menu when resizing
                let a = document.getElementsByClassName('link-style-white');
                for (let l of a){
                    l.style.color= 'white';
                    setCurrentColor('white') // para evitar confusion cuando el color cambie con los eventos del raton
                }

                tr()
                
            }
        }

        window.addEventListener('resize', launchNavBarResize)

        let prevScrollpos = 0;

        /** change nav-var color, and hide it when scroll down, and also modify text color */
        const scrolling = () => {
            let navBar = document.querySelector(".nav-bar");
            let currentScrollPos = window.scrollY;
           
            if(window.scrollY > 100){
                navBar.style.background = 'white';
                let a = document.getElementsByClassName('link-style-white');
                for (let l of a){
                    l.style.color = 'black';
                    setCurrentColor('black') // para evitar confusion cuando el color cambie con los eventos del raton
                }
                // the drop down menu display is set to none; but I still need to improve the transition
                tr();
            }else{
                navBar.style.background = 'transparent'
                let a = document.getElementsByClassName('link-style-white');
                for (let l of a){
                    l.style.color= 'white';
                    setCurrentColor('white') // para evitar confusion cuando el color cambie con los eventos del raton

                }
            }

            // hides the nav-bar
            if (currentScrollPos < prevScrollpos) {
                navBar.style.top = "0px";
            } else {
                navBar.style.top = "-100%";
            }
            
            prevScrollpos = currentScrollPos; // compara donde está la scroll-bar con donde estuvo
        }
        
        window.addEventListener('scroll', scrolling);


        // function called when transition ends
        const tr = () => {
            let par = document.querySelector(".drop-down-menu");
            // if(ClickOnMenu == false){
            par.style.display = 'none';
            // }
        }

        if(over == false){
            // this deletes the dropdown menu
            let par = document.querySelector(".drop-down-menu");
            
            par.classList.remove("show-dropdown"); // the opacity is set to 0
            par.classList.add("none");

            /** the first condition: used to avoid the first render and launch an event after transition
             *  the second condition: to avoid that the transitions starts before the earlier ends
             * */
            if(ready){
                par.addEventListener("transitionend", tr)
    
                //when dropdowns transition ends the elements disapear, this is useful when the pointer is out
                // THIS CAND BE IMPROVED TO CREATE A BETTER TRANSITION
                // setTimeout(() =>{
                var DropDownContents = document.querySelectorAll(".dropdown-contents");
                if(lastcontentNumber != null){ // this avoids bugs related with lastcontentnumber
                    DropDownContents[lastcontentNumber].style.display = 'none'
                }
                // }, 10)

            }


        }else if(over == true){
            /** this shows the dropdown menu by default when over is true, only when the side menu is hide. 
             * in DropDown.js the display is focused when the side menu is displayed.  
            */ 
            let par = document.querySelector(".drop-down-menu"); 
            if(window.innerWidth > 1024){ // this 'if' avoids tho double apply the style when resize
                par.style.display = 'flex';
                console.log('display flex')
            }
                
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
        
        /** turns menu's text to black when pointer is over and the side menu is hidden. the innerWidth is used
        * to avoid bugs when resize
        */
        if(window.innerWidth > 1024){toBlack();}
        
        // is set true when the app renders
        setReady(true);

        //This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it
        return () => {
            let par = document.querySelector(".drop-down-menu"); 
            par.removeEventListener("transitionend", tr)

            let dropDownContainer = document.querySelector(".drop-down-menu > #drop-down-container");
            // esto no funcionaba porque solo habia agregado el over y no mouseOute al array dependencies
            dropDownContainer.removeEventListener('mouseleave', dropDownEvent)
    
            window.removeEventListener('resize', launchNavBarResize)
            window.removeEventListener('scroll', scrolling);

        }

    }, [over, mouseOut, state, window.innerWidth]);

    return(
        <>
        <nav className="nav-bar">
            <div className='menu-hiders' onMouseOver={() => {setMouseOut(true); setOver(false)}}></div>
            <div className="global-container">
                <div className="first-container" onMouseOver={() => { setMouseOut(true); setOver(false)}}>
                    <div className="menu-icon link-style-white" onClick={() => {setClickOnMenu(true)}}>
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
                    <li id='close-button-menu'><span className="material-icons" onClick={() => {setClickOnMenu(false)}} >close</span></li>
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
            <div className='menu-hiders' onMouseOver={() => {setMouseOut(true); setOver(false)}}></div>
        </nav>  
        <DropDown contentNumber={contentNumber} over={over} ClickOnMenu={ClickOnMenu}/>
        </> 
        );
}

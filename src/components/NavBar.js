import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

import './NavBar.css'
import '../App.css'
import DropDown from './DropDown';

export default function NavBar(){
    const [over, setOver] = useState(false);
    const [ready, setReady] = useState(false);  // used to avoid first render
    const deal = () => setOver(true)
    const as = () => setOver(false);
    const r = () => setReady(true); // invoked under transition end block

//     const [background, setBackground] = useState(null);

//     useEffect(async ()=>{
//         let raw = await fetch('https://api.pexels.com/v1/photos/1126993',{ headers: {
//             Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
//         }});
//         let data = await raw.json();
//         setBackground(data)
//     }, []);

    

    useEffect(() => {
        /** esto se acciona cuando el elemento ya esta creado */
        if(over == false && ready == true){
            var par = document.querySelector("#drop-down-menu");
            par.classList.remove("enter");
            par.classList.add("none");
            if(ready == true){
                par.addEventListener("transitionend", () => {
                    par.style.display = 'none';
                })
            }
            r()
        }else if(over == true){
            var par = document.querySelector("#drop-down-menu");
            par.style.display = 'block';
            par.classList.remove("none");
            par.classList.add("enter");
        }

        let a = document.getElementsByClassName('link-style-white');
        for (let l of a){
            l.style.color= over ? 'black' : 'white';
        }
    }, [over]);

    return(
        <>
        <nav className="nav-bar">
            <div className="global-container" >
                <div  className="first-container" onMouseOver={as}>
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
                    <li className="nav-item" >
                        <Link to='/' className='nav-links link-style-white' onMouseOver={deal} >TODAY'S</Link>
                    </li>
                    <li className="nav-item" >
                        <Link to='/' className='nav-links link-style-white' onMouseOver={deal} >HOT OUTFITS</Link>
                    </li>
                    <li className="nav-item" >
                        <Link to='/' className='nav-links link-style-white' onMouseOver={deal} >OUR ACCESORIES</Link>
                    </li>
                    <li className="nav-item" >
                        <Link to='/' className='nav-links link-style-white'onMouseOver={deal}  >FRAGANCES</Link>
                    </li>
                    <li className="nav-item" >
                        <Link to='/' className='nav-links link-style-white'onMouseOver={deal}  >MAKEUP</Link>
                    </li>
                    <li className="nav-item" >
                        <Link to='/' className='nav-links link-style-white'onMouseOver={deal}  >GIFTS</Link>
                    </li>
                </ul> 
            </div> 
        </nav>  
        <DropDown/>
        <img src='pexels-godisable-jacob-965324.jpg' style={{width: '100%', zIndex: '0'}}></img>
        </> 
        );
}

import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

import  './NavBar.css'
import  '../App.css'

export default function NavBar(){
//     const [background, setBackground] = useState(null);

//     useEffect(async ()=>{
//         let raw = await fetch('https://api.pexels.com/v1/photos/1126993',{ headers: {
//             Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
//         }});
//         let data = await raw.json();
//         setBackground(data)
//     }, []);
    const shoot = () => {
        let a = document.getElementsByClassName('link-style-white');
        for (let l of a){
            l.style.color='black'
        }
    }

    return(
        <>
        <nav className="nav-bar">
            <div className="global-container" >
                <div  className="first-container">
                    <Link to = '/' className='logo link-style-white cinzel'>MONTREAL BOTÉZ</Link>
                    <button onMouseOver={shoot}>Take the shot!</button>
                    <div className="nav-bar-icons">
                        <Link to = '/' class="nav-bar-icon material-icons link-style-white">
                            search
                        </Link>
                        <Link to = '/' class="material-icons link-style-white">
                            person_outline
                        </Link>
                    </div>
                    {/* {background && <img src={`${background.src.landscape})`}></img>} */}
                </div>
                <ul className='nav-menu'>
                    <li className="nav-item" >
                        <Link to='/' className='nav-links link-style-white' >TODAY'S</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' >HOT OUTFITS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' >OUR ACCESORIES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' >FRAGANCES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' >MAKEUP</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links link-style-white' >GIFTS</Link>
                    </li>
                </ul> 
            </div> 
            <a></a>
        </nav>  
        <img src='pexels-godisable-jacob-965324.jpg' style={{width: '100%', zIndex: '0'}}></img>
        </> 
        );

    
}

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
    return(
        <nav className="nav-bar">
            <div className="global-container" >
                <div  className="first-container">
                    <Link to = '/' className='logo-white no-link-style'>MONTREAL BOTÉZ</Link>
                    <div className="nav-bar-icons">
                        <Link to = '/' class="logo-white nav-bar-icon material-icons no-link-style">
                            search
                        </Link>
                        <Link to = '/' class="logo-white material-icons no-link-style">
                            person_outline
                        </Link>
                    </div>
                    {/* {background && <img src={`${background.src.landscape})`}></img>} */}
                </div>
                <div  className="second-container">
                    <ul>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' >TODAY'S</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' >HOT OUTFITS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' >OUR ACCESORIES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' >FRAGANCES</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );

    
}

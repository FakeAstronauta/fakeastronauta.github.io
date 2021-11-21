import React from 'react';
import {Link} from 'react-router-dom';
import  './NavBar.css'
import  '../App.css'

async function insertImage(){
    let raw = await fetch('https://api.pexels.com/v1/photos/1126993',{ headers: {
        Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
      }});
    let data = await raw.json();
    
    // return cooked;
    // console.log(cooked)
}

insertImage();

export default function NavBar(){

    return(
        <nav className="nav-bar">
            <div  className="first-container">

                <Link to = '/' className='logo no-link-style'>MONTREAL BOTÉZ</Link>
                <div className="icons">
                    <Link to = '/' class="material-icons no-link-style">
                        search
                    </Link>
                    <Link to = '/' class="material-icons no-link-style">
                        person_outline
                    </Link>
                </div>
            <h1>{}</h1>
            </div>
            {/* <img alt='No image found' src={insertImage().src.landscape}></img> */}
        </nav>
        );

    
}

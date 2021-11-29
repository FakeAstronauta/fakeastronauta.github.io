import React from 'react';
import {Link} from 'react-router-dom';
import './FirstContents.css'


export default function SecondContents(props){
    return(
            <div className='dropdown-contents inter abs' style={{zIndex:-1, background: 'yellow'}}>
                {/* <ul>
                    <li className='title'>LOREM IPSUM</li>
                    <li><Link to='/' class='link'>DOLOR, SIT AMET</Link></li>
                    <li><Link to='/' class='link'>CONSECTETUR ADIPISICING</Link></li>
                    <li><Link to='/' class='link'>ELIT CORPORIS</Link></li>
                    <li><Link to='/' class='link'>ALIQUAM NESCIUNT ULLAM</Link></li>
                    <li><Link to='/' class='link'>SINT ODIT TENETUR</Link></li>
                </ul> */}
            </div>
        
    )
}
import React from 'react';
import {Link} from 'react-router-dom';
import './ContentsStyles.css'


export default function FirstContents(props){
    return(
        <div className='dropdown-contents'>
            <div className='small-container inter' style={{background: 'skyblue'}}>
                <ul>
                    <li className='title'>LOREM IPSUM</li>
                    <li><Link to='/' class='link'>DOLOR, SIT AMET</Link></li>
                    <li><Link to='/' class='link'>CONSECTETUR ADIPISICING</Link></li>
                    <li><Link to='/' class='link'>ELIT CORPORIS</Link></li>
                    <li><Link to='/' class='link'>ALIQUAM NESCIUNT ULLAM</Link></li>
                    <li><Link to='/' class='link'>SINT ODIT TENETUR</Link></li>
                </ul>
            </div>
        </div>
        
    )
}
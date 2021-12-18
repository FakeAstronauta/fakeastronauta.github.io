import React from 'react';
import {Link} from 'react-router-dom';
import './ContentsStyles.css'


export default function SixthContents(props){
    return(
        <div className='dropdown-contents inter'>
            <ul>
                <li className='title'>ALIQUAM</li>
                <li><Link to='/' class='link'>ELIT</Link></li>
                <li><Link to='/' class='link'>SINT</Link> </li>
                <li><Link to='/' class='link'>DOLOR, SIT</Link></li>
                <li><Link to='/' class='link'>CONSECTETUR</Link></li>
                <li><Link to='/' class='link'>SINT ODIT</Link></li>
            </ul>
            <img className='drop-dow-images full-lenght-when-resize' src='https://via.placeholder.com/410x280'/> 
        </div>
    )
}

import React from 'react';
import {Link} from 'react-router-dom';
import './ContentsStyles.css'


export default function SecondContents(props){
    return(
            <div className='dropdown-contents inter abs big-container' style={{background: 'yellow'}}>
                <img src='https://via.placeholder.com/137x171'/> 
                <ul>
                    <li className='title'>ALIQUAM</li>
                    <li><Link to='/' class='link'>ELIT</Link></li>
                    <li><Link to='/' class='link'></Link>SINT </li>
                    <li><Link to='/' class='link'>DOLOR, SIT</Link></li>
                    <li><Link to='/' class='link'>CONSECTETUR</Link></li>
                    <li><Link to='/' class='link'>SINT ODIT</Link></li>
                </ul>
                <ul>
                    <li style={{marginTop:'35px'}}><Link to='/' class='link'>CONSECTETUR</Link></li>
                </ul>
            </div>
        
    )
}
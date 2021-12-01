import React from 'react';
import {Link} from 'react-router-dom';
import './ContentsStyles.css'


export default function SecondContents(props){
    return(
            <div className='dropdown-contents'>
                <div className='big-container inter' style={{background: 'yellow'}}>
                    <img src='Untitled.png' src='https://via.placeholder.com/199x249' style={{objectFit: 'none'}}/> 
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
                <div className='small-container inter' style={{background: 'pink'}}>
                    <img src='https://via.placeholder.com/199x249' style={{objectFit: 'none'}} /> 
                    <ul>
                        <li className='title'>ALIQUAM</li>
                        <li><a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae possimus ea quaerat.</a></li>
                        <li><Link to='/' class='link'>CONSECTETUR</Link></li>
                        <li><Link to='/' class='link'>SINT ODIT</Link></li>
                    </ul>
                </div>
                
            </div>
        
    )
}
import React from 'react';
import {Link} from 'react-router-dom';
import './ContentsStyles.css'


export default function SecondContents(props){
    return(
            <div className='dropdown-contents'>
                <div className='big-container inter'>
                    <img src='https://via.placeholder.com/179x229' className='drop-dow-images hide-when-resize' /> 
                    <ul>
                        <li className='title'>ALIQUAM</li>
                        <li><Link to='/' class='link'>ELIT</Link></li>
                        <li><Link to='/' class='link'>SINT</Link> </li>
                        <li><Link to='/' class='link'>DOLOR, SIT</Link></li>
                        <li><Link to='/' class='link'>CONSECTETUR</Link></li>
                        <li><Link to='/' class='link'>SINT ODIT</Link></li>
                    </ul>
                    <ul >
                        <li className='top-margin' ><Link to='/' class='link'>CONSECTETUR</Link></li>
                    </ul>
                </div>
                <div className='small-container inter'>
                    <span className='outside-title'>SINT ODIT</span>
                    <div className='inner'>
                        <div>
                            <img src='https://via.placeholder.com/179x229' className='drop-dow-images hide-when-resize'/> 
                        </div>
                        <ul>
                            <li className='title'>CONSECTETUR ADIPISICING </li>
                            <li><p className='paragraph gray-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae possimus ea quaerat.</p></li>
                            <li><Link to='/' class='link underline-links'>CONSECTETUR</Link></li>
                            <li style={{paddingTop: '10px'}}><Link to='/' class='link underline-links'  >SINT ODIT</Link></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        
    )
}
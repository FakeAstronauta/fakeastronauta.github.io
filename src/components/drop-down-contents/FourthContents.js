import React from 'react';
import {Link} from 'react-router-dom';
import './ContentsStyles.css'


export default function FourthContents(props){
    return(
            <div className='dropdown-contents'>
                <div className='big-container inter'>
                    <ul>
                        <li className='title'>MINIMA INVENTORE ALIQUID</li>
                        <li><Link to='/' class='link'>ELIT</Link></li>
                        <li><Link to='/' class='link'>SINT</Link> </li>
                        <li><Link to='/' class='link'>DOLOR, SIT</Link></li>
                        <li><Link to='/' class='link'>CONSECTETUR</Link></li>
                        <li><Link to='/' class='link'>SINT ODIT</Link></li>
                    </ul>
                </div>
                <div className='big-container inter'>
                    <ul>
                        <li className='title'>INVENTORE ALIQUID MOLLITIA</li>
                        <li><Link to='/' class='link'>CONSECTETUR</Link></li>
                        <li><Link to='/' class='link'>SINT</Link> </li>
                        <li><Link to='/' class='link'>DOLOR, SIT</Link></li>
                        <li><Link to='/' class='link'>ELIT</Link></li>
                        <li><Link to='/' class='link'>SINT ODIT</Link></li>
                    </ul>
                </div>
                <div className='big-container inter'>
                    <ul>
                        <li className='title'>ADIPISICING ELIT</li>
                        <li><Link to='/' class='link'>CONSECTETUR</Link></li>
                        <li><Link to='/' class='link'>SINT</Link> </li>
                        <li><Link to='/' class='link'>MAGNAM FACILIS MOLLITIA</Link></li>
                        <li><Link to='/' class='link'>DOLOR, SIT</Link></li>
                        <li><Link to='/' class='link'>DOLORES FUGIT QUOD </Link></li>
                    </ul>
                </div>
            </div>
            
        
    )
}
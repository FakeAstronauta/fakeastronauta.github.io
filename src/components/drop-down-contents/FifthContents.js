import React from 'react';
import {Link} from 'react-router-dom';
import './ContentsStyles.css'


export default function FifthContents(props){
    return(
            <div className='dropdown-contents'>
                <div className='big-container inter'>
                    <ul>
                        <li className='title'>ALIQUAM</li>
                        <li><Link to='/make-up' class='link'>ELIT</Link></li>
                        <li><Link to='/make-up' class='link'>SINT</Link> </li>
                        <li><Link to='/make-up' class='link'>DOLOR, SIT</Link></li>
                        <li><Link to='/make-up' class='link'>CONSECTETUR</Link></li>
                        <li><Link to='/make-up' class='link'>SINT ODIT</Link></li>
                    </ul>
                    <ul>
                        <li className='top-margin'><Link to='/' class='link'>MOLLITIA</Link></li>
                        <li><Link to='/make-up' class='link'>CONSECTETUR</Link></li>
                        <li><Link to='/make-up' class='link'>SINT ODIT</Link> </li>
                        <li><Link to='/make-up' class='link'>MAGNAM FACILIS MOLLITIA</Link></li>
                        
                    </ul>
                </div>
                <div className='small-container inter'>
                    <div className='inner'>
                        <ul>
                            <li className='title'>SINT ODIT</li>
                            <li><Link to='/make-up' class='link'>DOLOR, SIT</Link></li>
                            <li><Link to='/make-up' class='link'>CONSECTETUR</Link></li>
                            <li><Link to='/make-up' class='link'>MAGNAM FACILIS MOLLITIA</Link></li>
                            <li><Link to='/make-up' class='link'>DOLORES FUGIT QUOD </Link></li>
                            <li><Link to='/make-up' class='link'>SINT ODIT</Link></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        
    )
}
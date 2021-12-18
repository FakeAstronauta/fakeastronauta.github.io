import React from 'react';
import {Link} from 'react-router-dom';
import './ContentsStyles.css'


export default function ThirdContents(props){
    return(
            <div className='dropdown-contents'>
                <div className='big-container inter'>
                    <img className='drop-dow-images hide-when-resize' src='https://via.placeholder.com/179x229'/> 
                    <ul>
                        <li className='title'>CONSECTETUR</li>
                        <li><Link to='/' class='link'>DOLOR SIT AMET</Link></li>
                        
                    </ul>
                    
                </div>
                <div className='small-container inter'>
                    <span className='outside-title'>SINT ODIT</span>
                    <div className='inner'>
                        <div>
                            <img src='https://via.placeholder.com/179x229' className='drop-dow-images hide-when-resize'/> 
                        </div>
                        <ul>
                            <li className='title'>POSSIMUS EA QUAERAT</li>
                            <li><p className='paragraph gray-color'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt illum veniam facilis laborum soluta exercitationem, doloremque rerum aut? Deserunt corporis iure ea. Iusto incidunt modi officiis voluptate? Veniam provident non eveniet culpa inventore facilis.</p></li>
                            <li><Link to='/' class='link underline-links'>CONSECTETUR</Link></li>
                            <li style={{paddingTop: '10px'}}><Link to='/' class='link underline-links'  >SINT ODIT</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        
    )
}
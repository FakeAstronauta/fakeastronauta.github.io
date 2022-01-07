import React from 'react';
import {useState, useEffect} from 'react';
import {Accordion } from 'react-bootstrap';


import './Footer.css'

export default function Footer(){
    return(<>
            <style>
                {`
                    .accordion-item{
                        border: 0px solid rgba(0,0,0,.125);
                    }
                    .accordion-body{
                        background: #AD0303;
                        color: #FFFFFF;
                        font-size: 0.9em;

                    }
                    .accordion-button{
                        background: #AD0303;
                        color: #FFFFFF;
                        height: 2em;
                        font-size: 0.6em;
                    }
                    .accordion-button::after{
                        background-image:url(arrow_drop_down_white_24dp.svg);
                    }
                    .accordion-button:not(.collapsed){
                        background: #AD0303;
                        color: #FFFFFF;
                                     
                    }
                    .accordion-button:not(.collapsed)::after{
                        background-image:url(arrow_drop_down_white_24dp.svg)
                        
                    }

                    
                `}
            </style>
            <footer>
                <Accordion id='accordion' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dolore incidunt nihil</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>Earum nemo</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Lorem ipsum dolor</Accordion.Header>
                        <Accordion.Body>
                        <ul>
                            <li>Earum nemo</li>
                            <li>Dolore incidunt nihil</li>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Lorem ipsum</Accordion.Header>
                        <Accordion.Body>
                        <ul>
                            <li>Sit amet consectetur</li>
                            <li>Earum nemo</li>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Lorem ipsum</Accordion.Header>
                        <Accordion.Body>
                        <ul>
                            <li>Sit amet consectetur</li>
                            <li>Earum nemo</li>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Dolore incidunt</Accordion.Header>
                        <Accordion.Body>
                        <ul>
                            <li>Lorem ipsum dolor</li>
                            <li>Sit amet consectetur</li>
                            <li>Dolore incidunt nihil</li>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Earum nemo</Accordion.Header>
                        <Accordion.Body>
                        <ul>
                            <li>Sit amet consectetur</li>
                            <li>Adipisicing elit</li>
                            <li>Earum nemo</li>
                            <li>Dolore incidunt nihil</li>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div id='important-links'>
                    <div id='second-group'>
                        <li className='links-title'>Dolore incidunt nihil</li>
                        <li>Earum nemo</li>
                    </div>
                    <div id='first-group'>
                        <li className='links-title'>Lorem ipsum dolor</li>
                        <li>Earum nemo</li>
                        <li>Dolore incidunt nihil</li>
                    </div>
                    <div id='third-group'>
                        <li className='links-title'>Lorem ipsum dolor</li>
                        <li>Sit amet consectetur</li>
                        <li>Earum nemo</li>
                    </div>
                    <div id='third-group'>
                        <li className='links-title'>Dolore incidunt</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Sit amet consectetur</li>
                        <li>Dolore incidunt nihil</li>
                    </div>
                    <div id='third-group'>
                        <li className='links-title'>Lorem ipsum dolor</li>
                        <li>Sit amet consectetur</li>
                        <li>Adipisicing elit</li>
                        <li>Earum nemo</li>
                        <li>Dolore incidunt nihil</li>
                    </div>
                </div>
                <div id='bottom-links'>
                    <ul>
                        <li><a href="#" class="fa fa-facebook-square "></a></li>
                        <li><a href="#" class="fa fa-instagram "></a></li>
                        <li><a href="#" class="fa fa-youtube-play "></a></li>
                        <li><a href="#" class="fa fa-twitter "></a></li>
                    </ul>
                </div>
            </footer>
    </>)
}
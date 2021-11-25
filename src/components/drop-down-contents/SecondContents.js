import React from 'react';
import {Link} from 'react-router-dom';
import './SecondContents.css'


export default function SecondContents(props){
    return(
        <Link to='/'>
            <div id='dropdown-contents-two'></div>
        </Link>
        
    )
}
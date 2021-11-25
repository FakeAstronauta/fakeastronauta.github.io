import React from 'react';
import {Link} from 'react-router-dom';
import './FirstContents.css'


export default function FirstContents(props){
    return(
        <Link to='/'>
            <div id='dropdown-contents'></div>
        </Link>
        
    )
}
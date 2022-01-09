import React from 'react';
import  './Todays.css'
import StaticHeader from './pages-components/StaticHeader';
import StayOnTop from './pages-components/StayOnTop';

export default function Todays(){
    return( 
    <>
        <StaticHeader></StaticHeader>
        <StayOnTop actualPage="Today's"></StayOnTop>
        <img src='https://via.placeholder.com/100x1200'></img>

    </>);
}
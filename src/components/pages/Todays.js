import React from 'react';
import StaticHeader from './pages-components/StaticHeader';
import StayOnTop from './pages-components/StayOnTop';
import ProductsGrid from './pages-components/ProductsGrid';
import ImagesGallery from './pages-components/ImagesGallery';
import Newsletter from './pages-components/Newsletter';

export default function Todays(){
    
    return( 
    <>
        <StaticHeader headerImage='247204'></StaticHeader>
        <StayOnTop actualPage="Today's"></StayOnTop>
        <ProductsGrid toSearch='jewels'/>
        <ImagesGallery/>
        <Newsletter/>
    </>);
}
import React from 'react';
import StaticHeader from './pages-components/StaticHeader';
import StayOnTop from './pages-components/StayOnTop';
import ProductsGrid from './pages-components/ProductsGrid';
import ImagesGallery from './pages-components/ImagesGallery';
import Newsletter from './pages-components/Newsletter';

export default function OurAccesories(){
    
    return( 
    <>
        <StaticHeader headerImage='247322'></StaticHeader>
        <StayOnTop actualPage="Our accesories"></StayOnTop>
        <ProductsGrid toSearch='fashion'/>
        <ImagesGallery/>
        <Newsletter/>
    </>);
}
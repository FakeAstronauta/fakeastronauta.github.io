import React from 'react';
import StaticHeader from './pages-components/StaticHeader';
import StayOnTop from './pages-components/StayOnTop';
import ProductsGrid from './pages-components/ProductsGrid';
import ImagesGallery from './pages-components/ImagesGallery';
import Newsletter from './pages-components/Newsletter';

export default function Fragances(){
    
    return( 
    <>
        <StaticHeader headerImage='246367'></StaticHeader>
        <StayOnTop actualPage="Fragances"></StayOnTop>
        <ProductsGrid toSearch='perfume'/>
        <ImagesGallery/>
        <Newsletter/>
    </>);
}
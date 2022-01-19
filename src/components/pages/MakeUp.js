import React from 'react';
import StaticHeader from './pages-components/StaticHeader';
import StayOnTop from './pages-components/StayOnTop';
import ProductsGrid from './pages-components/ProductsGrid';
import ImagesGallery from './pages-components/ImagesGallery';
import Newsletter from './pages-components/Newsletter';

export default function MakeUp(){
    return( 
    <>
        <StaticHeader headerImage='2036646'></StaticHeader>
        <StayOnTop actualPage="make up"></StayOnTop>
        <ProductsGrid toSearch='lipstick'/>
        <ImagesGallery/>
        <Newsletter/>
    </>);
}
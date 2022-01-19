import React from 'react';
import StaticHeader from './pages-components/StaticHeader';
import StayOnTop from './pages-components/StayOnTop';
import ProductsGrid from './pages-components/ProductsGrid';
import ImagesGallery from './pages-components/ImagesGallery';
import Newsletter from './pages-components/Newsletter';

export default function Gifts(){
    return( 
    <>
        <StaticHeader headerImage='573306'></StaticHeader>
        <StayOnTop actualPage="Gifts"></StayOnTop>
        <ProductsGrid toSearch='gifts'/>
        <ImagesGallery/>
        <Newsletter/>
    </>);
}
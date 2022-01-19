import React from 'react';
import StaticHeader from './pages-components/StaticHeader';
import StayOnTop from './pages-components/StayOnTop';
import ProductsGrid from './pages-components/ProductsGrid';
import ImagesGallery from './pages-components/ImagesGallery';
import Newsletter from './pages-components/Newsletter';

export default function HotOutfits(){
    return( 
    <>
        <StaticHeader headerImage='3119709'></StaticHeader>
        <StayOnTop actualPage="Hot outfits"></StayOnTop>
        <ProductsGrid toSearch='outfit'/>
        <ImagesGallery/>
        <Newsletter/>  
    </>);
}
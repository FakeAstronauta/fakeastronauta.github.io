import React from 'react';
import  './ProductsGrid.css'
import { useState, useEffect } from 'react';

export default function ProductsGrid(props){
    const container = document.getElementsByClassName('grid');
    const [pageNum, setPageNum] = useState(1);
    let [stringContent, setStringContent] = useState(' ');

    useEffect(async ()=>{
        if(stringContent != ' '){
            console.log('reload')

        }
        if(pageNum < 6){
            let raw = await fetch(`https://api.pexels.com/v1/search?query=${props.toSearch}&per_page=16&orientation=landscape&page=${pageNum}`,
            { headers: {
                Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
            }});
            let data = await raw.json();
            for(let a of data.photos){
                stringContent += `
                <div class='grid-item'>
                    <img src=${a.src.portrait}/>
                    <div class='text-container'>
                        <h4>LOREM IPSUM DOLOR</h4>
                        <bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</bold>
                        <p>lorem 00</p>
                    </div>
                </div>
                `;
            }
            container[0].innerHTML = container[0].innerHTML + stringContent;
            setStringContent(' ');
        }else{
            let loadMoreButton = document.querySelector('.grid-container > #load-more-button');
            loadMoreButton.style.display = 'none';
        }
    }, [pageNum]);


    return( 
       <>
        <div class="grid-container">
            <div class="grid">
            </div>
            <div id='load-more-button' onClick={() => {setPageNum(pageNum + 1)}}>
                LOAD MORE
            </div>
        </div>

       </>
    )
}

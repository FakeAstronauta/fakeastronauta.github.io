import React from 'react';
import  './DropDown.css'
import  FirstContents from './drop-down-contents/FirstContents'
import  SecondContents from './drop-down-contents/SecondContents'
import  ThirdContents from './drop-down-contents/ThirdContents'
import  FourthContents from './drop-down-contents/FourthContents'
import {Link} from 'react-router-dom';

import {useState, useEffect} from 'react';

export default function DropDown(props){
    let names = [<FirstContents/>, <SecondContents/>, <ThirdContents/>, <FourthContents/>]

    const [lastProps, setLastProps] = useState(null)
    
    useEffect(() => {
            
            /**permite ocultar y mostrar los elementos del menu a medida se cambia de opcion
             * la primera condicion ayuda a evitar problemas al primer render cuando el valor pasado es null
             * y la segunda evita que el primer valor se borre a si mismo cuando el puntero vuelva a estar sobre el
             */
            if(props.contentNumber != null){
                var underlineEffect = document.querySelectorAll(".dropdown-contents");
                underlineEffect[props.contentNumber].style.display = 'flex';
                underlineEffect[props.contentNumber].classList.add('opaque');
                
                if(lastProps != null && lastProps != props.contentNumber){  // avoids that the 0 element deletes itself
                    underlineEffect[lastProps].classList.add('hide');
                    underlineEffect[lastProps].classList.remove('opaque');
                }
            }
                
            setLastProps(props.contentNumber)
               
            /** como es esto posible? parece que si dejo el objeto reacciona a todos
             *  los renders del elemento donde lo envian, como si en react todo esta
             *  conectado*/
    }, [props.contentNumber]) 
    
    return(
        <div id='drop-down-menu' >
            {names[0]}
            {names[1]}
            {names[2]}
            {names[3]}
        </div>
        );

}
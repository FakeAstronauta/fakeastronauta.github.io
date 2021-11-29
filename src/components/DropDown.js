import React from 'react';
import  './DropDown.css'
import  FirstContents from './drop-down-contents/FirstContents'
import  SecondContents from './drop-down-contents/SecondContents'
import  ThirdContents from './drop-down-contents/ThirdContents'
import {Link} from 'react-router-dom';

import {useState, useEffect} from 'react';

export default function DropDown(props){
    let names = [<FirstContents/>, <SecondContents/>, <ThirdContents/>]

    const [lastProps, setLastProps] = useState(null)
    
    //  necesito guardar el ultimo elemento 
    useEffect(() => {
            
            /**permite ocultar y mostrar los elementos del menu a medida se cambia de opcion
             * la primera condicion ayuda a evitar problemas al primer render cuando el valor pasado es null
             * y la segunda evita que el primer valor se borre a si mismo cuando el puntero vuelva a estar sobre el
             */
            if(props.contentNumber != null){
                var underlineEffect = document.querySelectorAll(".dropdown-contents");
                underlineEffect[props.contentNumber].style.display = 'flex';
                underlineEffect[props.contentNumber].classList.add('opaque');
                
                if(lastProps != null && lastProps != props.contentNumber){  // avoid that the 0 element deletes itself
                    console.log('inside')
                    underlineEffect[lastProps].classList.add('hide');
                    underlineEffect[lastProps].classList.remove('opaque');
                }
            }
                
            console.log(lastProps)
            setLastProps(props.contentNumber)
               
    }, [props])
    
    return(
        <div id='drop-down-menu' >
            {names[0]}
            {names[1]}
            {names[2]}
        </div>
        );

}
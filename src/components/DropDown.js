import React from 'react';
import  './DropDown.css'
import  FirstContents from './drop-down-contents/FirstContents'
import  SecondContents from './drop-down-contents/SecondContents'
import  ThirdContents from './drop-down-contents/ThirdContents'
import  FourthContents from './drop-down-contents/FourthContents'
import  FifthContents from './drop-down-contents/FifthContents'
import  SixthContents from './drop-down-contents/SixthContents'
import {Link} from 'react-router-dom';

import {useState, useEffect} from 'react';

export default function DropDown(props){
    // let names = [<FirstContents/>, <SecondContents/>, <ThirdContents/>, <FourthContents/>]

    const [lastProps, setLastProps] = useState(null)
    const [state, setState] = useState(true)
    
    /** Every number passed is used to display a different component */
    useEffect(() => {
            
            var underlineEffect = document.querySelectorAll(".dropdown-contents");

            const tr = () => {
                underlineEffect[lastProps].style.display = 'none';

            }

            /**permite ocultar y mostrar los elementos del menu a medida se cambia de opcion
             * la primera condicion ayuda a evitar problemas al primer render cuando el valor pasado es null
             * y la segunda evita que el primer valor se borre a si mismo cuando el puntero vuelva a estar sobre el
             */
            if(props.contentNumber != null){
                // esta linea remueve las clase que esta por defecto
                
                underlineEffect[props.contentNumber].style.display = 'flex';
                setTimeout(() =>{
                    underlineEffect[props.contentNumber].classList.add('opaque');
                }, 10)

                if(lastProps != null && lastProps != props.contentNumber){  // avoids that the 0 element deletes itself
                    // remove the last elements tath where shown
                    
                    underlineEffect[lastProps].classList.remove('opaque');
                    underlineEffect[lastProps].addEventListener("transitionend", tr)
                    // underlineEffect[lastProps].style.display = 'none';
                    
                }
            }
             
            setLastProps(props.contentNumber)
            
            if(lastProps != null && lastProps != props.contentNumber){
                return () => {
                    underlineEffect[lastProps].removeEventListener("transitionend", tr)
                }
            }

    /** como es esto posible? parece que si dejo el objeto reacciona a todos
     *  los renders del elemento donde lo envian, como si en react todo esta
     *  conectado*/
    }, [props.contentNumber, props.over]) 
    
    return(
        <div id='drop-down-menu'>
            <div id="drop-down-container">
                <FirstContents/>
                <SecondContents/>
                <ThirdContents/>
                <FourthContents/>
                <FifthContents/>
                <SixthContents/>
            </div>
        </div>
        );

}
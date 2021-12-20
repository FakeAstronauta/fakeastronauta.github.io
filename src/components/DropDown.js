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
    const titles = ["TODAY'S", "HOT OUTFITS", "OUR ACCESORIES", "FRAGANCES", "MAKEUP", "GIFTS"]

    const [lastProps, setLastProps] = useState(null) // last pop value passed
    //defines when the side menu is shown
    const [showSideMenu, setShowSideMenu] = useState(false);
    
    /** Every number passed is used to display a different component */
    useEffect(() => {
            // when side menu is displayed, body hides the overflow
            var body = document.querySelector("body");
            body.style.overflow = props.ClickOnMenu ? 'hidden' : 'auto';
            console.log(body.style.overflow)
            
            var dropdownMenu = document.querySelector(".drop-down-menu");
            dropdownMenu.style.display = props.ClickOnMenu ? 'flex' : 'none';
            
            const revealSideMenu = () => {
                setShowSideMenu(true)
            }

            var navItems = document.querySelectorAll(".nav-item");
            navItems.forEach((a)=>{a.addEventListener('click', revealSideMenu)})

            var underlineEffect = document.querySelectorAll(".dropdown-contents");

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

                    // setTimeout(() =>{
                    underlineEffect[lastProps].style.display = 'none';
                    // }, 500)
                    
                }
            }
             
            setLastProps(props.contentNumber)

            return () => {
                navItems.forEach((a)=>{a.removeEventListener('click', revealSideMenu)})
            }
    /** como es esto posible? parece que si dejo el objeto reacciona a todos
     *  los renders del elemento donde lo envian, como si en react todo esta
     *  conectado*/
    }, [props.contentNumber, props.over, props.ClickOnMenu, showSideMenu]) 
    return(
        <div className={showSideMenu ? 'drop-down-menu active-dropdown' : 'drop-down-menu'}>
            <div id="drop-down-container">
                <div id="drop-down-header">
                    <span className="material-icons" onClick={()=>{setShowSideMenu(false)}}>
                        chevron_left
                    </span>
                    <span className='inter'>{titles[props.contentNumber]}</span>
                    {/* TO DO: mejorar este boton para que funcione en ambos side menus */}
                    <span class="material-icons">
                        close
                    </span>
                </div>
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
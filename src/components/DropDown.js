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
           

            const revealSideMenu = () => {
                setShowSideMenu(true)
            }   

            var dropdownMenu = document.querySelector(".drop-down-menu");
            console.log(dropdownMenu.classList)

            var navItems = document.querySelectorAll(".nav-item");
            navItems.forEach((a)=>{a.addEventListener('click', revealSideMenu)})

            var underlineEffect = document.querySelectorAll(".dropdown-contents");
            console.log(underlineEffect)

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
    }, [props.contentNumber, props.over, showSideMenu]) 
    return(
        <div className={showSideMenu ? 'drop-down-menu active-dropdown' : 'drop-down-menu'}>
            <div id="drop-down-container">
                <div id="drop-down-header">
                    <span class="material-icons" onClick={()=>{setShowSideMenu(false); console.log('click')}}>
                        chevron_left
                    </span>
                    <span className='inter'>{titles[props.contentNumber]}</span>
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
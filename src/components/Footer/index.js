import React from 'react';
import logo from '../../imgs/logo_color.png'
import fiap from '../../imgs/FiapLogo.png'
import './footer.scss'


function Footer(){
    return(
        <>
            <div className="FooterContainer">
                <div className="FooterContent">
                    <img
                        src={logo}
                        alt="GaloIcon"></img>
                    <img 
                        src={fiap}
                        alt="FiapLogo"></img>
                </div>
            </div>
        </>
    )
}

export default Footer
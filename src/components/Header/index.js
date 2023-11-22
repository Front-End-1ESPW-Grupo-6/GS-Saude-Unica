import './header.scss';
import React from 'react';
import hamburguer from '../../imgs/burguer.png'
import logo from '../../imgs/logo_color.png'
import { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Scroll from 'react-scroll';

function Header() {
    const [loginText, setLoginText] = useState("Login");

    useEffect(() => {
        const userLog = localStorage.getItem("userLog");
        if (userLog === "1") {
            setLoginText("Logout");
        } else {
            setLoginText("Login");
        }
    }, []);

    const handleLoginClick = () => {
        const userLog = localStorage.getItem("userLog");

        if (userLog === "1") {
            localStorage.setItem("userLog", JSON.stringify("0"));
            setLoginText("Login");
        }
    };

    const { scroller } = Scroll;
    const navigate = useNavigate();

    const scrollToAnchor = (elementName) => {
        setTimeout(() => {
            scroller.scrollTo(elementName, {
                duration: 0,
                delay: 0,
                smooth: true,
                offset: -100
            });
        }, 200);
    };

    const handleNavLinkClick = (elementName, route) => {
        scrollToAnchor(elementName);
        if (route) {
            navigate(route);
        }
    };


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className='Burguer'>
                <img className='Hamburguer'
                    src={hamburguer}
                    alt='burguer'
                    onClick={toggleMenu}></img>
            </div>
            <div className='mHeader' isOpen={menuOpen}>
                <figure className='LogoHeader'>
                    <img className='LogoSideBarimg'
                        src={logo}
                        alt='logo'
                    ></img>
                </figure>
                <div className='Nav'>
                    <ul className='NavHeader'>
                        <li onClick={() => handleNavLinkClick("Home")}><RouterLink to="/">Home</RouterLink></li>
                        <li onClick={() => handleNavLinkClick("About")}><RouterLink to="/">Problema</RouterLink></li>
                        <li onClick={() => handleNavLinkClick("Objetivo")}><RouterLink to="/">Causas</RouterLink></li>
                        <li onClick={() => handleNavLinkClick("Solucao")}><RouterLink to="/">Solução</RouterLink></li>
                        <li onClick={() => handleNavLinkClick("Vantagem")}><RouterLink to="/">Vantagems</RouterLink></li>
                        <li onClick={() => handleNavLinkClick("Sobre")}><RouterLink to="/Contato">Sobre Nós</RouterLink></li>
                        <li onClick={() => handleNavLinkClick("Contato")}><RouterLink to="/Contato">Contato</RouterLink></li>
                    </ul>
                </div>
                <div className='LoginHeader'>
                    <ul>
                        <li className='LoginAnchor'><RouterLink to="/Sign-in" onClick={handleLoginClick}>{loginText}</RouterLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header
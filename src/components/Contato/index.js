import React from 'react';
import { Element } from "react-scroll";
import Fabricio from '../../imgs/time/Fabricio.png'
import qr from '../../imgs/qr.png'
import './contato.scss'

function Contato() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:ContatoGaloFiap@gmail.com';
    };

    const sendWppClick = () => {
        window.location.href = 'https://wa.me/+5511963752185';
    };

    return (
        <>
            <Element name='Sobre'>
                <div className="CardContainer">
                <div className="ContatoTxT">
                    <p>Contato</p>
                </div>
                    <div className="Cards">
                        <img
                            src={Fabricio}
                            alt="Integrante do grupo Galo">
                        </img>
                        <div className="CardContent">
                            <h2>Fabrício G. Saavedra</h2>
                            <p>RM 97631</p>
                        </div>
                    </div>
                </div>

            </Element>
            <Element name='qrcode'>
                <div className='qrcontainer'>
                    <div className='qrcontent'>
                        <img
                            src={qr}
                            alt="qrcode">
                        </img>
                        <div className='qrTxT'>
                        <p>Linkedin</p>
                    </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default Contato;
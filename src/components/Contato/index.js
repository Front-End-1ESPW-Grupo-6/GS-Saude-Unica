import React from 'react';
import { Element } from "react-scroll";
import Galoicon from '../../imgs/galoIcon.png'
import Fabricio from '../../imgs/time/Fabricio.png'
import WppIcon from "../../imgs/icons/whatsapp-icon.png";
import EmailIcon from "../../imgs/icons/email-icon.png";
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
                <div className="SobreContainer">
                    <h1>Sobre nós</h1>
                    <div className="SbrContainer">
                        <div className="SobreImg">
                            <img
                                src={Galoicon}
                                alt="Icone da logo marca">
                            </img>
                        </div>
                        <div className="SobreTxT">
                            <p> No coração do "Galo Weather" está nossa visão ousada de transformar radicalmente a forma como
                                enfrentamos os desafios dos alagamentos urbanos. Inspirados pelo galo, símbolo tradicionalmente
                                associado à previsão do tempo e à vigilância, buscamos antecipar e mitigar as inundações que impactam
                                comunidades em áreas urbanas. Assim como o galo anuncia o amanhecer, queremos antever e preparar as cidades
                                para lidar proativamente com as intempéries climáticas, integrando tecnologia inovadora e análise de dados para
                                criar cidades mais seguras e resilientes.</p>

                            <p>A escolha do galo como nosso símbolo vai além da previsão do tempo; ele representa nossa missão de despertar a
                                consciência e ação preventiva diante das inundações. Assim como o galo é vigilante e anuncia mudanças climáticas,
                                nós, no "Galo Weather", aspiramos a ser a voz que alerta e mobiliza comunidades para se prepararem e se protegerem.
                                Nossa missão é utilizar a sabedoria da natureza, combinada com a inovação tecnológica, para forjar um futuro onde
                                as cidades possam enfrentar os desafios climáticos, garantindo segurança e bem-estar para todos.</p>
                        </div>
                    </div>
                </div>
                <div className="CardContainer">
                    <div className="Cards">
                        <img
                            src={Fabricio}
                            alt="Integrante do grupo Galo">
                        </img>
                        <div className="CardContent">
                            <h2>Fabrício Saavedra</h2>
                            <p>RM 97631</p>
                        </div>
                    </div>

                </div>

            </Element>
            <Element name='Contato'>
                <div className="ContatoContainer">
                    <div className="InnerContatoContainer">
                        <div className="ContatoContainerHeader">
                            <p>Entre em contato</p>
                            <p>Nós adoraríamos ouvir você. Aqui como você pode chegar até nós</p>
                        </div>
                        <div className="CardsContainer">
                            <div className="SobreCardContainer">
                                <div className="SobreCardImgContainer">
                                    <img
                                        src={WppIcon}
                                        alt="Ícone de whatsApp">
                                    </img>
                                </div>
                                <div className="CardTextContainer">
                                    <p>Contato via WhatsApp</p>
                                    <p>Em caso de dúvidas, entre em contato!</p>
                                    <p>Nosso atendimento é das 08:00 as 18:00, com respostas em até 24 horas durante dias úteis</p>
                                    <button onClick={sendWppClick}>Clique aqui</button>
                                </div>
                            </div>
                            <div className="SobreCardContainer">
                                <div className="SobreCardImgContainer">
                                    <img
                                        src={EmailIcon}
                                        alt="Ícone de email">
                                    </img>
                                </div>
                                <div className="CardTextContainer">
                                    <p>Contato via Email</p>
                                    <p>Em caso de dúvidas, entre em contato!</p>
                                    <p>Seu email será respondidoem até 24 horas durante dias úteis</p>
                                    <button onClick={handleEmailClick}>Clique aqui</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default Contato;
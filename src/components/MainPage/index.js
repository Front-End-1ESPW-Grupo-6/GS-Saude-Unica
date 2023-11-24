import React from 'react';
import { Element } from 'react-scroll';
import saudePng from '../../imgs/imagem_capa.jpg';
import problemaImagem from '../../imgs/icon_color.png';
import realtime from '../../imgs/icone_7_card.png';
import Personalização from '../../imgs/icone_6_card.png';
import Acesso from '../../imgs/icone_5_card.png';
import Jornada from '../../imgs/icone_8_card.png';
import UtilizacaoImagem from '../../imgs/infografico.png'
import FuncionamentoImagem from '../../imgs/dispositivos.png'
import './mainpage.scss'

function MainPage() {
    return (
        <>
            <Element name="Home" id="Home">
                <div>
                    <div className="HomeContainer">
                        <div className="HomeTxt1">
                            <p>Saúde Única</p>
                        </div>
                        <div className="HomeImg">
                            <img
                                src={saudePng}
                                alt='gif sustentabilidade'></img>
                        </div>
                        <div className="HomeTxt2">
                            <p>Unindo Saúde, Simplificando Vidas</p>
                            <p>O Projeto Saúde Única é uma plataforma digital que facilita a busca por atendimento médico, reunindo informações de vários estabelecimentos de saúde. Com ela, é possível agendar consultas, escolher onde ser atendido e ter uma experiência ágil e personalizada.</p>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name="About" id="About">
                <div className="aboutContainer">
                    <div className="abtContainer">
                        <div className="aboutImg">
                            <img
                                src={problemaImagem}
                                alt="inundação"></img>
                        </div>
                        <div className="aboutTxT">
                            <p>Sobre a solução</p>
                            <p>Uma plataforma digital que concentra dados de diferentes locais de saúde, proporcionando facilidade na escolha do local de atendimento. Com um sistema intuitivo, permite agendar consultas, acompanhar o histórico médico e encaminhar para outras instituições, oferecendo eficiência aos pacientes.</p>

                        </div>
                    </div>
                </div>
                <div className='UtilizacaoContainer'>
                    <div className='UtiliContent'>
                        <div className='UtiliTxt'>
                            <p>O que ela fará?</p>
                            <p>O Projeto Saúde Única centraliza informações sobre locais de atendimento médico, facilitando acesso, avaliação e agendamento de consultas. Também possibilita o acompanhamento da jornada de saúde, redirecionando para outras instituições, se necessário, para cuidados personalizados.</p>
                        </div>
                        <div className="UtiliImg">
                            <img
                                src={UtilizacaoImagem}
                                alt="Infografico"></img>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name='Funcionamento' id='Funcionamento'>
                <div className='FuncionamentoContainer'>
                    <div className='FuncioContent'>
                        <div className='FuncioTxt'>
                            <p>Como funcionará?</p>
                            <p>A Plataforma Saúde Única, acessível via web ou aplicativo, requer um cadastro com informações pessoais, incluindo dados do convênio, se disponível. Utilizando a geolocalização, oferece opções de estabelecimentos de saúde próximos, permitindo agendamento e acesso ao tempo estimado para atendimento. Essa abordagem proporciona uma escolha consciente e ágil para cuidados de saúde personalizados.</p>
                        </div>
                        <div className="FuncioImg">
                            <img
                                src={FuncionamentoImagem}
                                alt="Dispositivos"></img>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name='Solucao'>
                <div className="SolucaoContainer">
                    <h1>Solução</h1>
                    <div className="solucaoContent">
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={Acesso}
                                        alt="Acesso"></img>
                                    <h3>Facilidade de Acesso</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p> Informações sobre vários estabelecimentos de saúde para agendamento rápido de consultas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={Personalização}
                                        alt="Personalização"></img>
                                    <h3>Personalização</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>Seleção consciente do local de tratamento conforme as necessidades individuais.</p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={realtime}
                                        alt="realtime"></img>
                                    <h3>Informações real time</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>Geolocalização para encontrar locais próximos e estimativa de tempo para atendimento.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={Jornada}
                                        alt="Jornada"></img>
                                    <h3>Follow up da Jornada de Saúde</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>Possibilidade de redirecionamento para outras instituições, se necessário.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default MainPage
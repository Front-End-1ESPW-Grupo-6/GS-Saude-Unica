import React from 'react';
import { Element } from 'react-scroll';
import saudePng from '../../imgs/imagem_capa.jpg';
import problemaImagem from '../../imgs/icon_color.png';
import Urbanização from '../../imgs/Urbanizacao.png';
import Drenagem from '../../imgs/drenagem.jpg';
import Chuva from '../../imgs/chuva.png';
import Esp32 from '../../imgs/Esp32.png';
import parcerias from '../../imgs/parcerias.png';
import analise_de_dados from '../../imgs/analise_de_dados.png';
import Ultrassonic from '../../imgs/Ultrassonic_sensor.png';
import logo from '../../imgs/galoBanner.png'
import './mainpage.scss'

function MainPage() {
    const sendTestClick = () => {
        window.location.href = '/TestProject';
    };
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
            <Element name="Problema" id="Problema">
                <div className="ProblemaContainer">
                    <div className="ProbContainer">
                        <div className="ProblemaImg">
                            <img
                                src={problemaImagem}
                                alt="inundação"></img>
                        </div>
                        <div className="ProblemaTxT">
                            <p>Sobre a solução</p>
                            <p>Uma plataforma digital que concentra dados de diferentes locais de saúde, proporcionando facilidade na escolha do local de atendimento. Com um sistema intuitivo, permite agendar consultas, acompanhar o histórico médico e encaminhar para outras instituições, oferecendo eficiência aos pacientes.</p>

                        </div>
                    </div>
                </div>
            </Element>
            <Element name="Causa" id="Causa">
                <div className="CausasContainer">
                    <h1>Principais causas</h1>
                    <div className="CausaContent">
                        <div className="Card">
                            <div className="Face1">
                                <div className="Face1Content">
                                    <img
                                        src={Chuva}
                                        alt="Chuvas_intensas"></img>
                                    <h3>Chuvas Intensas</h3>
                                </div>
                            </div>
                            <div className="Face2">
                                <div className="Face2Content">
                                    <p>O clima tropical em que está situada São Paulo sofre com frequência de chuvas intensas,
                                        que podem resultar em deslizamentos e inundações, principalmente em regiões com drenagem
                                        inadequada.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="Face1">
                                <div className="Face1Content">
                                    <img
                                        src={Drenagem}
                                        alt="Deficiencia_drenagem"></img>
                                    <h3>Deficiência de Drenagem</h3>
                                </div>
                            </div>
                            <div className="Face2">
                                <div className="Face2Content">
                                    <p>Sistemas de drenagem insuficientes em São Paulo também podem causar inundações, pois a
                                        água da chuva pode se acumular em regiões baixas e ruas sem saídas ou canais adequados
                                        para direcionar a água adequadamente.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="Face1">
                                <div className="Face1Content">
                                    <img
                                        src={Urbanização}
                                        alt="Urbanizacao"></img>
                                    <h3>Urbanização</h3>
                                </div>
                            </div>
                            <div className="Face2">
                                <div className="Face2Content">
                                    <p>Prédios, estradas e outras infraestruturas foram construídas sobre solo natural nos
                                        distritos metropolitanos como resultado da rápida urbanização das cidades,
                                        que diminuiu a capacidade do solo de absorver água e aumentou o escoamento.
                                    </p>
                                </div>
                            </div>
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
                                        src={Ultrassonic}
                                        alt="Esp32"></img>
                                    <h3>Hardware</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>O Galo Weather utiliza sensores
                                        físicos para detectar obstruções em bueiros
                                        e gerar notificações na rede.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={Esp32}
                                        alt="Chuva intensa"></img>
                                    <h3>Software</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>O software realiza processamento de dados e envio de informações internas e externas (para o usuário).</p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={analise_de_dados}
                                        alt="Esp32"></img>
                                    <h3>Analise de Dados</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>O Galo Weather realiza uma análise de dados meteorológicos e estatísticos em suas previsões.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={parcerias}
                                        alt="Parcerias"></img>
                                    <h3>Parcerias</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>Prefeitura da cidade de São Paulo, Defesa Civil
                                        e Secretária de Urbanismo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SolucaoContent2">
                        <img
                            src={logo}
                            alt='logo'
                        ></img>
                        <p>O "Galo Weather" é um projeto inovador para combater alagamentos urbanos usando tecnlogia.
                            Nele, a união de um software de análise e manipulação de dados e um hardware de monitoramento
                            permitem antecipar enchentes e melhorar a segurança de áreas propensas a alagamentos.</p>
                        <div className="TestProject">
                            <h2>Quer entender como funciona?</h2>
                            <button onClick={sendTestClick}>Faça o teste</button>
                        </div>
                    </div>
                </div>
            </Element>
            <>
            </>
        </>
    );
}

export default MainPage
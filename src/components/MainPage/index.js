import React from 'react';
import { Element } from 'react-scroll';
import saudePng from '../../imgs/imagem_capa.jpg';
import problemaImagem from '../../imgs/icon_color.png';
import realtime from '../../imgs/icone_3_card.png';
import Personalização from '../../imgs/icone_2_card.png';
import Acesso from '../../imgs/icone_1_card.png';
import Jornada from '../../imgs/icone_4_card.png';
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
                    <h1>Vantagens</h1>
                    <div className="CausaContent">
                        <div className="Card">
                            <div className="Face1">
                                <div className="Face1Content">
                                    <img
                                        src={Acesso}
                                        alt="Facilidade de acesso"></img>
                                    <h3>Facilidade de acesso</h3>
                                </div>
                            </div>
                            <div className="Face2">
                                <div className="Face2Content">
                                    <p>Informações sobre vários estabelecimentos de saúde para agendamento rápido de consultas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="Face1">
                                <div className="Face1Content">
                                    <img
                                        src={Personalização}
                                        alt="Personalização"></img>
                                    <h3>Personalização</h3>
                                </div>
                            </div>
                            <div className="Face2">
                                <div className="Face2Content">
                                    <p>Seleção consciente do local de tratamento conforme as necessidades individuais.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="Face1">
                                <div className="Face1Content">
                                    <img
                                        src={realtime}
                                        alt="real time"></img>
                                    <h3>Informações real time</h3>
                                </div>
                            </div>
                            <div className="Face2">
                                <div className="Face2Content">
                                    <p>Geolocalização para encontrar locais próximos e estimativa de tempo para atendimento.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="Face1">
                                <div className="Face1Content">
                                    <img
                                        src={Jornada}
                                        alt="Jornada"></img>
                                    <h3>Follow up da Jornada de Saúde</h3>
                                </div>
                            </div>
                            <div className="Face2">
                                <div className="Face2Content">
                                    <p>Possibilidade de redirecionamento para outras instituições, se necessário.
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
import React from 'react';
import './style.scss';
import { useState } from 'react';
import Umidade from '../../imgs/icons/humidade.png'
import Velocidade from '../../imgs/icons/vento.png'
import Rain from '../../imgs/icons/rain.png'
import Sun from '../../imgs/icons/clear.png'
import Cloud from '../../imgs/icons/cloud.png'
import Mist from '../../imgs/icons/mist.png'
import Snow from '../../imgs/icons/snow.png'
import FloodHouse from '../../imgs/icons/casa-inundada.png'
import House from '../../imgs/icons/casa.png'


function Test() {

    const [opcaoSelecionada, setOpcaoSelecionada] = useState('op1');

    const handleSelectChange = (e) => {
        const novaOpcao = e.target.value;
        setOpcaoSelecionada(novaOpcao);
    };

    const informacoesCidades = {
        op1: {
            nome: 'Itaim Bibi',
            imagemClima: Rain,
            imagemResultado: FloodHouse,
            temperatura: '20 °C',
            temperaturaDescricao: 'Chuvoso',
            umidade: '64%',
            velocidade: '22 km/h',
            resultado: 'Previsão de chuva intensa',
            resultadoDescricao: 'A chuva que se aproxima pode alagar a area',
        },
        op2: {
            nome: 'Mocca',
            imagemClima: Sun,
            imagemResultado: House,
            temperatura: '27 °C',
            temperaturaDescricao: 'Ensolarado',
            umidade: '25%',
            velocidade: '14 km/h',
            resultado: 'Sem previsão de chuva',
            resultadoDescricao: 'A area em volta esta segura de alagamentos',
        },
        op3: {
            nome: 'Vila Prudente',
            imagemClima: Cloud,
            imagemResultado: House,
            temperatura: '22 °C',
            temperaturaDescricao: 'Nublado',
            umidade: '54%',
            velocidade: '17 km/h',
            resultado: 'Previsão de chuva serena',
            resultadoDescricao: 'A chuva que se aproxima nao apresenta riscos',
        },
        op4: {
            nome: 'Tatuapé',
            imagemClima: Mist,
            imagemResultado: House,
            temperatura: '19 °C',
            temperaturaDescricao: 'Nublado',
            umidade: '62%',
            velocidade: '26 km/h',
            resultado: 'Previsão de chuva media',
            resultadoDescricao: 'A chuva que se aproxima nao apresenta riscos',
        },
        op5: {
            nome: 'Belenzinho',
            imagemClima: Snow,
            imagemResultado: FloodHouse,
            temperatura: '17 °C',
            temperaturaDescricao: 'Chuva forte',
            umidade: '74%',
            velocidade: '20 km/h',
            resultado: 'Previsão de chuva intensa',
            resultadoDescricao: 'A chuva que se aproxima ira alagar a area',
        },
    };

    return (
        <div className="clima-page">
            <div className="clima-container">
                <div className="clima-content">
                    <div className="tempo">
                        <div className="tempo-title">
                            <h1>Escolha sua região</h1>
                        </div>
                        <div className="tempo-select">
                        <select
                        id="cidades1"
                        name="cidades1"
                        value={opcaoSelecionada}
                        onChange={handleSelectChange}
                        >
                        <option value="op1">Itaim Bibi</option>  
                        <option value="op2">Mocca</option>
                        <option value="op3">Vila Prudente</option>
                        <option value="op4">Tatuapé</option>
                        <option value="op5">Belenzinho</option>
                        </select>
                    </div>
                    <img
                        className="tempo-img"
                        id="imgSim1"
                        src={informacoesCidades[opcaoSelecionada].imagemClima}
                        alt="Clima-img"
                    />
                    <div className="tempo-info">
                        <div className="temp-txt">
                            <p>{informacoesCidades[opcaoSelecionada].temperatura}</p>
                            <p>{informacoesCidades[opcaoSelecionada].temperaturaDescricao}</p>
                        </div>
                        <div className="temp-info">
                            <div>
                                <img src={Umidade} alt="Umidade imagem" />
                                <p>
                                Umidade <br /> {informacoesCidades[opcaoSelecionada].umidade}
                                </p>
                            </div>
                            <div>
                                <img src={Velocidade} alt="Velocidade imagem" />
                                <p>
                                Velocidade <br /> {informacoesCidades[opcaoSelecionada].velocidade}
                                </p>
                            </div>
                        </div>
                        <p></p>
                        <p>*Interface apenas para fins ilustrativos, não refletindo resultados reais.</p>
                    </div>
                </div>
                <div className="resultado">
                    <div className="resultado-title">
                        <h1>{informacoesCidades[opcaoSelecionada].nome}</h1>
                    </div>
                    <img
                        className="resultado-img"
                        id="imgSim1"
                        src={informacoesCidades[opcaoSelecionada].imagemResultado}
                        alt="Clima-img"
                    />
                    <div className="resultado-info">
                        <div className="resultado-txt">
                            <h1>{informacoesCidades[opcaoSelecionada].resultado}</h1>
                            <p>{informacoesCidades[opcaoSelecionada].resultadoDescricao}</p>
                        </div>
                    </div>
                    <p>*Interface apenas para fins ilustrativos, não refletindo resultados reais.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Test
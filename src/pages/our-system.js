import * as React from "react";
import "./our-system.css";
import Seo from "../components/seo"
import Layout from "../components/layout"
import systemBackgroundImage from '../images/fondo.png';
import batCall from '../images/batCall.png';
import lotedom from '../images/clientes/lotedomGrey.png';
import loteka from '../images/clientes/lotekaGrey.png';
import laPrimera from '../images/clientes/laPrimeraGrey.png'; 
import panama from '../images/clientes/panamaGrey.png';
import lotewin from '../images/clientes/lotewinGrey.png';
import espinal from '../images/clientes/espinalGrey.png';
import jt from '../images/clientes/jtGrey.png';
import haiti from '../images/clientes/haitiGrey.png';
import star from '../images/clientes/starGrey.png';
import glowingLogo from '../images/handAndGlowingLotenet.png';
import logoLotenet from '../images/logoLotenet.png';
import { navigate } from 'gatsby'; 

const contactUsClick = (event) => {
    navigate("/contact-us");
  };


export default function secondPage(){
    return (
    <Layout>
        <main>
            <div class="bannerSystem" style={{ 
                backgroundImage: `url(${systemBackgroundImage})`, 
                backgroundRepeat: 'no-repeat',
                height: '100vh' 
            }}>

                <div class="bannerContentSystem">
                        <div class="textContentSystem">
                            <div class="mainTitle">
                                <h1 class="title">Conoce Lotenet Soft</h1>
                                <p class="emphasizedT">Nuestro sistema de gestión para empresas de lotería.</p>
                            </div>

                            <div class="bannerPromotion">
                                <h4>El control de tu empresa en <span class="darkRed">tiempo real</span>.</h4>
                                <button onClick={contactUsClick} class="button2">Procura una consulta personalizada</button>
                            </div>

                            <div class="features">
                                <div class="feature1">
                                    <h3>9 MILLONES <span class="darkOrange">+</span></h3>
                                    <p class="subFeature">de transaciones diarias</p>
                                </div>

                                <div class="feature1">
                                    <h3>24<span class="orange">hr</span></h3>
                                    <p class="subFeature">de servicio técnico</p>
                                </div> 
                            </div>
                        </div>

                        <div class="GraphicContentSystem"
                            style={{ 
                                backgroundImage: `url(${batCall})`, 
                             }}
                        >
                        </div>
                </div>

            </div>

            <div class="characteristics">
                <div class="sectionTitle">
                    <h4>Diseñado para objetos comerciales únicos</h4>
                    <p emphasizedT>Nos hemos consolidado con la plataforma más estable y operativa del mercado, dando la información en tiempo real justo cuando la requieres.</p>
                </div>

                <div class="cardSection">
                    <div class="row">
                        <div class="card">
                            <p class="emphasizedB">Juegos instantáneos</p>
                            <div class="cardSubtext">
                                <p class="normalText">Elabora y vende juegos de forma fácil y efectiva.</p>
                            </div>
                        </div>

                        <div class="card">
                            <p class="emphasizedB">Gestión de ventas</p>
                            <div class="cardSubtext">
                                <p class="normalText">Administra tus ventas y puntos con reportes en tiempo real.</p>
                            </div>
                        </div>

                        <div class="card">
                            <p class="emphasizedB">Reportes personalizados</p>
                            <div class="cardSubtext">
                                <p class="normalText">Busca y co-relaciona los datos y factores que sean de su interés.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="card">
                            <p class="emphasizedB">Gestión Humana</p>
                            <div class="cardSubtext">
                                <p class="normalText">Administre y mantenga un registro de las acciones de su personal.</p>
                            </div>
                        </div>

                        <div class="card">
                            <p class="emphasizedB">Interfaz Amigable</p>
                            <div class="cardSubtext">
                                <p class="normalText">Diseñada para que su uso sea simple, fácil y veloz para su uso constante.</p>
                            </div>
                        </div>

                        <div class="card">
                            <p class="emphasizedB">Actualizaciones Gratis</p>
                            <div class="cardSubtext">
                                <p class="normalText">Desde entrenamientos especiales a diversos recursos de apoyo.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ourClients">
                <div class="row">
                    <div class="cliente" id="lotedom" style={{ 
                        backgroundImage: `url(${lotedom})`,
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat' }}>
                    </div>

                    <div class="cliente" id="loteka" style={{ 
                        backgroundImage: `url(${loteka})`,
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat'}}>
                    </div>

                    <div class="cliente" id="laPrimera" style={{ 
                        backgroundImage: `url(${laPrimera})`,
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat'}}>
                    </div>

                    <div class="cliente" id="panama" style={{ 
                        backgroundImage: `url(${panama})`,
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat'}}>
                    </div>

                    <div class="cliente" id="lotewin" style={{ 
                        backgroundImage: `url(${lotewin})`,
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat'}}>
                    </div>
                </div>

                <div class="row">
                    <div class="cliente" id="espinal" style={{ 
                        backgroundImage: `url(${espinal})`,
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat'}}>    
                    </div>

                    <div class="cliente" id="jt" style={{ 
                        backgroundImage: `url(${jt})`,
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat'}}>  
                    </div>

                    <div class="cliente" id="haiti" style={{ 
                        backgroundImage: `url(${haiti})`,
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat'}}>  
                    </div>

                    <div class="cliente" id="star" style={{ 
                        backgroundImage: `url(${star})`,
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat',}}>    
                    </div>
                </div>
            </div>

            <div class="software">
                <div class="logoInHand" id="hand" style={{ 
                        backgroundImage: `url(${glowingLogo})`, 
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center', 
              
                    }}>

                </div>
                <div class="textualContent">
                    <div class="box">
                        <div class="logo" id="logoLotenet" style={{ 
                        backgroundImage: `url(${logoLotenet})`, 
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center', 
              
                    }}>

                        </div>

                        <div class="diveInSection">
                            <p class="normalText">Conoce con mayor profundidad todos los servicios que nuestro sistema le puede ofrecer.</p>
                            <button class="button1">Adquiere una consulta</button>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    </Layout>
    )
}


export const Head = () => <Seo title="LotenetSoft" />
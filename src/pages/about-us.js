import React from "react"
import { Link } from "gatsby"
import "./about-us.css";
import Layout from "../components/layout"
import Seo from "../components/seo"
import backgroundImage from "../images/aboutUsBanner.png"
import portraits from "../images/aboutUsPortraits.png"



export default function thirdPage(){
  return (
  <Layout>
   <div id="backgroundAboutUs" class="bannerAbout" style={{ 
    backgroundImage: `url(${backgroundImage})`, 
    backgroundRepeat: 'no-repeat',
    height: '100vh' 
    }}
  >
    <div class="bannerContentAbout">
      <div class="textContentAbout">
        <div class="text">
          <h1>10 años de trayectoria</h1>
          <p>Brindando el mejor servicio, respaldado por el mejor equipo de trabajo.</p>
        </div>
        <div class="button">
          <Link to="#mision">

          <button class="button2">Conoce nuestra identidad coorporativa</button>
          </Link>
        </div>
      </div>
      <div class="graphicContentAbout" style={{ 
        backgroundImage: `url(${portraits})`, 
        backgroundRepeat: 'no-repeat',
        height: '90vh' 
        }}
      >

      </div>
    </div>

   </div>

   <div class="corpIdentity" id="mision">
    <div class="section1">
      <h3 ><span class="darkOrange">Misión</span></h3>
      <p>Proveer a nuestros clientes la capacidad de ofrecer la mayor diversidad y mejor 
      experiencia en Juegos de Loterías y Apuestas.</p>
    </div>
    <div class="section2">
      <h3><span class="darkOrange">Visión</span></h3>
      <p>Ser la empresa con el mejor y más eficiente modelo de procesamiento; la gestión de apuestas y resultados financieros para garantizar el desempeño y crecimiento de las operaciones de nuestros clientes.</p>
    </div>
    <div class="section1">
      <h3><span class="darkOrange">Valores</span></h3>
      <p>Desarrollar operaciones comerciales basados en la confianza mutua, la ética profesional e integridad de nuestro personal, nuestros procesos y nuestros registros de información.</p>
    </div>

   </div>


  </Layout>
)}

export const Head = () => <Seo title="Sobre nosotros" />

// export default thirdPage

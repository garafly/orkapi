import React from 'react';
// import { useStaticQuery, graphql } from "gatsby"
// import {  StaticImage ,getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.module.css"
import "./index.css"
import indexBackgroundImage from '../images/indexBackground.png';
import indexBackgroundImage2 from '../images/indexBackgroundMobile.png';
import { navigate } from 'gatsby'; 


// const Spline = React.lazy(() => import('@splinetool/react-spline'));

const lotenetClick = (event) => {
  navigate("/our-system");
};

const aboutUsClick = (event) => {
  navigate("/about-us");
};


export default function Home() {
  return (
  <Layout>
    <main>

      <div class="bannerIndex"
        style={{ 
          backgroundImage: `url(${indexBackgroundImage})`, 
          backgroundSize: '100%', 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left', 
          height: '210vh' 
        }}
      > 
        <div class="textContent">
          <div class="textBox">
            <h1>Soluciones software</h1>
            <p class="emphasizedT">Actualmente empresa líder en sistemas de lotería.</p>
            <div class="buttons">
                <button onClick={lotenetClick} class="button2">Conoce nuestro sistema</button>
                <button onClick={aboutUsClick} class="button1">Conoce sobre nosotros</button>
            </div>
          </div>
        </div>

        <div class="sectionOurServices">
        <div class="title">
          <h3>Nuestros servicios</h3>
        </div>
        <div class="services">
          <div class="row">
              <div class="card">
                <div class="header">
                  <h4>Sistemas de Gestión de Juegos de Lotería</h4>
                </div>
                <div class="body">
                  <p class="normalText">Desarrollo de sistemas completos para la gestión de juegos de lotería, incluyendo administración de sorteos, gestión de premios, seguimiento de ventas, entre otras funcionalidades.</p>
                </div>
              </div>

              <div class="card">
                <div class="header">
                  <h4>Soluciones de Terminales de Puntos de Ventas</h4>
                </div>
                <div class="body">
                  <p class="normalText">Implementación y mantenimiento de terminales de punto de venta de boletos de lotería, recargas móviles y otros productos.</p>
                </div>
              </div>

              <div class="card">
                <div class="header">
                  <h4>Desarrollo de Juegos Personalizados</h4>
                </div>
                <div class="body">
                  <p class="normalText">Diseño y desarrollo de juegos de lotería personalizados según las necesidades y preferencias de cada cliente.</p>
                </div>
              </div>
          </div>

          <div class="row">
            <div class="card">
                  <div class="header">
                    <h4>Desarrollo de Aplicaciones Móviles</h4>
                  </div>
                  <div class="body">
                    <p class="normalText">Creación de aplicaciones móviles personalizadas para plataformas Android, con interfaces intuitivas y actractivas para usuarios de juegos de lotería.</p>
                  </div>
            </div>

            <div class="card">
                <div class="header">
                  <h4>Desarrollo de Interfaces para Resultados de Sorteos en Vivo</h4>
                </div>
                <div class="body">
                  <p class="normalText">Desde el desarrollo de funcionamiento y contenido gráfico de este tipo de interfaces, a servicios especializados como animaciones 2D y 3D.</p>
                </div>
            </div>

            <div class="card">
                <div class="header">
                  <h4>Mantenimiento y Soporte Técnico</h4>
                </div>
                <div class="body">
                  <p class="normalText">Servicios de mantenimiento preventivo y correcctivo, con soporte téccnico 24/7 para asegurar la operación continua y eficiente de las plataformas de lotería.</p>
                </div>
            </div>
          </div>
        </div>
        </div>

      </div>




      <div class="mobileBanner"
        style={{
          backgroundImage: `url(${indexBackgroundImage2})`, 
          backgroundRepeat: 'no-repeat',
          height: '210vh' 
        }}
      >
        <div class="textContent">
          <div class="textBox">
            <h1>Soluciones software</h1>
            <p class="emphasizedT">Actualmente empresa líder en sistemas de lotería.</p>
            <div class="buttons">
                <button class="button2">Conoce nuestro sistema</button>
                <button class="button1">Conoce sobre nosotros</button>
            </div>
          </div>
        </div>

        <div class="sectionOurServices">
        <div class="title">
          <h3>Nuestros servicios</h3>
        </div>
        <div class="services">
          <div class="row">
              <div class="card">
                <div class="header">
                  <h4>Sistemas de Gestión de Juegos de Lotería</h4>
                </div>
                <div class="body">
                  <p class="normalText">Desarrollo de sistemas completos para la gestión de juegos de lotería, incluyendo administración de sorteos, gestión de premios, seguimiento de ventas, entre otras funcionalidades.</p>
                </div>
              </div>

              <div class="card">
                <div class="header">
                  <h4>Soluciones de Terminales de Puntos de Ventas</h4>
                </div>
                <div class="body">
                  <p class="normalText">Implementación y mantenimiento de terminales de punto de venta de boletos de lotería, recargas móviles y otros productos.</p>
                </div>
              </div>

              <div class="card">
                <div class="header">
                  <h4>Desarrollo de Juegos Personalizados</h4>
                </div>
                <div class="body">
                  <p class="normalText">Diseño y desarrollo de juegos de lotería personalizados según las necesidades y preferencias de cada cliente.</p>
                </div>
              </div>
          </div>

          <div class="row">
            <div class="card">
                  <div class="header">
                    <h4>Desarrollo de Aplicaciones Móviles</h4>
                  </div>
                  <div class="body">
                    <p class="normalText">Creación de aplicaciones móviles personalizadas para plataformas Android, con interfaces intuitivas y actractivas para usuarios de juegos de lotería.</p>
                  </div>
            </div>

            <div class="card">
                <div class="header">
                  <h4>Desarrollo de Interfaces para Resultados de Sorteos en Vivo</h4>
                </div>
                <div class="body">
                  <p class="normalText">Desde el desarrollo de funcionamiento y contenido gráfico de este tipo de interfaces, a servicios especializados como animaciones 2D y 3D.</p>
                </div>
            </div>

            <div class="card">
                <div class="header">
                  <h4>Mantenimiento y Soporte Técnico</h4>
                </div>
                <div class="body">
                  <p class="normalText">Servicios de mantenimiento preventivo y correcctivo, con soporte téccnico 24/7 para asegurar la operación continua y eficiente de las plataformas de lotería.</p>
                </div>
            </div>
          </div>
        </div>
        </div>


      </div>

    </main>

  </Layout>
  );
}



/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Inicio" />

// export default IndexPage

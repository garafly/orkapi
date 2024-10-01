import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./work-with-us.css";
import Layout from "../components/layout"
import Seo from "../components/seo"
import backgroundImage from "../images/workWithUsBanner.png"
import puzzlePiece from "../images/workWithUsPuzzlePiece.png"




export default function fourthPage(){

    // .then(response => {
    //     if (response.ok) {
    //       alert("Gracias por tu interés en trabajar con nosotros. Recibimos tus datos exitosamente!");
    //     } else {
    //       alert("Algo no funcionó! Por favor vuelve a rellenar el formulario.");
    //     }
    //   });

    return (
    <Layout>
        <div class="bannerHeader">
            <div class="textContent">
                <div class="text">
                    <h1>¿Te gustaría pertenecer al equipo?</h1>
                    <p>Siempre estamos abiertos a la inclución de nuevos talentos a nuestro habilidoso equipo. ¡Anímate a compartir el <span class="darkOrange">tuyo</span>!</p>
                </div>
            </div>
            <div class="graphicContent"
                style={{ 
                    backgroundImage: `url(${backgroundImage})`, 
                    backgroundRepeat: 'no-repeat',
                    height: '100vh' 
                    }}
            >
                <div class="puzzlePiece"
                    style={{ 
                        backgroundImage: `url(${puzzlePiece})`, 
                        backgroundRepeat: 'no-repeat',
                        height: '50vh' 
                        }}
                >

                </div>
            </div>
        </div>

        <div class="applyingSection">
            <div class="form">
                <h2>¡Únete al equipo!</h2>
                <p class="formHeader1">¡Estamos muy contentos con tu interés en trabajar en nuestra empresa!</p>
                <p class="formHeader">El siguiente paso es proporcionarnos tu información llenando este formulario.</p>
                <form action="https://formspree.io/f/mldrqvjv" method="POST" class="boxes">
                    <fieldset>
                        <div class="box">
                            <p class="label">Nombre completo</p>
                            <label for="nombre-completo">
                                <input name="Nombre Completo" id="name" type="text"></input>
                            </label>
                        </div>

                        <div class="box">
                            <p class="label">Email / correo-electrónico</p>
                            <label for="email-adress">
                                <input name="Email" id="email" type="email"></input>
                            </label>
                        </div>

                        <div class="box">
                            <p class="label">Vínculo a su perfil de LinkedIn</p>
                            <label for="url-linkendIn">
                                <input name="Currículo LinkedIn" id="linkedIn" type="url"></input>
                            </label>
                        </div>

                        <div class="box">
                            <p class="label">Posición a la que aspira</p>
                            <label for="desired-position">
                                <input name="Posición Deseada" id="position" type="text"></input>
                            </label>
                        </div>
                    </fieldset>
                    <button type="submit" class="button2">Enviar</button>
                </form>
            </div>
        </div>
    </Layout>
)
}

export const Head = () => <Seo title="Trabaja nosotros" />

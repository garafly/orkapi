import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./contact-us.css";
import Layout from "../components/layout"
import Seo from "../components/seo"
import backgroundImage from '../images/backgroundContactUs.jpg';


export default function sixthPage(){
    return (
    <Layout>
        <div class="container">
            <div class="imgSide"
                style={{ 
                    backgroundImage: `url(${backgroundImage})`, 
                    backgroundSize: 'cover', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top left', 
                    height: '90vh' 
                }}
            ></div>
            <div class="formSide">
                <div class="formContainer">
                    <h1>Contáctanos</h1>
                    <p>Siéntase con toda la liberta de escribirnos para saber más, adquirir nuestros servicios o para alguna colaboración</p>
                    <form  action="https://formspree.io/f/xgvwgqzg" method="POST" class="theForm">
                        <fieldset>
                            <div class="formBox1">
                                <p>Nombre</p>
                                <label for="nombre-completo">
                                    <input name="Nombre" class="type1" type="text"></input>
                                </label>
                            </div>
                            <div class="formBox1">
                                <p>Compañía</p>
                                <label for="nombre-empresa">
                                    <input name="Compañía" class="type1" type="text"></input>
                                </label>
                            </div>
                            <div class="formBox1">
                                <p>Email / Correo</p>
                                <label for="email">
                                    <input name="Email" class="type1" type="text"></input>
                                </label>
                            </div>
                            <div class="formBox1">
                                <p>Tema</p>
                                <label for="tema">
                                    <input name="Tema" class="type1" type="text"></input>
                                </label>
                            </div>
                            <div class="formBox2">
                                <p>Mensaje</p>
                                <label for="message">
                                    <input name="Mensaje" class="type2" type="textbox"></input>
                                </label>
                            </div>
                        </fieldset>
                        <button type="submit" class="button1">Enviar Mensaje</button>
                    </form>


                </div>
            </div>

        </div>

    </Layout>
    )
}
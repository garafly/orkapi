import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./downloads.css";
import Layout from "../components/layout"
import Seo from "../components/seo"
import downloadsBackgroundImage from '../images/backgroundDownloads.jpg';
import runnerLogo from '../images/runner-logo.png';


export default function fifthPage(){
    return (
    <Layout>
        <div class="pageContainer">
            <div class="downloadCard"
                style={{ 
                    backgroundImage: `url(${downloadsBackgroundImage})`, 
                    backgroundRepeat: 'no-repeat',
                    height: '100vh' 
                    }}
            >
            </div>
            <div class="downloadInfo">
                    <div>
                        <h3>Descargas</h3>
                    </div>
                    <div class="downloadOption">
                        <div class="runnerLogo"
                        style={{ 
                            backgroundImage: `url(${runnerLogo})`, 
                            backgroundSize: '100%', 
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center', 
                            height: '10vh' 
                            }}
                        ></div>
                        
                    </div>
                    <div>
                        <button class="button1">Descargar</button>
                    </div>

            </div>
        </div>
      


    </Layout>
    )
}
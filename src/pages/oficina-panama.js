import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import "./oficina-rep-dom.css";


const GoogleMap = () => {
    const [isSSR, setIsSSR] = useState(true);
  
    useEffect(() => {
      setIsSSR(false); // Once the component mounts on the client side, update the state
    }, []);
  
    if (isSSR) return null; // Prevents rendering during SSR phase
    return (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.498086854318!2d-79.59607998878384!3d8.92616409055194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca5ba04c56343%3A0x171f85800e5b94a!2sEdificio%203855!5e0!3m2!1ses!2sdo!4v1727797881979!5m2!1ses!2sdo"
          width="400"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      );
    };


export default function seventhPage(){
    return (
    <Layout>
        <div class="main">
        <div class="container">
            <div class="headerOfice">
                <h3>Nuestra oficina</h3>
                <h4>Sede Panamá</h4>
                <p class="emphasizedT">Está ubicada en el Building 3855, Parque Internacional de Negocios, Panamá, Provincia de Panamá, Panamá </p>
            </div>

            <div class="map">
                <GoogleMap></GoogleMap>
            </div>

        </div>



        </div>

    </Layout>
    )}
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.7052602770143!2d-70.52803556125723!3d19.220932528197626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb02b7cd692b8ad%3A0x2e20b25522dec2d9!2sOrkapi%20Technology!5e0!3m2!1ses!2sdo!4v1727794004931!5m2!1ses!2sdo"
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
                <h4>Sede República Dominicana</h4>
                <p class="emphasizedT">Está ubicada en la calle García Godoy #81 Plaza Estela, Suite 210 La Vega, República Dominicana. </p>
            </div>

            <div class="map">
                <GoogleMap></GoogleMap>
            </div>

        </div>



        </div>

    </Layout>
    )}
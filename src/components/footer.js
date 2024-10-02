import React, { useState } from "react";
import "./footer.css";
import Dropdown from "./dropdownMenu";
import { StaticImage } from "gatsby-plugin-image";
import instagramLogo from "../images/instagramLogo.svg";
import facebookLogo from "../images/facebookLogo.svg";
import twitterLogo from "../images/twitterLogo.svg";
import linkendinLogo from "../images/linkedinLogo.svg";



const LINKS = [
  {
    title: "Enlaces",
    items: [{ title: "Sobre nosotros", url: "/sobre-nosotros" }],
  },
];

const currentYear = new Date().getFullYear();

function Footer() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedButton, setSelectedButton] = useState('first');
  const [isOpen, setIsOpen] = useState(false);

  const handleFlipToFront = () => {
    setIsFlipped(false);
    setSelectedButton('first');
  };

  const handleFlipToBack = () => {
    setIsFlipped(true);
    setSelectedButton('second');
  };

  //MENU OPTIONS AND LINKS
  const menuItems1 = [
    {label:"República Dominicana", url:"/oficina-rep-dom" },
    {label: "Panamá", url:"/oficina-panama"}
  ];

  const menuItems2 = [
    {label:"Sistema de lotería", url:"/our-system"},
    {label:"Nuestros servicios", url:"/"},
    {label: "Sobre nosotros", url:"/about-us"}
  ];

  const menuItems3 = [
    {label:"Descargas y documentaciones", url:"/downloads"},
    {label: "Únete al equipo", url: "/work-with-us"}
  ];
  const menuItems4 = [
    {label:"info@orkapi.com"}];


  return (
    <footer>
      <div className="mainContent">
        <div className="sectionA">
          <h2>Nuestras oficinas</h2>

          <div className="cardContainer">
            <div className={`flipCard ${isFlipped ? 'flipped' : ''}`}>
              <div className="locationOfficeDR">
                <StaticImage alt="dominicanRepublicMap" src="../images/repDom.svg" className="officeLocationMaps" />
                <p>García Godoy #81 Plaza Estela, Suite 210 La Vega, República Dominicana.</p>
                <p>Tel: 809-573-8786</p>
              </div>

              <div className="locationOfficePanama">
                <StaticImage alt="panamaMap" src="../images/panama.svg" className="officeLocationMaps" />
                <p>Building 3855, Parque Internacional de Negocios, Panamá, Provincia de Panamá, Panamá</p>
                <p>Tel: +507 838-8989</p>
              </div>
            </div>

            <div className="buttons">
              <button 
                onClick={handleFlipToFront} 
                className={selectedButton === 'first' ? 'selected' : ''}
              >
                <span>República Dominicana</span>
              </button>
              <button 
                onClick={handleFlipToBack} 
                className={selectedButton === 'second' ? 'selected' : ''}
              >
                <span>Panamá</span>
              </button>
          </div>


          </div>
        </div>

        <div className="section">
          <div className="title">
            <h2>En nuestra página</h2>
          </div>
          <div className="links">
            <a class="footerText" href="/our-system" >Sistema de lotería</a>
            <a class="footerText" href="/" >Nuestros servicios</a>
            <a class="footerText" href="/about-us" >Sobre nosotros</a>
          </div>
          
        </div>

        <div className="section">
          <div className="title">
            <h2>Recursos</h2>
          </div>
          <div className="links">
            <a class="footerText" href="/downloads" >Descargas y documentaciones</a>
            <a class="footerText" href="/work-with-us" >Únete al equipo</a>
          </div>
        </div>

        <div className="section">
          <div className="title">
            <h2>Asistencia</h2>
          </div>
          <div className="links">
            <a class="footerText" href="/contact-us" >Contáctanos</a>
            <p>Email: info@orkapi.com</p>
          </div>
          <div className="socialMedia">
              <a href="https://www.instagram.com/orkapi_srl?igsh=YzUzcmRsazBmMmtr">
                <div className="socialMediaLogo">
                  <StaticImage alt="instagramLogo" src={instagramLogo} />
                </div>
              </a>
              <a href="https://www.facebook.com/share/64r1nJJNFnPjzppz/?mibextid=LQQJ4d">
                <div className="socialMediaLogo">
                  <StaticImage alt="facebookLogo" src={facebookLogo} />
                </div>
              </a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Forkapitech">
                <div className="socialMediaLogo">
                  <StaticImage alt="twitterLogo" src={twitterLogo} />
                </div>
              </a>
              <a href="https://do.linkedin.com/company/orkapi-technology">
                <div className="socialMediaLogo">
                  <StaticImage alt="linkedInLogo" src={linkendinLogo} />
                </div>
              </a>
          </div>

        </div>
      </div>

      <div className="copyright">
        <h6>© {currentYear} Orkapi. All Rights Reserved.</h6>
      </div>
      
      <div className="mobileFooter">
        <Dropdown title="Nuestras oficinas" items={menuItems1} />
        <Dropdown title="En nuestra página" items={menuItems2} />
        <Dropdown title="Recursos" items={menuItems3} />
        <Dropdown title="Asistencia" items={menuItems4} />


        <div className="socialMedia">
          <div className="iconsContainer">
            <a href="https://www.instagram.com/orkapi_srl?igsh=YzUzcmRsazBmMmtr">
              <div className="icon">
                <StaticImage alt="instagramLogo" src={instagramLogo} />
              </div>
            </a>
            <a href="https://www.facebook.com/share/64r1nJJNFnPjzppz/?mibextid=LQQJ4d">
              <div className="icon">
                <StaticImage alt="facebookLogo" src={facebookLogo} />
              </div>
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Forkapitech">
              <div className="icon">
                <StaticImage alt="twitterLogo" src={twitterLogo} />
              </div>
            </a>
            <a href="https://do.linkedin.com/company/orkapi-technology">
              <div className="icon">
                <StaticImage alt="linkedInLogo" src={linkendinLogo} />  
              </div>
            </a>

          </div>

          <div className="end">
            <h6>© {currentYear} Orkapi. All Rights Reserved.</h6>
          </div>
        </div>

            {/* <div className="cardContainer">

              <div className="locationOffice">
                <StaticImage alt="dominicanRepublicMap" src="../images/repDom.svg" className="officeLocationMaps" />
                <div className="textContent">
                  <h3>República Dominicana</h3>
                  <p>García Godoy #81 Plaza Estela, Suite 210 La Vega, República Dominicana.</p>
                  <p>Tel: 809-573-8786</p>
                </div>
              </div>

              <div className="locationOffice">
                <StaticImage alt="panamaMap" src="../images/panama.svg" className="officeLocationMaps" />
                <div className="textContent">
                  <h3>Panamá</h3>
                  <p>Building 3855, Parque Internacional de Negocios, Panamá, Provincia de Panamá, Panamá</p>
                  <p>Tel: +507 838-8989</p>
                </div>
              </div>
            
            </div> */}
      
  



      </div>


    </footer>
  );
}

export default Footer;

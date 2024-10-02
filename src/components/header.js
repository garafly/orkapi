import React from "react";
import { useEffect } from "react";
import "./header.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import orkapiLogo from "../images/orkapi-logo.svg"
import instagramLogo from "../images/instagramLogo.svg";
import facebookLogo from "../images/facebookLogo.svg";
import twitterLogo from "../images/twitterLogo.svg";
import linkendinLogo from "../images/linkedinLogo.svg";



const Header = ({ siteTitle }) => {
  useEffect(() => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      });
    });

    const handleClickOutside = (event) => {
      const isClickInside = event.target.closest('.dropdown');
      if (!isClickInside) {
        dropdownToggles.forEach(toggle => {
          var dropdownMenu = toggle.nextElementSibling;
          // dropdownMenu.style.display = 'none';
        });
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      dropdownToggles.forEach(toggle => {
        toggle.removeEventListener('click', handleClickOutside);
      });
    };
  }, []);

  return (
    <header>
      <Link to="/">
      <div className="logo">
        <StaticImage alt="logo orkapi" src={orkapiLogo} className="logo-image" />
      </div>
      </Link>

      <div className="navLinks">
      <div className="navLink"><a class="navText" href="/">Inicio</a></div>
        <div className="navLink"><a class="navText" href="/our-system">Sistema de lotería</a></div>
        <div className="navLink"><a class="navText" href="/about-us">Sobre nosotros</a></div>
        <div className="navLink"><a class="navText" href="/work-with-us">Únete al equipo</a></div>
        <div className="navLink"><a class="navText" href="/downloads">Descargas</a></div>
        <div className="navLinkB"><span className="underline--magical"><a class="navText" href="/contact-us">Contáctanos</a></span></div>
      </div>

      <div className="mobile-menu dropdown">
        <div className="dropdown-toggle">
          <StaticImage alt="menu" src="../images/menuIcon.svg" className="menuIcon" />
        </div>
        <div className="dropdown-menu">
          <div className="linksDropdownMenu">
            <div className="menuDivision">
              <div className="dropdown-item"><StaticImage alt="homeIcon" src="../images/homeIcon.svg" className="mobileNavIcons" />
                <Link to="/">
                  <div className="textContent">
                    <a href="/">Inicio</a>
                    <p>Nuestra página principal</p>
                  </div>
                </Link>
              </div>

              <div className="dropdown-item">
                <StaticImage alt="roundHubIcon" src="../images/roundHubIcon.svg" className="mobileNavIcons" />
                <Link to="/our-system">
                  <div className="textContent">
                    <a href="/our-system">Nuestro sistema</a>
                    <p>Explora el alcance de lo que te podemos ofrecer</p>
                  </div>
                </Link>
              </div>

              <div className="dropdown-item">
                <StaticImage alt="buildingIcon" src="../images/buildingIcon.svg" className="mobileNavIcons" />
                <Link to="/about-us">
                  <div className="textContent">
                    <a href="/about-us">Sobre nosotros</a>
                    <p>Conoce más sobre nuestra empresa</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="menuDivision">

            <div className="dropdown-item">
              <StaticImage alt="puzzleIcon" src="../images/puzzlePieceIcon.svg" className="mobileNavIcons" />
              <Link to="/work-with-us">
                <div className="textContent">
                  <a href="/work-with-us">Únete al equipo</a>
                  <p>Comparte y expande tus habilidades</p>
                </div>
              </Link>
            </div>

              <div className="dropdown-item">
                <StaticImage alt="downloadIcon" src="../images/downloadIcon.svg" className="mobileNavIcons" />
                <Link to="/downloads">
                  <div className="textContent">
                    <a href="/downloads">Descargas</a>
                    <p>Apps, apk, apis y documentación</p>
                  </div>
                </Link>
              </div>

              <div className="dropdown-item">
                <StaticImage alt="paperPlaneIcon" src="../images/paperPlaneIcon.svg" className="mobileNavIcons" />
                <Link to="/contact-us">
                  <div className="textContent">
                    <a href="/contact-us">Contáctanos</a>
                    <p>¡Colaboremos! Anímate a mandarnos un mensaje</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="socialDropdownMenu">

            <div className="socialMediaLogos">
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
                  <StaticImage alt="linkedinLogo" src={linkendinLogo} />
                </div>
              </a>
              
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}



export default Header;

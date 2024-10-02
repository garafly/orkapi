/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import imgOrkapi from "../images/ORKAPI.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer></Footer>

      {/* <FloatingWhatsApp
        avatar={imgOrkapi}
        phoneNumber="18093837933"
        accountName="Orkapi"
        chatMessage="Hola!👋 🤝 ¿Como podemos ayudarte?"
        placeholder="Escribe un mensaje..."
        statusMessage="Típicamente, responde en menos de 1 hora"
      ></FloatingWhatsApp>
   */}

    </>
  )
}

export default Layout

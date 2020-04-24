import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useDarkMode from "use-dark-mode"
import Sunrise from "../components/sunrise"
import Sunset from "../components/sunset"


const IndexPage = () => {
  
      // Instantiate with the default behavior, in this case, it defaults to light-mode
 // This places "light-mode" class on document.body, as outlined in my gatsby-config.js
 const darkMode = useDarkMode(false);

 // Custom function that handles the toggling
 // When called, it replaces the class on document.body and holds it in localStorage
 const handleTheme = theme => theme === "dark" ? darkMode.enable() : darkMode.disable();

  return(
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <div className="hero-container">
        <h1>Hi I'm <span className="hls">Tochukwu</span><br/>A <span className="hls">Frontend</span> developer passionate about building <br/><span className="hls">blazing fast</span> websites</h1>
        <em>With years of experience and expertise bundled to serve you better.</em>
        <p><a href="#">View my projects</a> or <a href="#">Read my Blog</a></p>
      </div>
      <div className="modes">
         <Sunset onClick={handleTheme} />  
         <Sunrise onClick={handleTheme} />     
      </div>
    </section>
  </Layout>
)
}

export default IndexPage

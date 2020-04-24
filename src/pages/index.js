/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import useDarkMode from 'use-dark-mode'



const IndexPage = () => {

    const [isDark, setIsDark] = useState(false);
    const toggle = () => {
      setIsDark(!isDark)
      !isDark ? darkMode.enable() : darkMode.disable();
    };


   const darkMode = useDarkMode(false);

  return(
    <Layout>
    <SEO title="Home" />
    <section className="hero">
      <div className="hero-container">
        <h1>Hi I'm <span className="hls">Tochukwu</span><br/>A <span className="hls">Frontend</span> developer passionate about building <br/><span className="hls">blazing fast</span> websites</h1>
        <em>With years of experience and expertise bundled to serve you better.</em>
        <p><a href="/">View my projects</a> or <a href="/">Read my Blog</a></p>
      </div>
      <div className="modes">
      <div className="container">
          <label className="switch">
            <input type="checkbox" id="checkbox" onClick={toggle} />
            <div className="slider round" />
          </label>
      </div>
      </div>
    </section>
  </Layout>
)
}

export default IndexPage

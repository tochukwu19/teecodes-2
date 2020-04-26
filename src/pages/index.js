/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useDarkMode from "use-dark-mode"
import Work1 from "../images/work1.png"
import Work2 from "../images/work2.png"
import Work3 from "../images/work3.png"



const IndexPage = () => {
  const [isDark, setIsDark] = useState(true)
  const toggle = () => {
    setIsDark(!isDark)
    !isDark ? darkMode.enable() : darkMode.disable()
  }

  const darkMode = useDarkMode(true)

  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero">
        <div className="hero-container">
          <h1>
            Hi I'm <span className="hls">Tochukwu</span>
            <br />A <span className="hls">Frontend</span> developer passionate
            about building <br />
            <span className="hls">blazing fast</span> websites
          </h1>
          <em>
            With years of experience and expertise bundled to serve you better.
          </em>
          <p>
            <a href="/">View my projects</a> or <a href="/">Read my Blog</a>
          </p>
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
      <section class="works">
        <div className="work-container">
          <div className = "work work1">
            <img src={Work1} alt="work1" className="work-image"/>
            <div className="overlay">
                <p>A Restaurant website made with Html, Css and Js</p>
                <a href="\">Visit Website</a>
            </div>
          </div>
          <div className="work work2">
            <img src={Work2} alt="work2" className="work-image2"/>
            <div className="overlay">
                <p>An Open source project</p>
                <a href="\">Visit Website</a>
            </div>
          </div>
          <div className="work work3">
            <img src={Work3} alt="work3" className="work-image3"/>
            <div className="overlay">
                <p>A Frontend-Mentor challenge i took on, A site built with React using Desktop first approach</p>
                <a href="\">Visit Website</a>
            </div>
          </div>
          <div className="work work4">
            <div className="work-image4">
              <h2>AUSTIN JACOBS</h2>
            </div>
            <div className="overlay">
                <p>A Frontend-Mentor challenge i took on, A site built with React using Desktop first approach</p>
                <a href="\">Visit Website</a>
            </div>
          </div>
          <div className="work work5">
            <div className="work-image5">
              <h2>COMING SOON</h2>
            </div>
            <div className="overlay">
                <p>Let's make this happen</p>
                <a href="\">Contact me!</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

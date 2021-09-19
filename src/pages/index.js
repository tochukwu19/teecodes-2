/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useDarkMode from "use-dark-mode"
import Work1 from "../images/work1.png"
import Work2 from "../images/work2.png"
import Work3 from "../images/logo.svg"
import Work3D from "../images/logodark.svg"
import {Link} from "gatsby"
import AOS from 'aos';
import 'aos/dist/aos.css';





const IndexPage = () => {
  const [isDark, setIsDark] = useState(false)
  const toggle = () => {
    setIsDark(!isDark)
    !isDark ? darkMode.enable() : darkMode.disable()
  }

  const darkMode = useDarkMode(false)

  useEffect(() => {

    AOS.init({
      duration : 2000
    })

  }
)

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
            <a href="#works">View my projects</a> or <Link to="/blog">Read my Blog</Link>
          </p>
        </div>
        {/* <div className="modes">
        <svg id="Layer_1" onClick={toggle} enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m384 384c0 70.692-57.308 128-128 128-141.384 0-256-114.616-256-256 0-140.28 112.837-254.187 252.696-255.958 79.292 18.328 131.304 313.266 131.304 383.958z" className="lig" fill="#fff"/></g><path d="m384 384c0-69.705-50.57-357.432-128-383.022v511.022c70.692 0 128-57.308 128-128z" fill="#e1f1fa"/><g><path d="m256 430.998c-25.915 0-46.998-21.083-46.998-46.998s21.083-46.998 46.998-46.998 46.998 21.083 46.998 46.998-21.083 46.998-46.998 46.998z" className="dar" fill="#23272b"/></g><path d="m302.998 384c0-25.914-21.083-46.998-46.998-46.998v93.995c25.915.001 46.998-21.083 46.998-46.997z" fill="#0b0c0d" className="dar"/><g><path d="m259.304 511.958c69.165-1.752 124.696-58.37 124.696-127.958 0-70.692-57.308-128-128-128s-128-57.308-128-128 57.308-128 128-128c141.384 0 256 114.616 256 256 0 140.28-112.837 254.187-252.696 255.958z" className="dar" fill="#23272b"/></g><path d="m384 384c0 69.588-55.531 126.206-124.696 127.958 139.859-1.771 252.696-115.679 252.696-255.958 0-141.384-114.616-256-256-256v256c70.692 0 128 57.308 128 128z" className="dar" fill="#0b0c0d"/><g><path d="m256 174.998c-25.915 0-46.998-21.083-46.998-46.998s21.083-46.998 46.998-46.998 46.998 21.083 46.998 46.998-21.083 46.998-46.998 46.998z" fill="#f5fafc"/></g><path d="m302.998 128c0-25.914-21.083-46.998-46.998-46.998v93.995c25.915.001 46.998-21.082 46.998-46.997z" className="lig" fill="#e1f1fa"/></g></svg>
        </div> */}
      </section>
      <section className="works" id="works">
        <div className="work-header">
          <div>
            <em>SELECTED WORKS</em>
            <h2>Case Studies</h2>
           </div>
        </div>
        <div className="work-container">
          <div className = "work work1">
            <img src={Work1} alt="work1" className="work-image"/>
            <div className="overlay">
                <p>A Restaurant website made with Html, Css and Js</p>
                <a href="https://rivalrymealss.netlify.app/">Visit Website</a>
            </div>
          </div>
          <div className="work work4">
            <div className="work-image4">
              <h2>AUSTIN JACOBS</h2>
            </div>
            <div className="overlay">
                <p>A Videographer/Photographer portfolio website</p>
                <a href="https://austinjacobs.netlify.app/">Visit Website</a>
            </div>
          </div>
          <div className="work work2">
            <div className="work-image4">
              <h2>COURSKIT</h2>
            </div>
            <div className="overlay">
                <p>A Web app for easy Timetable Generation and Tracking.</p>
                <a href="https://timetable-app.netlify.app/">Visit Website</a>
            </div>
          </div>
          <div className="work work5">
            <div className="work-image5">
              <h2>COMING SOON</h2>
            </div>
            <div className="overlay">
                <p>Let's make this happen</p>
                <Link to="/contact">Contact me!</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="redir">
        <div className="redir-about">
           <h2>You want to know more about me?</h2>
           <Link to="/about">Visit about</Link>
        </div>
        <div className="redir-contact">
           <h2>I write a little about coding tips and hacks</h2>
           <Link to="/blog">Read my blog</Link>
        </div>
      </section>
      <section className="needs">
        <em>Need a developer?</em>
        <div>
            <Link to="/contact"><h2>Let's work together</h2></Link>
              <svg id="Layer_2" viewBox="0 0 512 512">
                <g>
                  <g>
                    <path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
                      H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
                      c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
                      "/>
                  </g>
                </g>
              </svg>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useDarkMode from "use-dark-mode"
import Work1 from "../images/work1.png"
import Work2 from "../images/work2.png"
import Work3 from "../images/logo.svg"
import Work3D from "../images/logodark.svg"
import {Link} from "gatsby"




const IndexPage = () => {
  const [isDark, setIsDark] = useState(false)
  const toggle = () => {
    setIsDark(!isDark)
    !isDark ? darkMode.enable() : darkMode.disable()
  }

  const darkMode = useDarkMode(false)

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
        <div className="modes">
          <div className="container">
            <label className="switch">
              <input type="checkbox" id="checkbox" onClick={toggle} />
              <div className="slider round" />
            </label>
          </div>
        </div>
      </section>
      <section class="works" id="works">
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
                <a href="http://rivalrymeals.com/">Visit Website</a>
            </div>
          </div>
          <div className="work work2">
            <img src={Work2} alt="work2" className="work-image2"/>
            <div className="overlay">
                <p>An Open source project</p>
                <a href="https://emmanuerl.github.io/ECX-landing-page/">Visit Website</a>
            </div>
          </div>
          <div className="work work3">
            { !isDark ? <img src={Work3} alt="work3" className="work-image3"/> : <img src={Work3D} alt="work3" className="work-image3"/> }
            <div className="overlay">
                <p>A Frontend-Mentor challenge i took on, A site built with React using Desktop first approach</p>
                <a href="https://insurefm.netlify.com/">Visit Website</a>
            </div>
          </div>
          <div className="work work4">
            <div className="work-image4">
              <h2>AUSTIN JACOBS</h2>
            </div>
            <div className="overlay">
                <p>A Videographer/Photographer portfolio website</p>
                <a href="http://austinjacob.netlify.com/">Visit Website</a>
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
              <svg id="Layer_1" viewBox="0 0 512 512">
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
      <section className="footnav">
        <div className="navcol">
          <h2>Contact Information</h2>
          <p>Feel free to send me a message anytime</p>
          <ul>
            <li><span>Phone -</span> 08134420604</li>
            <li><a href="mailto:onwunali91@yahoo.com"><span>EMAIL -</span> Onwunali91@yahoo.com</a></li>
          </ul>
        </div>
        <div className="navcol">
          <h2>SiteMap</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#works">Works</a></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="navcol">
          <h2>Follow me on</h2>
          <ul>
            <li><a href="https://twitter.com/teeCodes">Twitter</a></li>
            <li><a href="https://www.instagram.com/tee.codes_/?hl=en">Instagram</a></li>
            <li><a href="https://github.com/tochukwu19">Github</a></li>
            <li><a href="https://www.linkedin.com/in/onwunali-tochukwu-aa5318183">LinkedIn</a></li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

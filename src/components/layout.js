/* eslint-disable prettier/prettier */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"


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
      <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
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
            <li><a href="/#works">Works</a></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="navcol">
          <h2>Follow me on</h2>
          <ul>
            <li><a href="https://twitter.com/teeCodes">Twitter</a></li>
            <li><a href="https://www.instagram.com/tee.codes/">Instagram</a></li>
            <li><a href="https://github.com/tochukwu19">Github</a></li>
            <li><a href="https://www.linkedin.com/in/onwunali-tochukwu-aa5318183">LinkedIn</a></li>
          </ul>
        </div>
      </section>
        <footer className="footer">© {new Date().getFullYear()} Built by @teeCodes with 💙</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/* eslint-disable prettier/prettier */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const contactPage = () => (
    <Layout>
      <SEO title="Contact" />
      <section className="contact">
        <div className="contact-container">
            <h3>I'll be happy to learn about your project</h3>
            <em>Fill the form below</em>
            <form type="contact" method="POST" data-netlify="true">
                <div>
                    <input type="text" placeholder="Your name" className="name"/>
                    <input type="text" placeholder="Your Email"/>
                </div>
                <input type="text" placeholder="Type of Project"/>
                <textarea placeholder="Project Details"></textarea>
                <input type="submit" value="Submit" className="submit"/>
            </form>
        </div>
      </section>
    </Layout>
)

export default contactPage
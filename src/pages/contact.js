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
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                    <input type="text" name="name" placeholder="Your name" className="name"/>
                    <input type="text" name="email" placeholder="Your Email"/>
                </div>
                <input type="text" name="project" placeholder="Type of Project"/>
                <textarea placeholder="Project Details" name="details"></textarea>
                <input type="submit" value="Submit" className="submit"/>
            </form>
        </div>
      </section>
    </Layout>
)

export default contactPage
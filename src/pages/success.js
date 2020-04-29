/* eslint-disable prettier/prettier */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby"

const successPage = () => (
    <Layout>
      <SEO title="Success!" />
      <section className="success">
            <h3>Your Enquiry has been sent successfully!</h3>
            <Link to="/contact">Go back to Contact Page</Link>
      </section>
    </Layout>
)

export default successPage
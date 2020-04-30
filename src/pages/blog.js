import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <section className="blog">
        <div className="blog-cap">
          <h1>Blog</h1>
        </div>
        <div className="blog-container">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}
                  <span> — {node.frontmatter.date} </span>
                </h3>
              </Link>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

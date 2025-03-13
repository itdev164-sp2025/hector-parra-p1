import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <ul className={styles.list}>
      {
        data.allContentfulRecipe.edges.map(edge  => (
          <li key={edge.node.name}>
            <Link to={edge.node.name}>
              {edge.node.name}
            </Link>
            <div>
            <p>By {edge.node.author
            }</p>
          </div>
          </li>
        ))
      }
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allContentfulRecipe {
      edges {
        node {
          name
          author
        }
      }
    }
  }
`

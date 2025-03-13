import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const about = ({ data }) => {
    const { author, email } = data.site.siteMetadata;
    return (
        <Layout>
            <Seo title="About" />
            <h1>About {author}</h1>
            <p>This is a simple about page.</p>
            <p>Want to work with me? Contact me at {email}</p>
            <Link to="/">Go back to the homepage</Link>
            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
            />
        </Layout>
    )
}

export default about;

export const query = graphql`
    query {
        site {
            siteMetadata {
                    author
                    email
            }
        }
    }
`
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <blockquote className="pullquote">
      The art challenges the technology, and the technology inspires the art.
      <cite className="d-block">&mdash;&thinsp;John Lasseter</cite>
    </blockquote>
    <p>
      MCC has a{" "}
      <a href="https://3dpotter.com/printers/potterbot-9-pro">
        3D PotterBot 9 Pro
      </a>{" "}
      in the Art department, and this site will help you learn how to use it.
      Check back soon for links to resources and software.
    </p>
  </Layout>
)

export default IndexPage

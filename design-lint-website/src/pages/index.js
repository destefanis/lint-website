import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Cards from "../components/cards"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <Hero />
      <Banner />
      <Cards />
    </div>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <div><Link to="/" activeStyle={{ color: 'red' }}>Home</Link></div>
    <div><Link to="/about">About</Link></div>
  </Layout>
)

export default IndexPage

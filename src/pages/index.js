import React from "react"

import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <div><Link to="/">Home</Link></div>
    <div><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></div>
  </Layout>
)

export default IndexPage

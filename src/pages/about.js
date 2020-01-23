import React from 'react'

import { Link } from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About Page</h1>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></div>
    </Layout>
)

export default AboutPage
import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => (
    <>
        <h1>About Page</h1>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></div>
    </>
)

export default AboutPage
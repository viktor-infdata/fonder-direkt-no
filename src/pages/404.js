import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <section className="hero is-light is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title mb-5">
            Ups ser ut til at du har funnet en side som ikke
            eksisterer&hellip;
          </h1>
          <h2 className="subtitle">
            Men ikke noe problem, vennligst gå til{' '}
            <Link to="/">startsiden</Link> og finn nyheter :-)
          </h2>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage

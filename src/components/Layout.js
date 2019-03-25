import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'typeface-fjalla-one' //eslint-disable-line
import 'typeface-merriweather' //eslint-disable-line
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <React.Fragment>
    <Helmet title="Fonder Direkt">
      <html lang="no" />
      <meta
        name="description"
        content="Fonder Direkt er en plattform som produseres av Nyhetsbyrån Direkts fondsredaksjon der du kan finne informasjon, lese nyheter og ta del i kommunikasjon om fond."
      />
      <meta
        name="copyright"
        content="Fonder Direkt er en del av Aktiebolaget Nyhetsbyrån Direkt"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png?v2"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png?v2"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png?v2"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg?v2" color="#037184" />
      <link rel="shortcut icon" href="/favicon.ico?v2" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://fonderdirekt.no/og-image.png?v2"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:title" content="Fonder Direkt" />
      <meta
        property="og:description"
        content="Fonder Direkt er en plattform som produseres av Nyhetsbyrån Direkts fondsredaksjon der du kan finne informasjon, lese nyheter og ta del i kommunikasjon om fond."
      />
      <meta property="og:url" content="https://fonderdirekt.no" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:image"
        content="https://fonderdirekt.no/og-image.png?v2"
      />
      <meta name="twitter:site" content="@fonder_direkt" />
      <meta
        name="google-site-verification"
        content="BhUA-9McyW4lE9nqkBPjgCI7UVWzzbrx00Hr_bwEnKA"
      />
    </Helmet>
    <div className="page">
      <div className="main">
        <Navbar />
        <React.Fragment>{children}</React.Fragment>
      </div>
      <Footer />
    </div>
  </React.Fragment>
)

export default TemplateWrapper

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({
  title,
  content,
  helmet,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      {helmet || ''}
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            <h2 className="title is-size-3">{title}</h2>
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        helmet={
          <Helmet title={`Om Fonder Direkt`}>
            <meta
              name="description"
              content="Fonder Direkt er en plattform hvor du kan finne nyheter om fondsmarkedet både i video- og skriftformat, og ta del i redaksjonelt arbeid om fond."
            />
            <meta
              property="og:description"
              content="Fonder Direkt er en plattform hvor du kan finne nyheter om fondsmarkedet både i video- og skriftformat, og ta del i redaksjonelt arbeid om fond."
            />
            <meta property="og:title" content="Om Fonder Direkt" />
            <meta
              property="og:url"
              content="https://fonderdirekt.no/om-fonder-direkt/"
            />
          </Helmet>
        }
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

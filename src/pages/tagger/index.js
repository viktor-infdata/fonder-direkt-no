import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Tagger | ${title}`}>
        <meta
          name="description"
          content="Utforsk taggede nyheter på Fonder Direkt, en plattform hvor du kan finne informasjon, lese nyheter og delta i kommunikasjon om fond."
        />
        <meta
          property="og:description"
          content="Utforsk taggede nyheter på Fonder Direkt, en plattform hvor du kan finne informasjon, lese nyheter og delta i kommunikasjon om fond."
        />
        <meta property="og:title" content={`Tagger | ${title}`} />
        <meta property="og:url" content="https://fonderdirekt.no/tagger/" />
      </Helmet>
      <div className="container content">
        <div className="columns is-centered">
          <div className="column is-10">
            <div className="columns is-multiline is-mobile">
              {group.map(tag => (
                <div
                  className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile"
                  key={tag.fieldValue}
                >
                  <Link to={`/tagger/${kebabCase(tag.fieldValue)}/`}>
                    <div className="box is-tag is-centered has-equal-height">
                      <h5 className="is-size-6 mb-1">{tag.fieldValue}</h5>
                      <small className="is-size-7">
                        {tag.totalCount} nyhet{tag.totalCount === 1 ? '' : 'er'}
                      </small>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

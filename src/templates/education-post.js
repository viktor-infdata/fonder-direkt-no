import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export const EducationPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  date,
  helmet,
  videoId,
  image,
  soundCloudId,
  english,
  shareUrl,
}) => {
  const PostContent = contentComponent || Content

  return (
    <React.Fragment>
      {helmet || ''}
      {videoId != null ? (
        <React.Fragment>
          <div className="is-video">
            <div className="container">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title={videoId}
                  className="embed-responsive-item"
                  src={'https://www.youtube.com/embed/' + videoId + '?rel=0'}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <section className="section">
            <div className="container content">
              <div className="columns is-centered">
                <div className="column is-8">
                  <h5 className="is-size-6 mb-2 has-text-grey">
                    <time dateTime={date}>{date}</time>
                    {english === true && (
                      <span>
                        {' '}
                        &bull;{' '}
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          className="is-language"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Language</title>
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                        </svg>
                        ENGLISH
                      </span>
                    )}
                  </h5>
                  <h1 className="title is-size-3 mt-0">{title}</h1>
                  <PostContent content={content} />
                  {soundCloudId != null && (
                    <React.Fragment>
                      <hr />
                      {english === true && (
                        <h5 className="is-size-5">
                          This FD Akademi is also available as a podcast
                        </h5>
                      )}
                      {english !== true && (
                        <h5 className="is-size-5">
                          FD Akademi finne også som podcast
                        </h5>
                      )}
                      <iframe
                        title={soundCloudId}
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameborder="no"
                        allow="autoplay"
                        src={
                          'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' +
                          soundCloudId +
                          '&color=%23037184&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
                        }
                      />
                    </React.Fragment>
                  )}
                  <hr />
                  {english === true && (
                    <React.Fragment>
                      <p>
                        <strong>
                          FD Akademi helps provide an education and
                          understanding of financial terms, subjects and themes
                          with regards to funds, and other financial investment
                          vehicles. FD Akademi wants to help breakdown the
                          barriers with regards to finance, and give everyone
                          who wants to learn more, the opportunity to learn more
                          through our content. It has never been more important
                          to be able to take ownership of financial decisions,
                          and FD Akademi along with Fonder Direkt want to help
                          provide you with the information that you need to do
                          this.
                        </strong>
                      </p>
                      <p>
                        <strong>
                          FD Akademi is part of Fonder Direkt which is part of
                          Nyhetsbyrån Direkt and is a completely impartial
                          service.
                        </strong>
                      </p>
                    </React.Fragment>
                  )}
                  {english !== true && (
                    <React.Fragment>
                      <p>
                        <strong>
                          FD Akademi tilbyr utdanning og innsikt i finansielle
                          termer, temaer og temaer relatert til fond og andre
                          finansielle investeringsprodukter. FD Akademi ønsker å
                          bryte barrierer når det gjelder finans, og gi alle
                          muligheten til å lære seg mer om mulighetene med
                          innholdet vårt. Det har aldri vært viktigere å kunne
                          ta kontroll over sine økonomiske beslutninger, og FD
                          Akademi, sammen med Fonder Direkt, vil gi den
                          informasjonen du trenger for å gjøre dette.
                        </strong>
                      </p>
                      <p>
                        <strong>
                          FD Akademi er en helt uavhengig tjeneste som inngår i
                          Fonder Direkt, som igjen er en del av Nyhetsbyrån
                          Direkt.
                        </strong>
                      </p>
                    </React.Fragment>
                  )}
                  <hr />
                  {tags && tags.length ? (
                    <div>
                      {english === true && <h4>TAGS</h4>}
                      {english !== true && <h4>TAGGER</h4>}
                      <div className="tags">
                        {tags.map(tag => (
                          <Link
                            key={tag + `tag`}
                            to={`/tagger/${kebabCase(tag)}/`}
                            className="tag is-medium is-link"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  <div className="share">
                    <p className="heading">DELE</p>
                    <OutboundLink
                      href={
                        'https://twitter.com/share?url=' +
                        encodeURIComponent(shareUrl) +
                        '&text=' +
                        encodeURIComponent(title)
                      }
                      className="is-twitter is-share"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Twitter</title>
                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                      </svg>
                      <span className="sr-only sr-only-focusable">Twitter</span>
                    </OutboundLink>
                    <OutboundLink
                      href={
                        'https://www.facebook.com/sharer/sharer.php?u=' +
                        encodeURIComponent(shareUrl) +
                        '&t=' +
                        encodeURIComponent(title)
                      }
                      className="is-facebook is-share"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Facebook</title>
                        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                      </svg>
                      <span className="sr-only sr-only-focusable">
                        Facebook
                      </span>
                    </OutboundLink>
                    <OutboundLink
                      href={
                        'https://www.linkedin.com/shareArticle?url=' +
                        encodeURIComponent(shareUrl) +
                        '&mini=true&title=' +
                        encodeURIComponent(title)
                      }
                      className="is-linkedin is-share"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>LinkedIn</title>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="sr-only sr-only-focusable">
                        LinkedIn
                      </span>
                    </OutboundLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      ) : (
        <div className="is-featured-post">
          <div className="container-fluid">
            <Img
              fluid={image.childImageSharp.fluid}
              alt={title}
              className="image is-gradient mx-0 mt-0 mb-2"
            />
          </div>
          <section className="section">
            <div className="container content">
              <div className="columns is-centered">
                <div className="column is-10 is-feature">
                  <div className="columns is-centered is-desktop">
                    <div className="column is-10-desktop is-12-tablet">
                      <h5 className="is-size-6 mb-2 has-text-grey">
                        <time dateTime={date}>{date}</time>
                      </h5>
                      <h1 className="title is-size-3 mt-0">{title}</h1>
                      <PostContent content={content} />
                      {soundCloudId != null && (
                        <React.Fragment>
                          <hr />
                          {english === true && (
                            <h5 className="is-size-5">
                              This FD Akademi is also available as a podcast
                            </h5>
                          )}
                          {english !== true && (
                            <h5 className="is-size-5">
                              FD Akademi finne også som podcast
                            </h5>
                          )}
                          <iframe
                            title={soundCloudId}
                            width="100%"
                            height="166"
                            scrolling="no"
                            frameborder="no"
                            allow="autoplay"
                            src={
                              'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' +
                              soundCloudId +
                              '&color=%23037184&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
                            }
                          />
                        </React.Fragment>
                      )}
                      <hr />
                      {english === true && (
                        <React.Fragment>
                          <p>
                            <strong>
                              FD Akademi helps provide an education and
                              understanding of financial terms, subjects and
                              themes with regards to funds, and other financial
                              investment vehicles. FD Akademi wants to help
                              breakdown the barriers with regards to finance,
                              and give everyone who wants to learn more, the
                              opportunity to learn more through our content. It
                              has never been more important to be able to take
                              ownership of financial decisions, and FD Akademi
                              along with Fonder Direkt want to help provide you
                              with the information that you need to do this.
                            </strong>
                          </p>
                          <p>
                            <strong>
                              FD Akademi is part of Fonder Direkt which is part
                              of Nyhetsbyrån Direkt and is a completely
                              impartial service.
                            </strong>
                          </p>
                        </React.Fragment>
                      )}
                      {english !== true && (
                        <React.Fragment>
                          <p>
                            <strong>
                              FD Akademi tilbyr utdanning og innsikt i
                              finansielle termer, temaer og temaer relatert til
                              fond og andre finansielle investeringsprodukter.
                              FD Akademi ønsker å bryte barrierer når det
                              gjelder finans, og gi alle muligheten til å lære
                              seg mer om mulighetene med innholdet vårt. Det har
                              aldri vært viktigere å kunne ta kontroll over sine
                              økonomiske beslutninger, og FD Akademi, sammen med
                              Fonder Direkt, vil gi den informasjonen du trenger
                              for å gjøre dette.
                            </strong>
                          </p>
                          <p>
                            <strong>
                              FD Akademi er en helt uavhengig tjeneste som
                              inngår i Fonder Direkt, som igjen er en del av
                              Nyhetsbyrån Direkt.
                            </strong>
                          </p>
                        </React.Fragment>
                      )}
                      <hr />
                      {tags && tags.length ? (
                        <React.Fragment>
                          {english === true && <h4>TAGS</h4>}
                          {english !== true && <h4>TAGGER</h4>}
                          <div className="tags">
                            {tags.map(tag => (
                              <Link
                                key={tag + `tag`}
                                to={`/tagger/${kebabCase(tag)}/`}
                                className="tag is-medium is-link"
                              >
                                {tag}
                              </Link>
                            ))}
                          </div>
                        </React.Fragment>
                      ) : null}
                      <div className="share">
                        <p className="heading">DELE</p>
                        <OutboundLink
                          href={
                            'https://twitter.com/share?url=' +
                            encodeURIComponent(shareUrl) +
                            '&text=' +
                            encodeURIComponent(title)
                          }
                          className="is-twitter is-share"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Twitter</title>
                            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                          </svg>
                          <span className="sr-only sr-only-focusable">
                            Twitter
                          </span>
                        </OutboundLink>
                        <OutboundLink
                          href={
                            'https://www.facebook.com/sharer/sharer.php?u=' +
                            encodeURIComponent(shareUrl) +
                            '&t=' +
                            encodeURIComponent(title)
                          }
                          className="is-facebook is-share"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Facebook</title>
                            <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                          </svg>
                          <span className="sr-only sr-only-focusable">
                            Facebook
                          </span>
                        </OutboundLink>
                        <OutboundLink
                          href={
                            'https://www.linkedin.com/shareArticle?url=' +
                            encodeURIComponent(shareUrl) +
                            '&mini=true&title=' +
                            encodeURIComponent(title)
                          }
                          className="is-linkedin is-share"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>LinkedIn</title>
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          <span className="sr-only sr-only-focusable">
                            LinkedIn
                          </span>
                        </OutboundLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </React.Fragment>
  )
}

EducationPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
  videoId: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  soundCloudId: PropTypes.string,
  english: PropTypes.bool,
}

const EducationPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EducationPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet>
            {post.frontmatter.english === true && <html lang="en" />}
            <title>{`${post.frontmatter.title} | Fonder Direkt`}</title>
            <meta name="description" content={`${post.excerpt}`} />
            <meta name="keywords" content={`${post.frontmatter.tags}`} />
            <meta property="og:title" content={`${post.frontmatter.title}`} />
            <meta property="og:description" content={`${post.excerpt}`} />
            <meta
              property="og:url"
              content={`https://fonderdirekt.no${post.fields.slug}`}
            />
            <meta property="og:type" content="article" />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        videoId={post.frontmatter.videoId}
        soundCloudId={post.frontmatter.soundCloudId}
        english={post.frontmatter.english}
        image={post.frontmatter.image}
        shareUrl={`https://fonderdirekt.no${post.fields.slug}`}
      />
    </Layout>
  )
}

EducationPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default EducationPost

export const pageQuery = graphql`
  query EducationPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      excerpt(pruneLength: 280)
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
        videoId
        soundCloudId
        english
      }
    }
  }
`

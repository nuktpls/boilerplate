import React from 'react'
import { Link } from 'gatsby'

import Layout from 'gatsby-layout-builder'
import slugify from '../../tools/slugify'

const SinglePostBlock = ({ imgHolder, date, author, html, tags, title }) => {
  return (
    <article>
      <Layout
        type="ROW"
        opt={{
          isBoxed: false,
          classes: 'post-header',
          bgColor: '#111e24',
        }}
      >
        <div className="header-post">
          <Layout type="ROW" opt={{ isBoxed: true, classes: 'post' }}>
            <div className="post-tags-wrapper">
              {tags.map((e, i) => {
                return (
                  <Link
                    to={`/tags/${slugify(e)}/`}
                    className="post-tags"
                    key={i}
                  >
                    {e}
                  </Link>
                )
              })}
            </div>
            <h1>{title}</h1>
          </Layout>
        </div>
      </Layout>
      <Layout type="ROW" opt={{ isBoxed: true, classes: 'main-post' }}>
        <div className="container">
          <div className="post-author">
            <Layout
              type="BLOCK_IMAGE"
              opt={{
                queryCard: imgHolder,
                alt: 'Descola Holder',
                classes: 'author-img',
              }}
            />
            <div className="post-author-infos">
              <p className="post-author-date">{date}</p>
              <p className="post-author-name">{author}</p>
            </div>
          </div>
          <div
            className="post-article-content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </Layout>
    </article>
  )
}

export default SinglePostBlock

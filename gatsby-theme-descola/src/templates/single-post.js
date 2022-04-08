import React from 'react'
import { graphql } from 'gatsby'

import DescolaLogo from '@Images/descola-logo.svg'
import DescolaLogoDark from '@Images/descola-logo-dark.svg'

import Layout from 'gatsby-layout-builder'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
import FooterBlock from '@BlockBuilder/FooterBlock'

import SinglePostBlock from '@BlockBuilder/SinglePostBlock'
// import { useSiteMetaDatas } from '../tools/useSiteMetaDatas'

const SinglePost = ({ data, location }) => {
  // const { footerThreeMarkdowRemark, imgHolder, site } = useSiteMetaDatas()

  const post = data.markdownRemark
  return (
    <Layout type="BODY">
      {/* <HeaderBlock logotipoSvg={<DescolaLogo />} /> */}
      <h1>{post.frontmatter.date}</h1>
      <main>
        {/* <SinglePostBlock
          imgHolder={imgHolder}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
          html={post.html}
          title={post.frontmatter.title}
          tags={post.frontmatter.tags}
        /> */}
      </main>
      {/* <FooterBlock */}
      {/* footerLogo={<DescolaLogoDark />} */}
      {/* featurePosts={footerThreeMarkdowRemark.edges} */}
      {/* /> */}
    </Layout>
  )
}

export const query = graphql`
  query SinglePost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        author
        tags
        featuredPost
        featuredImage {
          childrenImageSharp {
            gatsbyImageData(
              width: 350
              height: 224
              placeholder: NONE
              quality: 100
            )
          }
        }
      }
      excerpt(pruneLength: 200)
      html
      fields {
        slug
      }
    }
  }
`

export default SinglePost

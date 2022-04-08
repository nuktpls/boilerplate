const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)
const rootDir = path.join(__dirname, '../')

// Adding slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(1)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              title
              author
              featuredPost
              tags
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
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 800) {
        group(field: frontmatter___tags) {
          fieldValue
          nodes {
            headings {
              value
            }
            fields {
              slug
            }
            frontmatter {
              featuredImage {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    // const featuredPosts = result.data.featuredPosts.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          rootDir,
          'gatsby-theme-descola/src/templates/single-post.js'
        ),
        context: {
          slug: node.fields.slug,
        },
      })
    })
    // '@Posts': path.resolve(rootDir, 'posts'),

    // const postsPerPage = 5
    // const numPages = Math.ceil(posts.length / postsPerPage)

    // www./blog post list template
    // Array.from({ length: numPages }).forEach((_, index) => {
    // 	createPage({
    // 		path: index === 0 ? `/blog` : `/page/${index + 1}`,
    // 		component: path.resolve(`./src/templates/posts-list.js`),
    // 		context: {
    // 			limit: postsPerPage,
    // 			skip: index * postsPerPage,
    // 			numPages,
    // 			currentPage: index + 1,
    // 		},
    // 	})
    // })

    // const tags = result.data.tagsGroup.group
    // Make tag pages
    // tags.forEach((tag) => {
    // 	createPage({
    // 		path: `/tags/${_.kebabCase(tag.fieldValue)}`,
    // 		component: path.resolve(`./src/templates/tax-posts-list.js`),
    // 		context: {
    // 			tag: tag.fieldValue,
    // 			siteMetadata: result.data.siteMetadata,
    // 			footerThreeMarkdowRemark: result.data.footerThreeMarkdowRemark,
    // 			postsPerPage: result.data.postsPerPage,
    // 		},
    // 	})
    // })
  })
}

// exports.onPostBuild = ({ graphql }) => {
// 	return graphql(`
// 		{
// 			site {
// 				siteMetadata {
// 					organization {
// 						url
// 					}
// 				}
// 			}
// 			apiPosts: allMarkdownRemark(
// 				sort: { fields: frontmatter___date, order: DESC }
// 				limit: 4
// 			) {
// 				edges {
// 					node {
// 						fields {
// 							slug
// 						}
// 						frontmatter {
// 							date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
// 							title
// 							tags
// 							footerFeaturedImage: featuredImage {
// 								childrenImageSharp {
// 									gatsbyImageData(
// 										width: 152
// 										height: 152
// 										placeholder: DOMINANT_COLOR
// 										quality: 80
// 									)
// 								}
// 							}
// 						}
// 						excerpt(pruneLength: 200)
// 					}
// 				}
// 			}
// 		}
// 	`).then((result) => {
// 		// processAndWriteJSONFiles(result)
// 		let feed = []
// 		result.data.apiPosts.edges.forEach(({ node }) => {
// 			const slug = node.fields.slug
// 			const frontmatter = node.frontmatter
// 			const { date, title } = frontmatter
// 			const imageSrc =
// 				result.data.site.siteMetadata.organization.url +
// 				node.frontmatter.footerFeaturedImage.childrenImageSharp[0]
// 					.gatsbyImageData.images.fallback.src

// 			feed.push({
// 				slug: slug,
// 				date: date,
// 				title: title,
// 				imageSrc: imageSrc,
// 				excerpt: node.excerpt,
// 			})
// 		})
// 		fs.writeFileSync(`./public/feed.json`, JSON.stringify({ data: feed }))
// 	})
// }

import React from 'react'
import Layout from 'gatsby-layout-builder'
import SeoContainer from 'gatsby-layout-builder-seo'
import DescolaLogo from '@Images/descola-logo.svg'
import HeaderBlock from '@BlockBuilder/HeaderBlock'
const IndexPage = props => (
  <Layout
    type="BODY"
    // opt={{
    // 	titleSeo: `Descola`,
    // 	classes: 'blog-list',
    // 	schemaType: 'blog',
    // 	blogListing: posts.slice(0, 9),
    // 	mainLogo: imgHolder,
    // 	cardImage: cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null,
    // 	serverUrl: props.location.href,
    // }}
  >
    <HeaderBlock logotipoSvg={<DescolaLogo />} />
    <SeoContainer
      opt={{
        titleSeo: `Descola`,
        classes: 'blog-list',
        keywords: ['some', 'keywords'],
        social: {
          fbAppID: '0',
        },
        datePublished: '2020-05-01',
        schemaType: 'Blog',
        description: 'Loren Ipsum',
        authorSeo: 'Miltão',
        brandPhone: '+5516981061234',
        brandEmail: 'miltonbolonha@gmail.com',
        businessName: 'Meu Negócio',
        dateCreated: '2020-05-02',
        themeColor: '#d2dd',
        // blogListing: posts.slice(0, 9),
        // mainLogo: imgHolder,
        // cardImage: cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null,
        // serverUrl: props.location.href,
      }}
    />
    <Layout
      type="ROW"
      opt={{ isBoxed: true, classes: 'main-container-wrapper' }}
    >
      <main className="main-container" id="site-content" role="list">
        <h1>Posts</h1>
        {/* <PostsBlock
						postsPerPage={site.siteMetadata.postsPerPage}
						postList={posts}
						typeLoad={'push'} // or false
						readMoreText="Ler Mais"
						pagination={{
							loadMoreBtn: true,
							loadMore: 'Ler Mais',
						}}
					/> */}
      </main>
    </Layout>
    {/* <FooterBlock
				footerLogo={<BoiLogoSquared />}
				featurePosts={footerThreeMarkdowRemark.edges}
			/> */}
  </Layout>
)

export default IndexPage

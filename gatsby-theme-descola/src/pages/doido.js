import React from 'react'
import Layout from 'gatsby-layout-builder'
const DoidoPage = props => (
  <Layout type="BODY">
    <Layout
      type="ROW"
      opt={{
        bgColor: '#000',
        isBoxed: false,
      }}
    >
      <Layout
        type="ROW"
        opt={{
          isBoxed: true,
        }}
      >
        <h1>Live Row</h1>
      </Layout>
    </Layout>
    <Layout
      type="ROW"
      opt={{
        bgColor: '#262A33',
      }}
    >
      <Layout
        type="ROW"
        opt={{
          isBoxed: true,
        }}
      >
        TOP MENUs
      </Layout>
    </Layout>
    <Layout
      type="ROW"
      opt={{
        bgColor: '#E5F4FF',
      }}
    >
      <Layout
        type="ROW"
        opt={{
          isBoxed: true,
        }}
      >
        HEADER
      </Layout>
    </Layout>

    <Layout
      type="ROW"
      opt={{
        bgColor: '#E5F4FF',
        isBoxed: false,
      }}
    >
      <Layout
        type="ROW"
        opt={{
          bgColor: '#0093FF',
          isBoxed: true,

          numColumns: 2,
          widthColumns: '45%',
          alignTo: 'right',
          title: 'Loren',
          classes: 'some-class',
          role: null,
          bgImg: null,
        }}
      >
        <h1>BANNER</h1>
        <h1>button</h1>
      </Layout>
    </Layout>
    <Layout
      type="ROW"
      opt={{
        bgColor: '#E5F4FF',
      }}
    >
      <Layout
        type="ROW"
        opt={{
          isBoxed: true,
        }}
      >
        MAIN SECTION
      </Layout>
    </Layout>
    <Layout
      type="ROW"
      opt={{
        bgColor: '#E5F4FF',
      }}
    >
      <Layout
        type="ROW"
        opt={{
          isBoxed: true,
        }}
      >
        HIGHLIGHT SECTION
      </Layout>
    </Layout>

    <Layout
      type="ROW"
      opt={{
        bgColor: '#E5F4FF',
      }}
    >
      <Layout
        type="ROW"
        opt={{
          isBoxed: true,
        }}
      >
        CATEGORY HIGHLIGHT SECTION
      </Layout>
    </Layout>

    <Layout
      type="ROW"
      opt={{
        bgColor: '#0093FF',
      }}
    >
      <Layout
        type="ROW"
        opt={{
          isBoxed: true,
        }}
      >
        FAQ SECTION
      </Layout>
    </Layout>

    <Layout
      type="ROW"
      opt={{
        bgColor: '#E5F4FF',
        isBoxed: false,
      }}
    >
      <Layout type="ROW" opt={{ isBoxed: true, numColumns: 2 }}>
        <Layout type="ROW">
          <Layout type="ROW">DROPS</Layout>
          <Layout type="ROW">Props</Layout>
        </Layout>
        <Layout type="ROW">
          <Layout type="ROW">Gallery</Layout>
          <Layout type="ROW">Engagement socials n so </Layout>
        </Layout>
      </Layout>
    </Layout>

    <Layout
      type="ROW"
      opt={{
        bgColor: '#E5F4FF',
        isBoxed: false,
      }}
    >
      <Layout type="ROW" opt={{ isBoxed: true }}>
        BOILECAST
      </Layout>
    </Layout>

    <Layout
      type="ROW"
      opt={{
        bgColor: '#0093FF',
      }}
    >
      <Layout
        type="ROW"
        opt={{
          isBoxed: true,
        }}
      >
        SUPPORT OPEN SOURCE
      </Layout>
    </Layout>
    <Layout
      type="ROW"
      opt={{
        bgColor: '#E5F4FF',
      }}
    >
      <Layout
        type="ROW"
        opt={{
          isBoxed: true,
        }}
      >
        FOOTER
      </Layout>
      <Layout
        type="ROW"
        opt={{
          isBoxed: true,
        }}
      >
        FOOTER
      </Layout>
    </Layout>
  </Layout>
)

export default DoidoPage

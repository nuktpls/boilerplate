import React from 'react'
import Layout from 'gatsby-layout-builder'
const IndexPage = props => (
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
          classes: 'top-live-row',
        }}
      >
        <a>Components</a>
        <h1>Loren ipsum bagulhete anomorf de ladis aqui oh</h1>
        <h2>Loren ipsun dignustridum alah huakba, of afrodite in Puntakanam</h2>
        <p>LIVE INICIADA HÁ 1 HORA E 30 MINUTOS</p>
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
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Componentes</a>
          </li>
          <li>
            <a href="#">Módulos</a>
          </li>
          <li>
            <a href="#">Universo Boilerplate</a>
          </li>
          <li>
            <a href="#">Documentação</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Estamos Ao Vivo</a>
          </li>
        </ul>
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
          numColumns: 3,
          alignTo: 'center',
        }}
      >
        <p>
          <a href="#">Comandos</a>
        </p>
        <p>
          <a href="#">Logo</a>
        </p>
        <p>
          <a href="#">Search</a>
        </p>
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
          // role: null,
          // bgImg: null,
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

export default IndexPage

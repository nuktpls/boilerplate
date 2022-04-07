// eslint-disable-next-line
import React from 'react'

import GlobalContext from '../services/context'
import Body from '../components/Body'

const BodyContainer = ({ children, opt }) => {
  const bgImage = bgImage
    ? {
        backgroundImage: `url(${opt?.bgImage?.src})`,
      }
    : null
  return (
    <GlobalContext.Consumer>
      {value => (
        <>
          <Body
            opt={opt || false}
            customClasses={opt?.classes || ''}
            bgImage={bgImage || false}
          >
            {children}
          </Body>
        </>
      )}
    </GlobalContext.Consumer>
  )
}
export default BodyContainer

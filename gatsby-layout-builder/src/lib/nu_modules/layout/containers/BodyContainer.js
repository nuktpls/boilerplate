// eslint-disable-next-line
import React from 'react'

import GlobalContext from '../services/context'
import Body from '../components/Body'

const BodyContainer = ({ children, opt }) => {
  return (
    <GlobalContext.Consumer>
      {value => (
        <>
          <Body opt={opt} bgImage={opt.bgImage} customClasses={opt.classes}>
            {children}
          </Body>
        </>
      )}
    </GlobalContext.Consumer>
  )
}
export default BodyContainer

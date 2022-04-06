import React from 'react'
import './src/lib/scss/styles.scss'
import { GlobalProvider } from './src/lib/nu_modules/layout/services/context'
export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
)

import React from 'react'
import { GlobalProvider } from './src/lib/nu_modules/layout/services/context'
export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
)

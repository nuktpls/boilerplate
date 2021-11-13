import React from 'react'
import './scss/styles.scss'
import { GlobalProvider } from './src/modules/layout/services/context'
export const wrapRootElement = ({ element }) => (
	<GlobalProvider>{element}</GlobalProvider>
)

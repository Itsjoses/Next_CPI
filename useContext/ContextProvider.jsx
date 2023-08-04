import React from 'react'
import FunctionComponent from './FunctionComponent'
import ThemeComponent from './ThemeComponent'

export default function ContextProvider({children}) {
  return (
    <ThemeComponent>
        <FunctionComponent>
            {children}
        </FunctionComponent>
    </ThemeComponent>
  )
}

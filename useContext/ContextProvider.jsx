import React from 'react'
import FunctionComponent from './FunctionComponent'
import ThemeComponent from './ThemeComponent'
import UserComponent from './UserComponent'

export default function ContextProvider({children}) {
  return (
    <ThemeComponent>
        <FunctionComponent>
            <UserComponent>
            {children}
            </UserComponent>
        </FunctionComponent>
    </ThemeComponent>
  )
}

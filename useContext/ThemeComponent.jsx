import { FontColorValue, ThemeColorValue } from '@/value/GlobalValue'
import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext()
export const ThemeToggle = createContext()
export const FontContext = createContext()

//get
export function GetFontTheme(){
  return useContext(FontContext)
}

export default function ThemeComponent({children}) {
    const [Theme,setTheme] = useState(ThemeColorValue.Light)
    const [FontTheme,setFontTheme] = useState(FontColorValue.Light)

    function ChangeTheme(){
        if (Theme == ThemeColorValue.Light){
          setFontTheme(FontColorValue.Dark)
          setTheme(ThemeColorValue.Dark)
        } 
        else {
          setFontTheme(FontColorValue.Light)
          setTheme(ThemeColorValue.Light)
        }
    }

  return (
    <ThemeContext.Provider value={Theme}>
        <ThemeToggle.Provider value={ChangeTheme}>
          <FontContext.Provider value={FontTheme}>
            {children}
          </FontContext.Provider>
        </ThemeToggle.Provider>
    </ThemeContext.Provider>
  )
}



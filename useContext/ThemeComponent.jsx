import { FontColorValue, Language, ThemeColorValue } from '@/value/GlobalValue'
import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext()
export const ThemeToggle = createContext()
export const FontContext = createContext()

export const FontLanguageContext = createContext()
export const FontLanguageToggle = createContext()

//get
export function GetFontTheme(){
  return useContext(FontContext)
}

// Language
export function GetFontLanguage(){
  return useContext(FontLanguageContext)
}
export function GetFontLanguageFunction(){
  return useContext(FontLanguageToggle)
}

export default function ThemeComponent({children}) {
    const [Theme,setTheme] = useState(ThemeColorValue.Light)
    const [FontTheme,setFontTheme] = useState(FontColorValue.Light)
    const [FontLanguage,setFontLanguage] = useState(Language.EN)

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

    function ChangeLanguage(){
      setFontLanguage(FontLanguage == Language.IDN ? Language.EN : Language.IDN)
    }

  return (
    <ThemeContext.Provider value={Theme}>
        <ThemeToggle.Provider value={ChangeTheme}>
          <FontContext.Provider value={FontTheme}>
            <FontLanguageContext.Provider value={FontLanguage}>
              <FontLanguageToggle.Provider value={ChangeLanguage}>
                {children}
              </FontLanguageToggle.Provider>
            </FontLanguageContext.Provider>        
          </FontContext.Provider>
        </ThemeToggle.Provider>
    </ThemeContext.Provider>
  )
}



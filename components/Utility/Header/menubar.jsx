import { FontNavbar, IconImage, ThirdColor } from '@/components/ThemeComponent/ThemeComponent'
import { GetFontOpacity } from '@/useContext/FunctionComponent'
import { GetFontLanguage, GetFontLanguageFunction, GetFontTheme, ThemeContext, ThemeToggle } from '@/useContext/ThemeComponent'
import { Language, ThemeColorValue } from '@/value/GlobalValue'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

export function MenuBar({Icon, Description, functionHandle}) {
    const FontOpacity = GetFontTheme()
    
    const [hover, setHover] = useState(false)

    function hoverChange(){
      setHover(prev => !prev)
    }

  return <div className='w-full h-14 flex items-center mt-2.5 hover:bg-purpleMenu  transition:background-color duration-500 ease-in-out rounded-lg cursor-pointer' onMouseEnter={hoverChange} onMouseLeave={hoverChange} onClick={functionHandle}>
            <span className='min-w-16 h-full flex justify-center items-center'>
                  <IconImage FontImage={Icon}/>                
            </span>
        <FontNavbar className='min-w-36 font-bold transition:opacity duration-500 ease-in-out' Check={hover}>{Description}</FontNavbar>
    </div>
}

export function ToggleBar({Description}){
  const ToggleThemeFunction = useContext(ThemeToggle)
  const Status = useContext(ThemeContext)

    return <div className='w-full h-14 flex items-center mt-2.5 hover:bg-purpleMenu transition:background-color duration-500 ease-in-out rounded-lg cursor-pointer'>
      <span className='min-w-16 h-full flex justify-center items-center'>

      <Switch checked={Status === ThemeColorValue.Dark} onClick={ToggleThemeFunction}/>
        
      </span>
    <FontNavbar className='min-w-36 font-bold     transition:opacity duration-500 ease-in-out'>
      {Description}
    </FontNavbar>
    </div>
}

export function ToggleLanguageBar({Description}){
  const ToggleLanguageFunction = GetFontLanguageFunction()
  const Status = GetFontLanguage()

    return <div className='w-full h-14 flex items-center mt-2.5 hover:bg-purpleMenu transition:background-color duration-500 ease-in-out rounded-lg cursor-pointer'>
      <span className='min-w-16 h-full flex justify-center items-center'>

        <Switch checked={Status === Language.IDN} onClick={ToggleLanguageFunction}/>
        
      </span>
    <FontNavbar className='min-w-36 font-bold     transition:opacity duration-500 ease-in-out'>
      {Description}
    </FontNavbar>
    </div>
}


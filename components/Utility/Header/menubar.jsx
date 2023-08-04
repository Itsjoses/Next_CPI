import { FontNavbar, IconImage, ThirdColor } from '@/components/ThemeComponent/ThemeComponent'
import { GetFontOpacity } from '@/useContext/FunctionComponent'
import { GetFontTheme } from '@/useContext/ThemeComponent'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

export default function MenuBar({Icon, Description}) {
    const FontOpacity = GetFontTheme()
    console.log(FontOpacity);

  return (
    <div className='w-full h-14 flex items-center mt-2.5 hover:bg-purpleMenu transition:background-color duration-500 ease-in-out rounded-lg cursor-pointer'>
            <span className='min-w-16 h-full flex justify-center items-center'>
                  <IconImage FontImage={Icon}/>                
            </span>
        <FontNavbar className='min-w-16 font-bold transition:opacity duration-500 ease-in-out'>{Description}</FontNavbar>
    </div>
  )
}

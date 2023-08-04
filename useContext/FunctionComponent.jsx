import { FontOpacityValue } from '@/value/GlobalValue'
import React, { createContext, useContext, useState } from 'react'


export const FontOpacityFunction = createContext()
export const FontOpacityGetter = createContext()
//set

export function ChangeFontOpacity(){return useContext(FontOpacityFunction) }
//get
export function GetFontOpacity(){return useContext(FontOpacityGetter) }



export default function FunctionComponent({children}) {
    const [StateFontOpacity,setFontOpacity] = useState(FontOpacityValue.Off)

    function FontOpacity(){
        
        setFontOpacity(StateFontOpacity == FontOpacityValue.Off ? FontOpacityValue.On : FontOpacityValue.Off )
    }
 
  return (
    <FontOpacityFunction.Provider value={FontOpacity}>
        <FontOpacityGetter.Provider value={StateFontOpacity}>
            {children}
        </FontOpacityGetter.Provider>
    </FontOpacityFunction.Provider>
  )
}

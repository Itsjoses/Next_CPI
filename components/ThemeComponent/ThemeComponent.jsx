import { GetFontOpacity } from "@/useContext/FunctionComponent"
import { GetFontTheme, ThemeContext } from "@/useContext/ThemeComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect } from "react"

export function PrimaryColor({children, ...attr}){
    const ThemeColor = useContext(ThemeContext)
    return <div style={ThemeColor.Primary} {...attr}>
        {children}
    </div>
}

export function SecondaryColor({children, ...attr}){
    const ThemeColor = useContext(ThemeContext)
    return <div style={ThemeColor.Secondary} {...attr}>
        {children}
    </div>
}

export function ThirdColor({children, ...attr}){
    const ThemeColor = useContext(ThemeContext)
    return <div style={ThemeColor.Third} {...attr}>
        {children}
    </div>
}

export function IconImage({ FontImage,...attr}){
    const ThemeColor = useContext(ThemeContext)
    return <FontAwesomeIcon icon={FontImage} {...attr} style={ThemeColor.Icon}>
    </FontAwesomeIcon>
}

export function IconColor({children, ...attr}){
    const FontColor = GetFontTheme()
    return <div style={FontColor.Icon} {...attr}>{children}</div>
}

export function FontNavbar({children, Check,...attr}){
    const FontTheme = GetFontTheme()
    const FontOpacity = GetFontOpacity()

    const MergeObject = Check ? {...FontTheme.Hover, ...FontOpacity} : {...FontTheme.Primary, ...FontOpacity}
    return <div style={MergeObject} {...attr}> {children} </div>
}

export function FontColor({children, ...attr}){
    const FontColor = GetFontTheme()
    return <div style={FontColor.Primary}  {...attr}>{children}</div>
}



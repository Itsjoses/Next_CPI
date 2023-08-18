import { ThirdColor } from "@/components/ThemeComponent/ThemeComponent";

export function Card({children,...attr}){
    return <ThirdColor {...attr}>
        {children}
    </ThirdColor>
}
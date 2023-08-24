import { PrimaryColor, ThirdColor } from "@/components/ThemeComponent/ThemeComponent";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "@mui/material";
import { useState } from "react";

export function Card({children,...attr}){
    return <ThirdColor {...attr}>
        {children}
    </ThirdColor>
}

export function IndicatorCard(){

}

export function DimensionCard({name,total,id,}){
    const [toggle, setToggle] = useState(false)
    const handleToggle = () =>{
        setToggle(prev => !prev)
    }
    return <PrimaryColor className="w-full rounded-md flex px-5 py-3 flex-col " func={handleToggle}>
        <div className="w-full flex items-center">
            <div className="w-[80%] font-semibold">{name}</div>
            <div className="min-w-[10%]">
                <Chip label={total + " Indicator"} color="primary" />
            </div>
            <div className="min-w-[10%] flex justify-end ">
                <FontAwesomeIcon icon={faPlus} className="mx-2"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faPen} className="mx-2"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTrash} className="mx-2"></FontAwesomeIcon>
            </div>
        </div>
       
        {toggle && <div>
            <div className="py-2 w-full flex">
                <div className="w-[90%]">testing</div>
                <div className="w-[5%] flex justify-end">...</div>
            </div>
        </div>}

            
    </PrimaryColor>
}



import { faBars, faDoorOpen, faHome, faHomeLg, faHomeLgAlt, faHomeUser, faHouseMedicalCircleXmark, faLeftLong, faRightFromBracket, faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import styles from "@/styles/AdminHeader.module.scss"
import { GetFontLanguage, GetFontTheme, ThemeContext, ThemeToggle } from '@/useContext/ThemeComponent'
import { FontNavbar, IconColor, PrimaryColor, SecondaryColor, ThirdColor} from '../../ThemeComponent/ThemeComponent'
import { ChangeFontOpacity, GetFontOpacity } from '@/useContext/FunctionComponent'
import { Switch } from '@mui/material'
import { MenuBar, ToggleBar, ToggleLanguageBar } from './menubar'
import { GetUserContext } from '@/useContext/UserComponent'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
export default function SideBar() {

  const {FontOpacityon,FontOpacityoff} = ChangeFontOpacity()
  const router = useRouter()

  const FontLanguage = GetFontLanguage()
  const {user,setUser} = GetUserContext()
  const HandleLogout = async () =>{
    setUser(null);
    await axios.post("http://localhost:8000/api/auth/logout",{},{
      withCredentials: true,
      headers:{
        Authorization: `Bearer ${new Cookies().get("Authorization")}`
      }
      
    })
    router.push("/")
    toast.success("Logout Success!!")
  }

  return (
    <PrimaryColor className="w-24 hover:w-60 min-h-auto transition:w duration-500 px-4 shadow-custom hidden md:block " id="sidebar"
    onMouseEnter = {FontOpacityon}
    onMouseLeave = {FontOpacityoff}
    >
      {/* <div className='Logo w-full h-16 flex items-center' >
        <div className='min-w-16 h-full flex justify-center items-center'>
          <IconColor className='text-white font-black bg-black p-2.5 rounded-md text-lg'>CPI</IconColor>
        </div >
          
        <div className='min-w-36 leading-4'>

          <FontNavbar className='font-bold transition:all duration-500 ease-in-out' >Corruption</FontNavbar>
          <FontNavbar className='font-light transition:all duration-500 ease-in-out' >Perception Index</FontNavbar>
        </div>
      </div> */}
      <div className='menuBar h-full w-full py-1.5 flex flex-col justify-between'>
        
        <div className='menu'>
          <MenuBar 
          Path={"/Admin/"}
          Icon={faHome} 
          Description={FontLanguage.Home}
          /> 
          <MenuBar 
          Path={"/Admin/participant"}
          Icon={faHome} 
          Description={FontLanguage.Participant}
          /> 
          <MenuBar 
          Path={"/Admin/questionnaire"}
          Icon={faHome} 
          Description={FontLanguage.Questionnaire}
          /> 
          <MenuBar 
          Path={"/Admin/responses"}
          Icon={faHome} 
          Description={FontLanguage.Responses}
          /> 
          <MenuBar 
          Path={"/Admin/admin"}
          Icon={faHome} 
          Description={FontLanguage.Admin}
          /> 
          <MenuBar 
          Icon={faHome} 
          Description={FontLanguage.Admin}
          /> 
        </div>

        <div className='bottomMenu'>
          <ToggleLanguageBar Description={FontLanguage.Language}/>
          <ToggleBar Description={FontLanguage.DarkMode}/>
          <MenuBar 
          Icon={faDoorOpen} 
          Description={FontLanguage.Logout}
          functionHandle={HandleLogout}
          />
        </div>
      </div>
    </PrimaryColor>
  )
}

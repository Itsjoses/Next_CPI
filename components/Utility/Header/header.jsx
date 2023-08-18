import { faBars, faDoorOpen, faHome, faHomeLg, faHomeLgAlt, faHomeUser, faHouseMedicalCircleXmark, faLeftLong, faRightFromBracket, faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import styles from "@/styles/AdminHeader.module.scss"
import { GetFontLanguage, GetFontTheme, ThemeContext, ThemeToggle } from '@/useContext/ThemeComponent'
import { FontNavbar, IconColor, PrimaryColor, ThirdColor} from '../../ThemeComponent/ThemeComponent'
import { ChangeFontOpacity, GetFontOpacity } from '@/useContext/FunctionComponent'
import { Switch } from '@mui/material'
import { MenuBar, ToggleBar, ToggleLanguageBar } from './menubar'
import { GetUserContext } from '@/useContext/UserComponent'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
export default function Header() {

  const FontOpacityFunction = ChangeFontOpacity()
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
    <PrimaryColor className="w-24 hover:w-60 h-full transition:w duration-500 flex flex-col p-4 shadow-custom " id="sidebar"
    onMouseEnter = {FontOpacityFunction}
    onMouseLeave = {FontOpacityFunction}
    >
      <div className='Logo w-full h-16 flex items-center' >
        <div className='min-w-16 h-full flex justify-center items-center'>
          <IconColor className='text-white font-black bg-black p-2.5 rounded-md text-lg'>CPI</IconColor>
        </div >
          
        <div className='min-w-36 leading-4'>

          <FontNavbar className='font-bold transition:all duration-500 ease-in-out' >Corruption</FontNavbar>
          <FontNavbar className='font-light transition:all duration-500 ease-in-out' >Perception Index</FontNavbar>
        </div>
      </div>
      <div className='menuBar h-full w-full pt-8 flex flex-col justify-between'>
        
        <div className='menu'>
          <MenuBar 
          Icon={faHome} 
          Description={FontLanguage.Home}
          /> 
          <MenuBar 
          Icon={faHome} 
          Description={"Testing"}
          /> 
          <MenuBar 
          Icon={faHome} 
          Description={"Testing"}
          /> 
          <MenuBar 
          Icon={faHome} 
          Description={"Testing"}
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

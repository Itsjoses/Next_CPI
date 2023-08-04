import { faBars, faDoorOpen, faHome, faHomeLg, faHomeLgAlt, faHomeUser, faHouseMedicalCircleXmark, faLeftLong, faRightFromBracket, faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import styles from "@/styles/AdminHeader.module.scss"
import MenuBar from "@/components/Utility/Header/menubar"
import { ThemeContext, ThemeToggle } from '@/useContext/ThemeComponent'
import { FontNavbar, PrimaryColor, ThirdColor} from '../ThemeComponent/ThemeComponent'
import { ChangeFontOpacity, GetFontOpacity } from '@/useContext/FunctionComponent'
export default function Header() {

  const ToggleThemeFunction = useContext(ThemeToggle)
  const FontOpacityFunction = ChangeFontOpacity()
  const FontOpacity = GetFontOpacity()

  return (
    <PrimaryColor className="w-24 hover:w-60 h-full transition:w duration-500 flex flex-col p-4 shadow-custom" id="sidebar"
    onClick={ToggleThemeFunction}
    onMouseEnter = {FontOpacityFunction}
    onMouseLeave = {FontOpacityFunction}
    >
      <div className='Logo w-full h-16 flex overflow-hidden items-center' >
        <div className='min-w-16 h-full flex justify-center items-center'>
          <ThirdColor className='text-white font-black bg-black p-2.5 rounded-md text-lg'>CPI</ThirdColor>
        </div >
          
        <div className='min-w-36 leading-4'>
          <FontNavbar className='font-bold transition:all duration-500 ease-in-out' style={FontOpacity}>Corruption</FontNavbar>
          <FontNavbar className='font-light transition:all duration-500 ease-in-out' style={FontOpacity}>Perception Index</FontNavbar>
        </div>
      </div>
      <div className='menuBar h-full w-full pt-8 flex flex-col justify-between overflow-hidden'>
        
        <div className='menu'>
          <MenuBar 
          Icon={faHome} 
          Description={"Home"}
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
          <MenuBar 
          Icon={faDoorOpen} 
          Description={"Log Out"}
          />
        </div>
      </div>
    </PrimaryColor>
  )
}

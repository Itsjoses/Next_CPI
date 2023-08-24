import { FontColor, FontNavbar, IconColor, PrimaryColor, SecondaryColor } from '@/components/ThemeComponent/ThemeComponent'
import { faBars, faBurger, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IconHeader } from './menubar'

export default function Header() {
  return (
      <PrimaryColor className='Logo w-full h-20 shadow-lg drop-shadow-xl px-4 py-4 flex' >
        <div className='flex'>
          
        <div className='md:hidden items-center flex' >
            <FontAwesomeIcon icon={faBars} className='text-2xl mx-4'></FontAwesomeIcon>
        </div>
          <div className='flex items-center '>
              <div className='min-w-16 h-full flex justify-center items-center'>
              <IconColor className='text-white font-black bg-black p-2.5 rounded-md text-lg'>CPI</IconColor>
              </div >
              
              <div className='min-w-36 leading-4'>
              <FontColor className='font-bold transition:all duration-500 ease-in-out' >Corruption</FontColor>
              <FontColor className='font-light transition:all duration-500 ease-in-out' >Perception Index</FontColor>
              </div>
          </div>
        </div>
        <div className='Icon'>
        <FontAwesomeIcon icon={faGear} className='text-2xl mx-4'></FontAwesomeIcon>
        </div>

        
      </PrimaryColor>
  )
}

import { NavbarLayout, PrimaryColor } from '@/components/ThemeComponent/ThemeComponent'
import AdminTableComponent from '@/components/Utility/Admin/AdminTableComponent'
import { Card } from '@/components/Utility/Admin/HomeComponent'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

export default function admin() {

  return (
    <NavbarLayout>
        
        <div className='p-5 w-full h-screen overflow-scroll'>
            <div className='flex my-2'>
            <PrimaryColor className="flex w-auto rounded-md ">
              <FontAwesomeIcon icon={faBars} className='p-2 text-lg'/>
            </PrimaryColor>
            </div>

            <div className="Top-Title">
            <div className="Title text-4xl font-bold">
                <p>Admin Managements</p>
            </div>   
            </div>

            <Card className="w-full rounded-md my-4 p-4">
                <p className='text-1xl font-semibold'>Admins</p>
                <AdminTableComponent ></AdminTableComponent>
            </Card>
        </div>


    </NavbarLayout>
  )
}

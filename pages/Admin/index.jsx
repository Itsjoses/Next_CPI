import React from 'react'
import Header from '@/components/Utility/header'
import { SecondaryColor } from '@/components/ThemeComponent/ThemeComponent'
export default function Home() {
  return (
    <SecondaryColor className="flex w-full h-screen bg-red-200">
        <Header/>
    </SecondaryColor>
  )
}

import { NavbarLayout } from '@/components/ThemeComponent/ThemeComponent'
import { Card } from '@/components/Utility/Admin/HomeComponent'
import EnhancedTable from '@/components/Utility/Admin/TableComponent'
import React from 'react'

export default function participant() {
  return (
    <NavbarLayout>
        <div className='p-5 w-full h-screen overflow-scroll'>
            <div className="Top-Title my-6">
                <div className="Title text-4xl font-bold">
                    <p>Participant</p>
                </div>    
            </div>
            <div className='AllParticipant'>
                <Card className="w-full h-full rounded-md transition:w duration-500">
                    <EnhancedTable></EnhancedTable>
                </Card>
            </div>
        </div>

        
    </NavbarLayout>
  )
}

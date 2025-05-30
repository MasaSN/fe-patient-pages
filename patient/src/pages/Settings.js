import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import TopBar from '../dashboard/TopBar'
import Card from '../components/Card'
import SettingsConfig from '../components/SettingsConfig'
function Settings() {
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px_1fr] bg-blue-950">
        <Sidebar/>
        <div className=' bg-white rounded-lg pb-4 shadow h-[200vh]'>
          <TopBar/>
          <div className="p-6">
                <Card title="System Settings">
                    
                    <SettingsConfig/>
                    
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Settings

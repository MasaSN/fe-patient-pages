import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Dashboard from '../dashboard/Dashboard'

function Home() {
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px_1fr] bg-blue-950">
        <Sidebar/>
        <div className=' bg-white rounded-lg pb-4 shadow h-[200vh]'>
          <Dashboard/>
        </div>
    </div>
  )
}
export default Home;


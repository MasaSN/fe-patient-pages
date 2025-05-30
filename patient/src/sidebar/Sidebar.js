import React from 'react'
import AccountToggle from './AccountToggle'
import Search from './Search'
// import RouteSelect from './RouteSelect'
import  RoutePick  from './RoutePick'
// import RouteChose from './RouteChose'
import LowerToggle from './LowerToggle'
const Sidebar = () => {
  return (
    <div className=''>
      <div className="overflow-y-scroll sticky top-4 
      h-[calc(100vh-32px-48px)]">
        {/* main content */}
        <AccountToggle/>
        <Search/>
        <RoutePick/>
      </div>
      <LowerToggle/>
    </div>
  )
}

export default Sidebar

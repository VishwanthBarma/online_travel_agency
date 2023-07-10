import React from 'react'
import Widgets from './Widgets'
import AvailableTickets from './AvailableTickets'
import SoldTickets from './SoldTickets'

function AgencyDashboard() {
  return (
    <div className='flex flex-col space-y-5'>
        {/* Widgets */}
        <Widgets />
        <AvailableTickets />
        <SoldTickets />
    </div>
  )
}

export default AgencyDashboard
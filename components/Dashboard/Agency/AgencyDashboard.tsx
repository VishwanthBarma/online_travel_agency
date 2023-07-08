import React from 'react'
import Widgets from './Widgets'
import AvailableTickets from './AvailableTickets'

function AgencyDashboard() {
  return (
    <div className='flex flex-col space-y-5'>
        {/* Widgets */}
        <Widgets />
        <AvailableTickets />
    </div>
  )
}

export default AgencyDashboard
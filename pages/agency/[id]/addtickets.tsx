import React from 'react'

type ticket = {
  departFrom : {
    place : string,
    time : TimeRanges,
  },
  goingTo : {
    place : string,
    time : TimeRanges,
  },
  departureDate : Date,
}

export default function addtickets() {
  return (
    <div>addtickets</div>
  )
}

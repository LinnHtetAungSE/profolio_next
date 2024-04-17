import React from 'react'
const travelLightSpeedBg = "/travel_light_speed.mp4";

export default function StartupVideo() {
  return (
    <video autoPlay loop muted className='w-screen h-screen fixed top-0 left-0 object-cover'>
      <source src={travelLightSpeedBg} type='video/mp4'/>
    </video>
  )
}

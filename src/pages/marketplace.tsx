import PrivateRoute from '@/routes/PrivateRoute'
import React from 'react'

const AboutUs = () => {
  return (
    <PrivateRoute>
      <div>AboutUs</div>
    </PrivateRoute>
  )
}

export default AboutUs

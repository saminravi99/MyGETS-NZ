import PrivateRoute from '@/routes/PrivateRoute'
import React from 'react'

const Tenders = () => {
  return (
    <PrivateRoute>
      <div>Tenders</div>
    </PrivateRoute>
  )
}

export default Tenders

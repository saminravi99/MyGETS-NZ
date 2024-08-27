import Navbar from '@/views/Navbar/Navbar'
import PropTypes from 'prop-types'
import React from 'react'

PrivateLayout.propTypes = {
  children: PropTypes.node,
}
export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      {/* <Footer /> */}
    </>
  )
}

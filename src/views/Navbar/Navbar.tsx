import React from 'react'
import { Bot24Regular, Alert24Regular } from '@fluentui/react-icons'
import Logout from '../Logout/Logout'

const Navbar = () => {
  return (
    <>
      {/* Header Section */}
      <div className="w-full bg-blue-600">
        <div className="container mx-auto flex h-12 items-center justify-between">
          <div className="appHeaderLeft flex items-center pl-4">
            <h3 className="text-2xl font-extrabold text-white">MYGETS</h3>
          </div>
          <div className="appHeaderCenter flex h-8 w-72 items-center justify-center">
            {/* Your center content */}
          </div>
          <div className="appHeaderRight flex items-center gap-2 pr-4">
            <Bot24Regular aria-label="A Bot icon" className="text-white" />
            <Alert24Regular aria-label="An Alert icon" className="text-white" />
            {/* <UserAvatar /> */}
            <Logout />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

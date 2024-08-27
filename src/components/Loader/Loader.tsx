import React from 'react'

const Loader = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
        <div className="h-32 w-32 animate-spin rounded-full border-b-4 border-t-4 border-white"></div>
      </div>
    </>
  )
}

export default Loader

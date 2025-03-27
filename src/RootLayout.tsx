import React from 'react'
import { Outlet } from 'react-router-dom'
import { Topbar, LeftSidebar, BottomBar } from './components/shared'

const RootLayout = () => {
  return (
    <div className='w-full md:flex'>
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <BottomBar />
    </div>
  )
}

export default RootLayout
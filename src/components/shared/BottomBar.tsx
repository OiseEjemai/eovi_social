import { bottombarLinks } from '@/constants'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BottomBar = () => {
      const { pathname } = useLocation()
  
  return (
    <section className='z-50 flex justify-between items-center w-full sticky bottom-0 rounded-t-[20px] bg-dark-2 px-5 py-4 md:hidden'>
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route
        
        return (
          <Link key={`bottombar - ${link.label}`} to={link.route} className={`${isActive && "rounded-[10px] bg-primary-500"} flex justify-center items-center flex-col gap-1 p-2 transition`}>
            <img src={link.image} alt={link.label} width={16} height={16} className='invert-white' />

            <p className='text-light-2 text-sm'>{link.label}</p>
          </Link>
        )
      })}
    </section>
  )
}

export default BottomBar
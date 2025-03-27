import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { sidebarLinks } from '@/constants'
const LeftSidebar = () => {
    const { pathname } = useLocation()
    return (
        <nav className='hidden md:flex px-6 py-10 flex-col justify-between min-w-[270px] border-r'>
            <div className='flex flex-col gap-6'>
                <Link to="/" className='flex gap-3 items-center'>
                    <img src="/assets/Eovi_logo_on_a_black_background-removebg-preview.png" className='w-20 h-20' alt="" />
                </Link>

                <ul className='flex flex-col gap-5'>
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.route
                        const isNotis = link.label === "Notifications"
                        
                        return (
                            <li key={`sidebar - ${link.label}`} className={`rounded-lg hover:bg-primary-500 transition text-[16px] font-medium leading-[140%] group ${isActive && "bg-primary-500"}`}>
                                <NavLink to={link.route} className="flex gap-4 items-center p-4">
                                    <img src={link.image} alt={link.label} className='group-hover:invert-white invert-white' />
                                    {/* {link.label} */}
                                    {isNotis ? `Notifications -  ${200}` : link.label}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>

                <Link to="/profile" className='cursor-pointer flex flex-col items-center px-4 py-10'>
                    <img src="/assets/images/joker.jpeg" alt="profile" className='w-8 h-8 rounded-full' />
                    <p className='text-sm text-gray-500 cursor-pointer hover:text-white transition'>Kinamdeast</p>
                </Link>
            </div>
        </nav>
    )
}

export default LeftSidebar
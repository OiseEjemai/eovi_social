import React from 'react'
import { Link } from 'react-router-dom'
// import { Badge } from "@/components/ui/badge"

const Topbar = () => {
    return (
        <div className='sticky top-0 z-50 md:hidden bg-dark-2 w-full'>
            <div className='flex justify-between items-center py-4 px-5'>
                <div className="logo items-center justify-center">
                    <img src="/assets/Eovi_logo_on_a_black_background-removebg-preview.png" alt="" width={90} height={90} />
                </div>

                <div className='flex flex-row gap-6'>
                    <Link to="/notifications" className='flex flex-col items-center cursor-pointer'>
                        {/* <Badge variant="outline" className='bg-rose-500 border-red rounded-full'>200</Badge> */}
                        <img src="/assets/icons/saved.svg" alt="notifications" className='h-8 w-8' />
                        <p className='text-sm text-center text-gray-400 hover:text-white'>Notifications</p>
                    </Link>

                    <Link to="/profile" className='flex flex-col items-center cursor-pointer'>
                        <img src="/assets/images/joker.jpeg" className='h-8 w-8 rounded-full' alt="" />
                        <p className='text-sm text-center text-gray-400 hover:text-white'>Kinamdeast</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Topbar
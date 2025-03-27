import React from 'react'
import { Link } from 'react-router-dom'

const Saves = () => {
  return (
    <div className='saved-container'>
      <div className='flex gap-2 w-full max-w-5xl'>
        <img src="/assets/icons/save.svg" alt="saves" className='invert-white' width={36} height={36} />

        <h2 className='h3-bold md:h2-bold text-left w-full'>Saved Posts</h2>
      </div>

      <ul className='w-full flex justify-center max-w-5xl gap-9'>
        {/* Post container */}

        <ul className="grid-container">
          <li className='relative min-w-80 h-80'>
            <Link to={`/posts`} className='grid-post_link'>
              <img src="/assets/images/jason.jpg" alt="post" className='h-full w-full object-cover' />
            </Link>

            <div className='grid-post_user'>
              <div className='flex items-center justify-start gap-2 flex-1'>
                <img src="/assets/icons/profile-placeholder.svg" alt="creator" className='w-8 h-8 rounded-full' />
                <Link to={`/profile`} className='line-clamp-1 text-[#fb923c] hover:underline cursor-pointer'>SlingTrvpp</Link>
              </div>
              <div className='flex flex-col z-20'>
                <div className="flex flex-row gap-4">
                  <div className="flex mr-5 justify-center items-center">
                    <img src="/assets/icons/liked.svg" alt="like" width={25} height={25} className='cursor-pointer' />
                    <p className='text-[10px] font-medium leading-[140%] lg:text-[15px]'>120M+</p>
                  </div>

                  <div className="flex gap-2">
                    <img src="/assets/icons/saved.svg" alt="save" className="cursor-pointer" width={30} height={30} />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        {/* End of Post Container */}
      </ul>
    </div>
  )
}

export default Saves
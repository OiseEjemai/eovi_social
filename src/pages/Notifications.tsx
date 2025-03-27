import React from 'react'

const Notifications = () => {
  return (
    <div className='flex flex-1'>
      <div className='flex flex-col flex-1 gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14'>
        <div className='max-w-screen-sm flex flex-col items-center w-full gap-6 md:gap-9'>
          <h2 className='h3-bold md:h2-bold font-mono text-left w-full underline'>Notifications</h2>
        </div>
        <div className='flex flex-col gap-8'>
          <div className='notification-div'>
            <div className='flex flex-row items-center gap-3 p-3'>
            <img src="/assets/images/jason.jpg" className='h-9 w-9 rounded-full' alt="" />
              <div className='flex flex-col'>
                <div className='flex flex-row gap-1'>
                  <h1 className='text-center flex flex-row text-[#fb923c] hover:underline items-start'>SlingTrvpp <img src='/assets/icons/checkmark.svg' alt='verified' className='invert w-[1.1rem]' /></h1>
                  <h3 className='text-center'>followed you</h3>
                </div>
                <h3 className='text-sm text-gray-400'>19/03/25</h3>
                <h3 className='text-sm text-gray-400'>21:00</h3>
              </div>
            </div>
            <img src="/assets/icons/delete.svg" className='px-4 py-5 w-[4.5rem] h-[4.5rem] cursor-pointer' alt="delete" />
          </div>
          <div className='notification-div'>
            <div className='flex flex-row items-center gap-3 p-3'>
            <img src="/assets/images/jason.jpg" className='h-9 w-9 rounded-full' alt="" />
              <div className='flex flex-col'>
                <div className='flex flex-row gap-1'>
                  <h1 className='text-center flex flex-row text-[#fb923c] hover:underline items-start'>SlingTrvpp <img src='/assets/icons/checkmark.svg' alt='verified' className='invert w-[1.1rem]' /></h1>
                  <h3 className='text-center'>liked your <span className='underline cursor-pointer'>post</span></h3>
                </div>
                <h3 className='text-sm text-gray-400'>19/03/25</h3>
                <h3 className='text-sm text-gray-400'>21:00</h3>
              </div>
            </div>
            <img src="/assets/icons/delete.svg" className='px-4 py-5 w-[4.5rem] h-[4.5rem] cursor-pointer' alt="delete" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications
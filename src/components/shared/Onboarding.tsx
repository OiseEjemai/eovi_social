import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui'

const Onboarding = () => {
  const navigate = useNavigate()
  const continueToHome = () => {
    navigate('/onboarding-user')
  }
  return (
    <div className='flex flex-1'>
      <div className='flex flex-col justify-between flex-1'>
        <h1 className='text-[50px] font-bold leading-[140%] tracking-tighter md:h2-bold font-mono text-center w-full items-center justify-center'>Eovi</h1>

        <div className='bottom-0 flex items-center justify-center flex-col gap-9 py-5 px-4'>
          <h1>By continuing, you agree to our <Link to="/terms-and-conditions" className='underline hover:text-blue-700 transition'>Terms and conditions</Link>.</h1>
          <Button className='shad-button_primary md:w-[9rem] w-full cursor-pointer' onClick={() => continueToHome()}>Continue</Button>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
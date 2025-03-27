import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate("/onboarding")
    }, 5000);
    return (
        <div className='flex flex-1 items-center justify-between flex-col'>
            <h1 className='text-[40px] font-bold leading-[140%] tracking-tighter md:h2-bold font-mono text-center w-full items-center justify-center'>Eovi</h1>
            <div className='flex flex-col items-center justify-center max-h-screen-sm h-full'>
                <img src='/assets/icons/loader.svg' alt='loading' className='items-end justify-end bottom-0' />
            </div>

            <h1 className='py-10 px-5 animate-tip'>Eovi is an app where users can share their thoughts through posts. Users are also given the ability to like a post, follow a user, unfollow, save a post, comment on a post and so much more.</h1>
        </div>
    )
}

export default LoadingPage
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Preparation = () => {
    const navigate = useNavigate()
    const [fetchMessage, setFetchMessage] = useState('Fetching user data')
    useEffect(() => {
        const fetchUser = document.querySelector('#fetching')

        setTimeout(() => {
            fetchUser?.classList.remove("animate-tip")

            setFetchMessage("✅ User data fetched")

            setTimeout(() => {
                setFetchMessage('Redirecting to homepage...')
                navigate("/profile")
            }, 2000);
        }, 5000);

    })

    return (
        <div className='flex flex-1 items-center justify-center flex-col gap-4'>
            <img src="/assets/icons/loader.svg" alt="" />
            <div>
                <h1 className='animate-tip' id='fetching'>{fetchMessage}</h1>
            </div>
        </div>
    )
}

export default Preparation
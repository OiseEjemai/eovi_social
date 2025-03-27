import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ userData, children }: any) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!userData?.isOnboarded) {
            navigate('/onboarding-user')
        }
    }, [userData, navigate])

    return userData?.isOnboarded ? children : null
}

export default ProtectedRoute
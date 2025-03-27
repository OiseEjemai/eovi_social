import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"
import { Home, Profile, Saves, Notifications, Create, Search } from './pages'
import RootLayout from './RootLayout'
import './globals.css'
import Onboarding from './components/shared/Onboarding'
import LoadingPage from './components/shared/LoadingPage'
import Preparation from './components/shared/Preparation'
import OnboardingUser from './components/shared/OnboardingUser'
import NotTg from './components/shared/NotTg'
import { databases } from './lib/appwrite/appwrite'
import { Query } from 'appwrite'
import ProtectedRoute from './components/shared/ProtectedRoute'
import Error from './components/shared/Error'

const App = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState<any | null>(null)
    const [ischeckind, setIsChecking] = useState(true)
    useEffect(() => {
        const checkOnboardingStatus = async () => {
            try {
                const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user
                if (!tgUser) {
                    navigate('/not-tg')
                    return
                }
                if (!tgUser?.id) {
                    console.error('Telegram user data not available');
                    navigate('/error');
                    return;
                }

                useEffect(() => {
                    if (window.Telegram?.WebApp) {
                      window.Telegram.WebApp.expand(); // Expands the app
                      console.log("Telegram WebApp initialized", window.Telegram.WebApp);
                    } else {
                      console.error("Telegram WebApp not found!");
                    }
                  }, []);

                // Check if user exists in Appwrite
                const existingUser = await databases.listDocuments(
                    import.meta.env.VITE_APPWRITE_DATABASE_ID,
                    import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
                    [Query.equal('TelegramID',  tgUser.id.toString())]
                )

                if (existingUser.documents.length > 0) {
                    const userDoc = existingUser.documents[0]
                    setUserData(userDoc)

                    if (!userDoc.isOnboarded) {
                        navigate('/onboardiing-user')
                    } else {
                        navigate('/')
                    }
                } else {
                    navigate('/onboarding-user')
                }
            } catch (error) {
                console.error('Error checking user:', error)
                navigate('/error')
            } finally {
                setIsChecking(false)
            }
        }

        checkOnboardingStatus()
    }, [navigate])
    return (
        <div className='flex h-screen'>
            <Routes>
                <Route element={<ProtectedRoute userData={userData} />}>
                    <Route element={<RootLayout />}>
                        <Route path='/' element={<Home />} />
                        {/* <Route path='/explore' element={<Explore />} /> */}
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/saves' element={<Saves />} />
                        <Route path='/notifications' element={<Notifications />} />
                        <Route path='/create-post' element={<Create />} />
                        <Route path='/search' element={<Search />} />
                    </Route>
                </Route>
                <Route path='/onboarding' element={<Onboarding />} />
                <Route path='/onboarding-user' element={<OnboardingUser />} />
                <Route path='/not-tg' element={<NotTg />} />
                <Route path='/preparation' element={<Preparation />} />
                <Route path='/error' element={<Error />} />
            </Routes>
        </div>
    )
}

export default App
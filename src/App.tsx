import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Home, Profile, Saves, Notifications, Create, Search } from './pages'
import RootLayout from './RootLayout'
import './globals.css'
import Onboarding from './components/shared/Onboarding'
import LoadingPage from './components/shared/LoadingPage'
import Preparation from './components/shared/Preparation'
import UserBio from './components/shared/UserBio'

const App = () => {
    return (
        <div className='flex h-screen'>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/explore' element={<Explore />} /> */}
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/saves' element={<Saves />} />
                    <Route path='/notifications' element={<Notifications />} />
                    <Route path='/create-post' element={<Create />} />
                    <Route path='/search' element={<Search />} />
                </Route>
                <Route path='/onboarding' element={<Onboarding />} />
                <Route path='/onboarding-user' element={<UserBio />} />
                <Route path='/loading' element={<LoadingPage />} />
                <Route path='/preparation' element={<Preparation />} />
            </Routes>
        </div>
    )
}

export default App
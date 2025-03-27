import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex flex-1'>
            <div className='flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14'>
                <div className='max-w-screen-sm flex flex-col items-center w-full gap-6 md:gap-9'>
                    <h2 className='h3-bold md:h2-bold font-mono text-left w-full'>Home</h2>

                    <ul className='flex flex-col flex-1 gap-9 w-full'>
                        <li className='flex justify-center w-full'>
                            <div className='bg-dark-2 rounded-3xl border border-dark-4 p-5 lg:p-7 w-full flex-wrap max-w-screen-sm'>
                                <div className="flex-between">
                                    <div className='flex items-center gap-3'>
                                        <Link to={`/profile`}>
                                            <img src="/assets/images/jason.jpg" alt="profile" className='w-12 lg:h-12 rounded-full' />
                                        </Link>

                                        <div className="flex flex-col">
                                            <Link to={`/profile`} className='flex flex-row items-start text-[#e11d48] base-medium lg:body-bold hover:underline'>SlingTrvpp <img src="/assets/icons/checkmark.svg" className='invert w-[1.1rem]' alt="verified" /></Link>
                                            <div className='flex-center gap-2 text-light-3'>
                                                <p className='subtle-semibold lg:small-regular'>
                                                    Port Harcourt, Nigeria
                                                </p>
                                                •
                                                <p className='subtle-semibold lg:small-regular'>
                                                    20/03/25
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to={`/update-post`}>
                                        <img src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
                                    </Link>
                                </div>

                                <Link to={`/posts`}>
                                    <img src="/assets/images/jason.jpg" alt="post image" className='h-64 xs:h-[400px] lg:h-[450px] w-full rounded-[24px] object-cover mb-5 mt-8' />
                                </Link>

                                <div className='flex flex-col z-20'>
                                    <div className='flex flex-row justify-start items-start gap-4'>
                                        <div className='flex gap-2 mr-5 items-center'>
                                            <img src="/assets/icons/like.svg" alt="like" width={30} height={30} className='cursor-pointer' />
                                            <p className='text-[14px] font-medium leading-[140%] lg:text-[20px] text-center items-center'>2M+</p>
                                        </div>

                                        <div className='flex gap-2 items-center'>
                                            <img src="/assets/icons/saved.svg" alt="save" width={30} height={30} className='cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
 
                                <div className='small-medium lg:base-medium py-5'>
                                    <div>
                                        <p><Link to={`/profile`} className='text-[#e11d48] pr-3 hover:underline underline md:no-underline'>slingtrvpp</Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas rem quia alias quam nihil culpa a modi, animi, molestias, laborum repellendus sit minima unde reiciendis perspiciatis assumenda natus voluptates ad nesciunt non ipsum voluptatem itaque quas neque. Quae, quasi natus. Autem non, voluptates animi eaque culpa totam consectetur saepe doloribus.</p>
                                        <p className='subtle-medium'></p>
                                    </div>
                                    <ul className='flex gap-1 mt-2'>
                                        <li className='text-light-3 small-regular'>#slingtrvpp </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
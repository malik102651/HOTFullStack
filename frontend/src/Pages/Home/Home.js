import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import home_page_img from '../../Images/home_page.png'
import Navbar from '../../Components/Navbar/Navbar'
import Schedule from '../../Components/Schedule/Schedule'
import RegisterCourses from '../../Components/RegisterCourses/RegisterCourses'
import CoursesInProgress from '../../Components/CoursesInProgress/CoursesInProgress'
import TodayClasses from '../../Components/TodayClasses/TodayClasses'
import CompleteClasses from '../../Components/CompleteClasses/CompleteClasses'

function Home() {
    const [MySchedule, setMySchedule] = useState(false)
    const [ScreenName, setScreenName] = useState()
    const navigate = useNavigate();
    console.log(ScreenName)

    return (
        <div>
            <div className='h-screen border w-full flex'>
                <aside className="w-64 h-full" aria-label="Sidebar">
                    <div className="overflow-y-auto h-full py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 border">
                        <div onClick={()=>setScreenName('')} className="flex items-center pl-2.5 mb-5 cursor-pointer">
                            <iconify-icon width="30" height="30" icon="fa6-solid:cubes"></iconify-icon>
                            <span className="self-center ml-4 text-xl font-semibold whitespace-nowrap dark:text-white">House of Tutor</span>
                        </div>
                        <ul className="space-y-2 ">
                            <li>
                                <div onClick={() => setScreenName("mySchedule")} className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <iconify-icon width='20' height='20' icon="uil:schedule"></iconify-icon>
                                    <span className="ml-3">My Schedules</span>
                                </div>
                            </li>
                            <li>
                                <div onClick={() => setScreenName("RegisterCourses")} className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <iconify-icon width='20' height='20' icon="healthicons:register-book-outline"></iconify-icon>
                                    <span className="flex-1 ml-3 whitespace-nowrap">My Courses</span>
                                </div>
                            </li>
                            <li>
                                <div onClick={() => setScreenName("CoursesInProgress")} className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <iconify-icon width='20' height='20' icon="emojione-monotone:books"></iconify-icon>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Courses in Progress</span>

                                </div>
                            </li>
                            <li>
                                <div onClick={() => setScreenName("TodayClasses")} className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <iconify-icon width='20' height='20' icon="healthicons:i-training-class"></iconify-icon>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Today Classes</span>
                                </div>
                            </li>
                            <li>
                                <div onClick={() => setScreenName("CompleteCourses")} className="flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <iconify-icon width='20' height='20' icon="carbon:task-complete"></iconify-icon>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Complete Courses</span>
                                </div>
                            </li>

                        </ul>
                    </div>
                </aside>
                <div className='w-full h-full '>
                    <Navbar />
                    {ScreenName ?
                        ScreenName === "mySchedule" ? <Schedule /> : ScreenName === "RegisterCourses" ? <RegisterCourses /> : ScreenName === "CoursesInProgress" ? <CoursesInProgress /> : ScreenName === "TodayClasses" ? <TodayClasses /> : ScreenName === "CompleteCourses" ? <CompleteClasses /> : ""
                        :
                        <div className='border flex justify-center items-center h-[91%]'>
                            <img width="50%" height="50%" src={home_page_img} alt="image" />
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default Home
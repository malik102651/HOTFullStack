import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { logout } from '../../actions/userActions'
import profile from '../../Images/profile.jpg'

function Navbar() {
    const [Menu, setMenu] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const logoutHandler = () => {
       dispatch(logout)
       console.log("logut") 
       //window.location.reload();
       navigate('/login')
       
    }
    return (
        <div className=' border bg-gray-50 h-[9%]'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <nav className=" sm:px-4 py-3 rounded dark:bg-gray-900 ">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <div className="flex items-center">
                            <iconify-icon width="30" height="30" icon="fa6-solid:cubes"></iconify-icon>
                            <span className="self-center ml-2 text-xl font-semibold whitespace-nowrap dark:text-white">House of Tutor</span>
                        </div>
                        <div className="flex items-center md:order-2 relative">
                            <button onClick={() => setMenu(!Menu)} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src={profile} alt="user photo" />
                            </button>

                            <div className={!Menu ? "absolute origin-top-right top-10 right-0 z-30 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" : "hidden"}>
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">Malik Naseer</span>
                                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">malik@gmail.com</span>
                                </div>
                                <ul className="py-1" aria-labelledby="user-menu-button">

                                    <li>
                                        <div onClick={()=>{logoutHandler()}} className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</div>
                                    </li>
                                </ul>
                            </div>
                            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
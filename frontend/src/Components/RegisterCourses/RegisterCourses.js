import React, { useState } from 'react'
import { data } from '../Config/Config'

function RegisterCourses() {

  const [Course, setCourse] = useState([])
  const [showMenu,setShowMenu]=useState(false)



  const addCourse = (name, code) => {
    console.log(name, code)
    setCourse([...Course, { name: name, Ccode: code }])
  }

  if (Course.length > 0 && Course.length < 2) {
    console.log(Course)
  } else {
    console.log("You can't select multiple courses please select only one course because you are eligible for only one course")
  }

  return (
    <div className='flex flex-col justify-center items-center w-[100%] '>
      <div className='p-5'>
        <p className='font-medium text-2xl'>
          Courses List
        </p>
      </div>
      <ul className="w-[50%] divide-y divide-gray-200 dark:divide-gray-700 mt-5 ml-5">
        {data.books.map((item, index) => {
          return (
            <li key={index} className="pt-3 pb-3 ">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <iconify-icon width="50" icon="noto:blue-book"></iconify-icon>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-lg text-gray-900 truncate dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {item.code}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <button type="button" onClick={() => { addCourse(item.name, item.code) }} className=" text-white bg-[#252121] font-medium rounded-lg text-sm px-3 py-2 text-center ">ADD</button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>



      <button onClick={()=>setShowMenu(true)} data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Toggle modal
      </button>

      <div id="popup-modal" tabindex="-1" class={showMenu?"fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full":"hidden"}>
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button"  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
            
            <div className="p-6 text-center">
              <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
              <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                Yes, I'm sure
              </button>
              <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>

          </div>
        </div>
      </div>



    </div>
  )
}

export default RegisterCourses
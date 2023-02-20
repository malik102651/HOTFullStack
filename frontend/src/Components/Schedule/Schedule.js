import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { schedule } from '../../actions/AppActions'
import { data as Config, data } from '../Config/Config'

function Schedule() {

  const [Schedule, setSchedule] = useState([])
  const dispatch = useDispatch()

  // const [ScheduleTime, setScheduleTime] = useState([])
  // const [ScheduleDay, setScheduleDay] = useState([])
  // const [items, setItems] = useState([])

  const chnageHandler = async (e, day, hour) => {
   
    setSchedule([...Schedule, { day: day, hour: hour }])

  }
  console.log(Schedule)
  

  const submitSchedule = () =>{
    if (Schedule.length > 0) {
      console.log(Schedule)
      dispatch(schedule(Schedule))
    }else{
      console.log("please check the checkboxes")
    }
  }

 

  return (


    <div className="overflow-x-auto relative p-4">
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Hours/Days
            </th>
            {data.days.map((item, index) => {
              return (
                <th key={index} scope="col" className="py-3 px-6">
                  {item.day}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.time.map((item, sub_index) => {
            return (
              <>
                <tr key={sub_index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.hour}
                  </th>
                  {data.days.map((sub_item, sub_child_index) => {
                    //console.log(sub_item.day)
                    return (

                      <td key={sub_child_index} className="py-4 px-6">
                        <label className="inline-flex items-center">
                          <input type="checkbox" onChange={(e) => chnageHandler(e, sub_item.day, item.hour)} className="form-checkbox text-gray-600" />
                        </label>
                      </td>
                    )
                  })}
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
      <div className='flex justify-center mt-5'>
        <button type="button" onClick={()=>{submitSchedule()}} className=" text-white bg-[#252121] font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
      </div>
    </div>


  )
}

export default Schedule
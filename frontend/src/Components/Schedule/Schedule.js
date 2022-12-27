import React, { useEffect, useState } from 'react'
import { data as Config, data } from '../Config/Config'

function Schedule() {

  const [ScheduleTime, setScheduleTime] = useState([])
  const [ScheduleDay, setScheduleDay] = useState([])
  const [items, setItems] = useState([])
  

  const storeValues = () => {
    let checkboxValues = []

    data.days.map((item) => {
      console.log(item)
      checkboxValues.push({ day: item.day, checked: false })
    })
    setItems(checkboxValues)
  }
  useEffect(() => {
    storeValues()
  }, [])
  console.log(items)

  const chnageHandler = (e, index) => {
    console.log(e.target.checked, index)
    // setScheduleTime([...ScheduleTime,])
    if (e.target.checked) {
      items[index].checked = e.target.checked
      setItems([...items])
    } else {
      items[index].checked = e.target.checked
      setItems([...items])
    }

  }
  console.log(ScheduleTime)

  return (


    <div class="overflow-x-auto relative p-4">
      <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Hours/Days
            </th>
            {data.days.map((item) => {
              return (
                <th scope="col" class="py-3 px-6">
                  {item.day}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.time.map((item) => {
            return (
              <>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.hour}
                  </th>
                  {items.map((sub_item, index) => {
                    //console.log(sub_item.day)
                    return (

                      <td class="py-4 px-6">
                        <label class="inline-flex items-center ">
                          <input type="checkbox" checked={sub_item.checked}  onChange={(e) => chnageHandler(e, index)} class="form-checkbox text-gray-600" />
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
    </div>


  )
}

export default Schedule
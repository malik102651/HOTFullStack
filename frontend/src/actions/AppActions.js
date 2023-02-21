import axios from "axios"
import { SCHEDULE, SCHEDULE_ERROR } from "../constants/AppConstants"


export const schedule = (schedule) => async (dispatch,getState)=>{
    try {

        console.log(schedule)

        const config={
            headers:{
                "Content-type": "application/json"
            }
        }

        const {data}=await axios.post("http://localhost:3001/api/app/schedule",{schedule},config)

         dispatch({type: SCHEDULE,payload: data})
        
    } catch (error) {
        dispatch({type: SCHEDULE_ERROR,payload: error})
    }
}
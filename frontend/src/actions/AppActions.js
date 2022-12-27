import { SCHEDULE_CHECK, SCHEDULE_ERROR } from "../constants/AppConstants"


export const schedule = () => async (dispatch,getState)=>{
    try {

        // dispatch({type: SCHEDULE_CHECK,payload: data})
        
    } catch (error) {
        dispatch({type: SCHEDULE_ERROR,payload: error})
    }
}
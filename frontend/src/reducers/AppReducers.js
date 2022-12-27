import { SCHEDULE_CHECK, SCHEDULE_ERROR } from "../constants/AppConstants";




export const ScheduleReducer = (state = {}, action) => {
    switch (action.type) {
        case SCHEDULE_CHECK:
            return { schedule: action.payload };
        case SCHEDULE_ERROR:
            return {error: action.payload};
        default:
            return state;
    }
}
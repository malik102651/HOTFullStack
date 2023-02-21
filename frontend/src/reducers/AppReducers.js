import { schedule } from "../actions/AppActions";
import { SCHEDULE, SCHEDULE_ERROR } from "../constants/AppConstants";




export const ScheduleReducer = (state = {}, action) => {
    switch (action.type) {
        case SCHEDULE:
            return { schedule: action.payload };
        case SCHEDULE_ERROR:
            return {error: action.payload};
        default:
            return state;
    }
}
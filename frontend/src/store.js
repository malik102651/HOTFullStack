import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducers';
import { ScheduleReducer } from './reducers/AppReducers';

const reducer=combineReducers({
    //this will contain our reducers
    userLogin: userLoginReducer,
    schedule_data: ScheduleReducer,

});

const initialState={

};

const middleware=[thunk];

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

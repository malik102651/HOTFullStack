import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisteredReducer } from './reducers/userReducers';
import { ScheduleReducer } from './reducers/AppReducers';

const reducer = combineReducers({
    //this will contain our reducers
    userRegister: userRegisteredReducer, 
    userLogin: userLoginReducer,
    schedule_data: ScheduleReducer,

});

//const userInfoFromStorage = localStorage.getItem("UserToken") ? localStorage.getItem("UserToken") : null;


const initialState = {
     //userToken: userInfoFromStorage
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

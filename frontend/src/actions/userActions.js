import { useState } from "react";
import { useSelector } from "react-redux";
import axio from 'axios'
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_REGISTERED_REQUEST, USER_REGISTERED_SUCCESS, USER_REGISTERED_FAIL } from "../constants/userConstants";
import axios from "axios";

export const login = (email, passowrd) => async (dispatch, getState) => {

    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = {
           headers: {
            "Content-type": "application/json"
           },

        }
        const {data}= await axios.post(
            'http://localhost:3001/api/users/login',
            {email,passowrd},config
            )

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

        console.log(data)
        // const {
        //     userLogin: {userInfo},
        // }=getState();

        localStorage.setItem("UserToken",data.token);

    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error })
    }
}

export const logout = async (dispatch) => {
    // localStorage.removeItem('password')
    localStorage.removeItem('UserToken')
    dispatch({ type: USER_LOGOUT })
}

export const registered = (name, email, password) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_REGISTERED_REQUEST });
        const config = {
            headers: {
                "Content-type": "application/json"
            },
        };
        const { data } = await axios.post(
            "http://localhost:3001/api/users",
            { name, email, password },
            config
        );
        dispatch({type: USER_REGISTERED_SUCCESS,payload: data})
        dispatch({type: USER_LOGIN_SUCCESS,payload: data})
        localStorage.setItem("UserToken",data.token);

    } catch (error) {
        dispatch({type: USER_REGISTERED_FAIL,payload: error})

    }
}
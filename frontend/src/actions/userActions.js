import { useState } from "react";
import { useSelector } from "react-redux";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from "../constants/userConstants";

export const login = (email, passowrd) => async (dispatch, getState) => {

    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        dispatch({ type: USER_LOGIN_SUCCESS, email: email, passowrd: passowrd })

    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error })
    }
}

export const logout = async (dispatch) => {
    localStorage.removeItem('password')
    dispatch({ type: USER_LOGOUT })
}
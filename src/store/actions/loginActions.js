import axios from "axios"
import { LOGIN_SUCCESS } from "./actionTypes";
import { api } from "../../components/api/api";

const loginSuccess = (token) => {
    return {
        type : LOGIN_SUCCESS,
        payload : token
    }
}
export const login = (username,password) => {
    return async dispatch => {
       await axios.post(`${api}/auth/employee/login`,
        {
            username,
            password
        }).then(res=>{
            console.log(res.data)
            dispatch(loginSuccess(res.data.accessToken))
        }).catch(err=>{
            console.log(err)
        })
    }
}
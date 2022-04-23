import axios from "axios"
import { api } from "../../components/api/api"
import { CREATE_CUSTOMER, GET_CUSTOMERS } from "./actionTypes"

const getCustomersSuccess = (customers) => {
    return {
        type : GET_CUSTOMERS,
        payload : customers
    }
}
const createCustomerSuccess = (customer) => {
    return {
        type : CREATE_CUSTOMER,
        payload : customer
    }
}
export const createCustomer = (obj,token) => {
    return dispatch => {
        axios.post (`${api}/customers`,
        obj,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }
        ).then(res=>{
            dispatch(createCustomerSuccess(res.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}
export const getCustomers = (token) => {
    return dispatch => {
        axios.get(`${api}/customers`,
        {
            headers:{
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(getCustomersSuccess(res.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}

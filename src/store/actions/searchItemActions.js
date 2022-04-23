import { FIND_ITEMS, FIND_ITEMS_BY_SKU, GET_ITEM_BY_ID } from "./actionTypes"
import { api } from "../../components/api/api"
import axios from "axios"
const findItemsSuccess = (items) => {
    return {
        type : FIND_ITEMS,
        payload : items
    }
}
const findItemBySkuSuccess = (items) => {
    return {
        type : FIND_ITEMS_BY_SKU,
        payload : items
    }
}
const getItemByIdSuccess = (item) => {
    return {
        type : GET_ITEM_BY_ID,
        payload : item
    }
}
export const findItems = (token,keyword) => {
    return dispatch => {
        axios.post(`${api}/items/findItem`,
        {
            keyword
        },
        {
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            console.log(res.data);
            dispatch(findItemsSuccess(res.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}
export const findItemBySku = (sku,token) => {
    return dispatch => {
        axios.post(`${api}/items/findItem`,
        {
            sku
        },
        {
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            console.log(res.data);
            dispatch(findItemBySkuSuccess(res.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}
export const getItemById = (id,token) => {
    return dispatch => {
        axios.get(`${api}/items/${id}`,{
            headers : {
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(getItemByIdSuccess(res.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}
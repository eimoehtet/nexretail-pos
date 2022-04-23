import { GET_CUSTOMERS,CREATE_CUSTOMER } from "../actions/actionTypes"

const initialState={
    customers : []
}
const CustomerReducer = (state=initialState,action) => {
    switch(action.type){
        case GET_CUSTOMERS:
            return {
                customers:action.payload
            }
        case CREATE_CUSTOMER:
            return {
                customers :[...state.customers,action.payload]
            }    
        default:
            return state;    
    }
}
export default CustomerReducer;
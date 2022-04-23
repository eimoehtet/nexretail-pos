import { LOGIN_SUCCESS } from "../actions/actionTypes"

const initialState = {
    token : null,
    isLoggedIn:false
}
const LoginReducer = (state=initialState,action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                token : action.payload,
                isLoggedIn:true
            }
        default:
            return state    
    }
}
export default LoginReducer;
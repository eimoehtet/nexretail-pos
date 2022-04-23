import { FIND_ITEMS, FIND_ITEMS_BY_SKU, GET_ITEM_BY_ID } from "../actions/actionTypes"

const initialState={
    searchItems:[],
    item:''
}
const SearchItemReducer = (state=initialState,action) => {
    switch(action.type){
        case FIND_ITEMS:
            return{
                searchItems:action.payload
            }
        case FIND_ITEMS_BY_SKU:
            return {
                searchItems : action.payload
            } 
        case GET_ITEM_BY_ID:
            return {
                ...state.searchItems,
                item:action.payload
            }       
        default:
            return state    
    }
}
export default SearchItemReducer;
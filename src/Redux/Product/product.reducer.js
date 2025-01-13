import { GET_CATEGORY_DATA_FAILURE, GET_CATEGORY_DATA_REQUEST, GET_CATEGORY_DATA_SUCCESS } from "./product.actionType"

const initialState={
    loading:false,
    err:null,
    categoryData:null,
    product:null
}
export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_CATEGORY_DATA_REQUEST:
            return {...state,loading:true}
        case GET_CATEGORY_DATA_SUCCESS:
            return {...state,categoryData:action.payload,loading:false}
        case GET_CATEGORY_DATA_FAILURE:
            return {...state,loading:false,err:action.payload}
        default:
            return state;
    }
}
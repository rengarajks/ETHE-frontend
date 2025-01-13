import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./auth.actionType"

const initialState={
    loading:false,
    err:null,
    jwt:null,
    user:null
}
export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_REQUEST:
        case GET_PROFILE_REQUEST:
            return {...state,loading:true}
        case LOGIN_SUCCESS:
            return {...state,jwt:action.payload,loading:false}
        case GET_PROFILE_SUCCESS:
            return {...state,user:action.payload,loading:false}
        case LOGIN_FAILURE:
        case GET_PROFILE_FAILURE:
            return {...state,loading:false,err:action.payload}
        default:
            return state;
    }
}
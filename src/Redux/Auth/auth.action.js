import axios from "axios";
import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./auth.actionType";
import { api, API_BASE_URL } from "../../Config/api";

export const loginUserAction=(loginData)=>async(dispatch)=>{
    try{
        // dispatch({type:LOGIN_REQUEST,payload:data.jwt})
        const {data}=await axios.post('http://localhost:8005/authentication/verify-otp',loginData);
        if(data.token){
            localStorage.setItem("jwt",data.token)
            console.log("login",data)
            dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
        }
    }
    catch(err){
        console.log("LOGIN-",err)
        dispatch({type:LOGIN_FAILURE,payload:err})
    }
}

export const getProfileAction=()=>async(dispatch)=>{
    dispatch({type:GET_PROFILE_REQUEST})
    try{
        const {data}=await api.get(`${API_BASE_URL}/api/user/profile`);
        console.log("profile---",data)
        dispatch({type:GET_PROFILE_SUCCESS,payload:data})
    }
    catch(err){
        console.log("PROFILE---",err)
        dispatch({type:GET_PROFILE_FAILURE,payload:err})
    }
}
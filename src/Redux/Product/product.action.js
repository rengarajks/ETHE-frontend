import { api, API_BASE_URL } from "../../Config/api";
import { GET_CATEGORY_DATA_FAILURE, GET_CATEGORY_DATA_SUCCESS } from "./product.actionType";

export const getCategoryDataAction=()=>async(dispatch)=>{
    try {
        const {data}=await api.get(`${API_BASE_URL}/api/product/category`);
        console.log("CATEGORY---",data)
        dispatch({type:GET_CATEGORY_DATA_SUCCESS,payload:data})
    } catch (error) {
        console.log("CAT-",error)
        dispatch({type:GET_CATEGORY_DATA_FAILURE,payload:err})
    }
}
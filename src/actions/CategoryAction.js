import {GET_CATEGORY_LIST,GET_BILLER_CATEGORY_LIST,GET_BILLER_PRODUCT_LIST,SET_LOADING,STOP_LOADING,BILLER_VALIDATION,BILLER_PAYMENT } from "./types";
import { axiosClient } from "../utils/Config";


export const getCategory= (data) => async dispatch=>{
    try {
        dispatch({type:SET_LOADING})
        const res = await axiosClient.post("/getCategoryList",data)
        dispatch({
            type:GET_CATEGORY_LIST,
            payload:res.data.result
        })
        dispatch({type:STOP_LOADING})
    } catch (error) {
      console.log(error.response); 
    }
}


export const getBillerCategoryList= (data) => async dispatch=>{
    try {
        dispatch({type:SET_LOADING})
        const res = await axiosClient.post("/getBillerCategoryList",data)
        dispatch({
            type:GET_BILLER_CATEGORY_LIST,
            payload:res.data.result
        })
        dispatch({type:STOP_LOADING})
    } catch (error) {
      console.log(error.response); 
    }
}

export const getBillerProductList= (data) => async dispatch=>{
    try {
        dispatch({type:SET_LOADING})
        const res = await axiosClient.post("/getBillerProductList",data)
        dispatch({
            type:GET_BILLER_PRODUCT_LIST,
            payload:res.data.result
        })
        dispatch({type:STOP_LOADING})
    } catch (error) {
      console.log(error.response); 
    }
}

export const billerValidation= (data) => async dispatch=>{
    try {
        dispatch({type:SET_LOADING})
        const res = await axiosClient.post("/billerValidation",data)
        dispatch({
            type:BILLER_VALIDATION,
            payload:res.data.customers
        })
        console.log(res.data.responseMessage)
        dispatch({type:STOP_LOADING})
    } catch (error) {
      console.log(error.response); 
    }
}

export const billerPayment= (data) => async dispatch=>{
    try {
        dispatch({type:SET_LOADING})
        const res = await axiosClient.post("/billerPayment",data)
        dispatch({
            type:BILLER_PAYMENT,
            payload:res.data.customers
        })
        console.log(res.data.responseMessage)
        dispatch({type:STOP_LOADING})
    } catch (error) {
      console.log(error.response); 
    }
}


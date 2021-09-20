import {GOTO_PRODUCTLIST,  GOTO_BILLERVALIDATION } from "../actions/types";

const initialState = {
    productListParams: {},
    validationListParam: {},
}

export default function getCategoryList(state = initialState, action) {
    switch (action.type) {
        case GOTO_PRODUCTLIST:
            return {
                ...state,
                productListParams: action.payload
            }
        case GOTO_BILLERVALIDATION:
            return {
                ...state,
                validationListParam: action.payload
            }
       
        default:
            return state;
    }
}
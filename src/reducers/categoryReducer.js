import { GET_CATEGORY_LIST, GET_BILLER_CATEGORY_LIST, GET_BILLER_PRODUCT_LIST, GOTO_PRODUCTLIST, SET_LOADING, STOP_LOADING, BILLER_VALIDATION, GOTO_BILLERVALIDATION, BILLER_PAYMENT } from "../actions/types";

const initialState = {
    billerCategories: [],
    billerCategoriesList: [],
    billerProductList: [],
    productListParams: {},
    validationListParam: {},
    billerValidatedCustomers:[],
    billerPayment:[],
    isLoading: false
}

export default function getCategoryList(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORY_LIST:
            return {
                ...state,
                billerCategories: action.payload,
                isLoading: true
            }
        case GET_BILLER_CATEGORY_LIST:
            return {
                ...state,
                isLoading: true,
                billerCategoriesList: action.payload
            }
        case GET_BILLER_PRODUCT_LIST:
            return {
                ...state,
                isLoading: true,
                billerProductList: action.payload
            }
        case GOTO_PRODUCTLIST:
            return {
                ...state,
                isLoading: true,
                productListParams: action.payload
            }
        case GOTO_BILLERVALIDATION:
            return {
                ...state,
                isLoading: true,
                validationListParam: action.payload
            }
        case BILLER_VALIDATION:
            return {
                ...state,
                isLoading: true,
                billerValidatedCustomers: action.payload
            }
        case BILLER_PAYMENT:
            return {
                ...state,
                isLoading: true,
                billerPayment: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case STOP_LOADING:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}
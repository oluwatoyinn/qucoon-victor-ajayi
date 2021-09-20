import {combineReducers} from 'redux'
import categoryReducer from "./categoryReducer";
import appReducer from './appReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage,
    whitelist:[
        'appReducer'
    ]
}
const baseReducer = combineReducers({
    appReducer,
    categoryReducer
})

const rootReducer = (state,action) => {
    // when a logout action is dispatch, below will reset redux state to default state
    // if(action.type===LOGOUT){
    //     state=undefined
    // }
    return baseReducer(state,action)
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
export default persistedReducer
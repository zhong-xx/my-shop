import {
    POST_ORDER,
    GET_ORDER_DETAILS
} from '../contents/orderConstents'

export const orderReducer = (state = { order: {}, orderDetails: {} }, action)=> {
    switch(action.type) {
        case POST_ORDER: 
            return { ...state, order: action.payload}
        case GET_ORDER_DETAILS:
            return { ...state, orderDetails: action.payload}
        default:
            return state
    }
}
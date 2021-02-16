import { 
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM,
    CART_SAVE_ADDRESS,
    SAVE_PAYMENT_METHOD
} from '../contents/cartConstents'

const cartReducer = (state = { cartItems: [], address: {}, paymentMethod: '微信'}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload

            const existItem = state.cartItems.find(x=> x.product === item.product)

            if(existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x=> x.product === existItem.product ? item: x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return { ...state, cartItems: state.cartItems.filter(x=> x.product !== action.payload)}
        case CART_SAVE_ADDRESS:
            return { ...state, address: action.payload }
        case SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload}
        default:
            return state
    }
}


export { cartReducer }
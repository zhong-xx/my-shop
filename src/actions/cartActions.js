import { 
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM,
    CART_SAVE_ADDRESS,
    SAVE_PAYMENT_METHOD
} from '../contents/cartConstents'
import axios from 'axios'

const addToCart = (id, qty) => async (dispatch, getState)=> {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


const removeFromCart = (id)=> async (dispatch, getState)=> {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

const saveAddress = (data)=> async (dispatch, getState)=> {
    dispatch({
        type: CART_SAVE_ADDRESS,
        payload: data
    })
    localStorage.setItem('address', JSON.stringify(getState().cart.address))
} 

const savePaymentMethod = (data)=> async (dispatch, getState) => {
    dispatch({
        type: SAVE_PAYMENT_METHOD,
        payload: data
    })
    localStorage.setItem('paymentMethod', JSON.stringify(getState().cart.paymentMethod))
}


export { addToCart, removeFromCart, saveAddress, savePaymentMethod }
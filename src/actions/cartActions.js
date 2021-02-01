import { 
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM 
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


export { addToCart }
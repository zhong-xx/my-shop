// combineReducers合并Reducer，形成一个大的Reducer
// applyMiddleware：使我们可以使用中间件
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
})

const cartItemsFromStore = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): []

const initialState = {
    cart: {
        cartItems: cartItemsFromStore
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store

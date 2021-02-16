import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailReducer } from './reducers/userReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetail: userDetailReducer
})

// 获取本地存储的购物车信息
const cartItemsFromStorage = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): []
// 获取本地存储的登录用户信息
const userInfoFromStorage = localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null
// 获取本地存储的地址信息
const addressStorage = localStorage.getItem('address')? JSON.parse(localStorage.getItem('address')): {}
// 获取本地存储的支付方式信息
const paymentMethodStorage = localStorage.getItem('paymentMethod')? JSON.parse(localStorage.getItem('paymentMethod')): "微信"


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        address: addressStorage,
        paymentMethod: paymentMethodStorage
    },
    userLogin: {
        userInfo: userInfoFromStorage
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store

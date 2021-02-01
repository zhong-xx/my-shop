import axios from 'axios'
import { 
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAIL_REQUEST, 
    PRODUCT_DETAIL_SUCCESS, 
    PRODUCT_DETAIL_FAIL,
} from '../contents/productConstents'

// 获取所有产品action
const listProducts = ()=> async (dispatch)=> {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products')
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

// 获取所有产品action
const productDetail = (id)=> async (dispatch)=> {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST })
        
        const { data } = await axios.get(`/api/products/${id}`)
        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export { listProducts, productDetail }
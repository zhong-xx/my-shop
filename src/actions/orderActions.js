import {
    POST_ORDER,
    GET_ORDER_DETAILS
} from '../contents/orderConstents'
import axios from 'axios'
import { message } from 'antd'



export const postOrder = (data)=> async(dispatch, getState) => {
    const config = {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": 'Bearer '+ getState().userLogin.userInfo.token
        }
    }

    let result = await axios.post('/api/orders', data, config)
    message.success('提交订单成功')
    dispatch({
        type: POST_ORDER,
        payload: result.data
    })
}

export const getOrderDetails = (id)=> async(dispatch, getState)=> {
    const config = {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": 'Bearer '+ getState().userLogin.userInfo.token
        }
    }
    let result = await axios.get(`/api/orders/${id}`, config)
    dispatch({
        type: GET_ORDER_DETAILS,
        payload: result.data
    })
}



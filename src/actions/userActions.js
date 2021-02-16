import { 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAIL,
    USER_LOGOUT, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS, 
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST, 
    USER_DETAILS_SUCCESS, 
    USER_DETAILS_FAIL,
    USER_UPDATE_PROFILE_REQUEST, 
    USER_UPDATE_PROFILE_SUCCESS, 
    USER_UPDATE_PROFILE_FAIL,
} from '../contents/userContents'
import axios from 'axios'
import { message } from 'antd'

// 用户登录Action
export const login = (email, password) => async (dispatch)=> {
    try {
        dispatch({ type: USER_LOGIN_REQUEST})

        const config = {
            headers: {
                "Content-type": 'application/json'
            }
        }

        const { data } = await axios.post('/api/users/login', { email, password }, config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

// 用户退出
export const userLogout = ()=> (dispatch)=> {
    localStorage.clear('userInfo')
    dispatch({
        type: USER_LOGOUT
    })
}


// 用户注册Action
export const register = (name, email, password) => async (dispatch)=> {
    try {
        dispatch({ type: USER_REGISTER_REQUEST})

        const config = {
            headers: {
                "Content-type": 'application/json'
            }
        }

        const { data } = await axios.post('/api/users', { name, email, password }, config)
        dispatch({
            type: USER_REGISTER_SUCCESS
        })
        message.success('注册成功')
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

// 获取用户详细信息
export const getUserDetail = ()=> async (dispatch, getState)=> {
    try {
        dispatch({type: USER_DETAILS_REQUEST})
        const config = {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": 'Bearer '+ getState().userLogin.userInfo.token
            }
        }

        const { data } = await axios.get('/api/users/profile', config)
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}


export const updateUserProfile = (name, email, password)=> async (dispatch, getState)=> {
    try {
        const config = {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": 'Bearer '+ getState().userLogin.userInfo.token
            }
        }

        const { data } = await axios.put('/api/users/profile', {
            name, email, password
        },config)
        localStorage.setItem('userInfo', JSON.stringify(data))
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        message.success('更改资料成功')
    } catch (error) {

    }
}
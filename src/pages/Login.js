import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const Login = ({ location, history }) => {

    const dispatch = useDispatch()
    const { loading, userInfo, error } = useSelector(state => state.userLogin)

    // const redirect = location.search !== '/' ? location.search.split('=')[1]: ''

    function onFinish (value) {
        dispatch(login(value.email, value.password))
    }
    // console.log(location.search)
    // console.log(redirect)
    useEffect(() => {
        if(userInfo) {
            history.push('/')
        }
    }, [history, userInfo])
    
    return (
        <div style={{padding: '50px 30% 0'}}>
            <h2 style={{fontWeight: '700'}}>登录</h2>
            {
                loading? <Loader />: error? <Message type="error" message={error} />: ''
            }
            <Form
                layout="vertical"
                onFinish={onFinish}
                >
                <Form.Item
                    label="邮箱地址"
                    name="email"
                    rules={[{ required: true, message: '请输入邮箱地址' }]}
                >
                    <Input placeholder="请输入邮箱地址"/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password placeholder="请输入密码" />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                    登录
                    </Button>
                </Form.Item>
            </Form>
            <div>
                <span>新用户? </span>
                <Link to='/register'>去注册</Link>
            </div>
        </div>
    )
}

export default Login

import React from 'react'
import { Form, Input, Button, message } from 'antd';
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions'

const Register = () => {
    
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error } = userRegister
    const dispatch = useDispatch()

    function onFinish (value) {
        if(value.password === value.confirmPassword) {
            dispatch(register(value.name, value.email, value.password))
        } else {
            message.warn('两次输入的密码不一样')
        }
    }

    return (
        <div style={{padding: '50px 30% 0'}}>
            <h2 style={{fontWeight: '700'}}>注册</h2>
            {
                loading? <Loader />: error? <Message type="error" message={error} />: ''
            }
            <Form
                layout="vertical"
                onFinish={onFinish}
                >
                <Form.Item
                    label="姓名"
                    name="name"
                    rules={[{ required: true, message: '请输入姓名' }]}
                >
                    <Input placeholder="请输入姓名"/>
                </Form.Item>

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

                <Form.Item
                    label="确认密码"
                    name="confirmPassword"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password placeholder="请输入密码" />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                    注册
                    </Button>
                </Form.Item>
            </Form>
            <div>
                <span>已有帐户 </span>
                <Link to={'/login'}>去登录</Link>
            </div>
        </div>
    )
}

export default Register

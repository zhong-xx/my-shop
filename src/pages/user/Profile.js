import React, { useEffect } from 'react'
import { Col, Row, Form, Input, Button, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetail, updateUserProfile } from '../../actions/userActions'

const Profile = () => {

    const userDetail = useSelector(state => state.userDetail)
    let { loading, userInfo, error } = userDetail
    userInfo = userInfo || {}
    const initialValues= {
        name: userInfo.name,
        email: userInfo.email,
    }

    const dispatch = useDispatch()
    
    useEffect(() => {
        if(!userInfo.name) {
            dispatch(getUserDetail())
        }
    }, [])

    function onFinish (val) {
        if(val.password === val.confirmPassword) {
            dispatch(updateUserProfile(val.name, val.email, val.password))
        } else {
            message.warn('两次输入的密码不同')
        }
    }

    return (
        <Row>
            <Col span={6}>
                <h2 style={{fontWeight: 700, marginTop: '20px'}}>个人资料</h2>
                {
                    initialValues.name ? 
                    (
                        <Form
                            layout="vertical"
                            onFinish={onFinish}
                            initialValues={initialValues}
                            >
                            <Form.Item
                                label="姓名"
                                name="name"
                            >
                                <Input placeholder="请输入姓名"/>
                            </Form.Item>

                            <Form.Item
                                label="邮箱地址"
                                name="email"
                            >
                                <Input placeholder="请输入邮箱地址"/>
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name="password"
                            >
                                <Input.Password placeholder="请输入密码" />
                            </Form.Item>

                            <Form.Item
                                label="确认密码"
                                name="confirmPassword"
                            >
                                <Input.Password placeholder="请输入密码" />
                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                更改资料
                                </Button>
                            </Form.Item>
                        </Form>
                    ): ''
                }
            </Col>
            <Col span={2}></Col>
            <Col span={16}>
                <h2 style={{fontWeight: 700, marginTop: '20px'}}>我的订单</h2>

            </Col>
        </Row>
    )
}

export default Profile

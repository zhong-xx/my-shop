import React from 'react'
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { saveAddress } from '../actions/cartActions'

const Shipping = ({ next }) => {

    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()

    function onFinish (value) {
        console.log(value)
        dispatch(saveAddress(value))
        next()
    }

    return (
        <div style={{padding: '0 30%'}}>
            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={cart.address}
                >
                <Form.Item
                    label="所在省份"
                    name="province"
                    rules={[{ required: true, message: '请输入所在省份' }]}
                >
                    <Input placeholder="请输入所在省份" />
                </Form.Item>

                <Form.Item
                    label="所在城市"
                    name="city"
                    rules={[{ required: true, message: '请输入所在城市' }]}
                >
                    <Input placeholder="请输入所在城市"/>
                </Form.Item>

                <Form.Item
                    label="详细地址"
                    name="address"
                    rules={[{ required: true, message: '请输入详细地址' }]}
                >
                    <Input placeholder="请输入详细地址"/>
                </Form.Item>

                <Form.Item
                    label="邮政编码"
                    name="postalCode"
                    rules={[{ required: true, message: '请输入邮政编码' }]}
                >
                    <Input placeholder="请输入邮政编码" />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                    下一步
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Shipping

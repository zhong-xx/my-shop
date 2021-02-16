import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { Row, Col, Descriptions, Image, Select, Button, List, message } from 'antd'
import Message from '../components/Message'
const { Option } = Select;

const Cart = ({ match, location, history }) => {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)
    const { userInfo } = useSelector(state => state.userLogin)
    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    // 删除购物车产品
    function removeFromCartHandler (id) {
        dispatch(removeFromCart(id))
    }

    // 支付
    function checkoutHandler () {
        if(userInfo) {
            history.push('/paySteps')
        } else {
            history.push('/login')
            message.info('请先登录')
        }
    }

    return (
        <Row>
            <Col span={16}>
                <h1>购物车</h1>
                {
                    cartItems.length === 0 ? (
                        <Message type="info" message={<div>购物车为空<Link to="/">返回主页</Link></div>} />
                    ):               
                    (
                        <Descriptions column={1} bordered  >
                            {
                                cartItems.map(item=> {
                                    return (
                                        <Descriptions.Item key={item.product}>
                                            <Row align="middle">
                                                <Col span={4}>
                                                    <Image src={item.image} />
                                                </Col>
                                                <Col span={6}>
                                                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                                                </Col>
                                                <Col span={4}>{item.price}</Col>
                                                <Col span={6}>
                                                    <Select defaultValue={item.qty} style={{ width: 120 }} onChange={(val)=> {
                                                        dispatch(addToCart(item.product, Number(val)))
                                                    }}>
                                                        {
                                                            [...Array(item.countInStock).keys()].map((item, index)=> {
                                                                return <Option key={item} value={index+1}>{index+1}</Option>
                                                            })
                                                        }
                                                    </Select>
                                                </Col>
                                                <Col span={4}>
                                                    <Button
                                                        type="primary"
                                                        onClick={()=> removeFromCartHandler(item.product)}
                                                    >
                                                        删除
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Descriptions.Item>
                                    )
                                })
                            }
                        </Descriptions>
                    )
                }
            </Col>
            <Col span={1}></Col>
            <Col span={7} style={{marginTop: '50px'}}>
                <Descriptions column={1} bordered  >
                    <Descriptions.Item>
                        <h2>
                            共计({cartItems.reduce((acc, item)=> acc + item.qty, 0)})个产品
                        </h2>
                        ￥{cartItems.reduce((acc, item)=> acc + item.qty * item.price, 0)}
                    </Descriptions.Item>
                    <Descriptions.Item>
                        <Button type="primary" 
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler} 
                        block
                        >
                            去支付
                        </Button>
                    </Descriptions.Item>
                </Descriptions>
            </Col>
        </Row>
    )
}

export default Cart

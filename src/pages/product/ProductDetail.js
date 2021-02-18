import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row, Image, Descriptions, Select  } from 'antd'
import Rating from '../../components/Rating.js'
import { useDispatch, useSelector } from 'react-redux'
import { productDetail } from '../../actions/productActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
const { Option } = Select;

const ProductDetail = ({match, history}) => {

    const { product, loading, error } = useSelector(state=> state.productDetail)
    const dispatch = useDispatch()
    
    const [ qty, setQty ] = useState(1)

    useEffect(() => {
        dispatch(productDetail(match.params.id))
    }, [dispatch, match])

    function handleChange(value) {
        setQty(value)
    }

    function addToCartHandler () {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <div style={{paddingTop: '30px'}}>
            <Link to="/"><Button>返回主页</Button></Link>
            {
                loading ? <Loader />: error ? <Message type="error" message={error} />: 
                (
                    <Row>
                        <Col md={8}>
                            <Image
                                src={product.image}
                            />
                        </Col>
                        <Col md={8} style={{padding: '0 20px'}}>
                            <Descriptions title={product.name} column={1}>
                                <Descriptions.Item><Rating value={product.rating} text={`${product.numReviews}条评论`} /></Descriptions.Item>
                                <Descriptions.Item>价格：￥{product.price}</Descriptions.Item>
                                <Descriptions.Item>描述：￥{product.description}</Descriptions.Item>
                            </Descriptions>
                        </Col>
                        <Col md={8}>
                            <Descriptions column={1} bordered>
                                <Descriptions.Item label="价格">￥{product.price}</Descriptions.Item>
                                <Descriptions.Item label="描述">{product.countInStock > 0? '有货': '没货'}</Descriptions.Item>
                                <Descriptions.Item label="数量">
                                <Select defaultValue={qty} style={{ width: 120 }} onChange={handleChange}>
                                    {
                                        [...Array(product.countInStock).keys()].map((item, index)=> {
                                            return <Option key={item} value={index+1}>{index+1}</Option>
                                        })
                                    }
                                </Select>
                                </Descriptions.Item>
                                <Descriptions.Item>
                                    <Button onClick={addToCartHandler} type='primary' disabled={product.countInStock === 0} >添加到购物车</Button>
                                </Descriptions.Item>
                            </Descriptions>
                        </Col>
                    </Row>
                )
            }
        </div>
    )
}

export default ProductDetail

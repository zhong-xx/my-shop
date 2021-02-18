import React from 'react'
import { Row, Col } from 'antd';
import Product from '../../components/Product.js';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message.js';

const Home = () => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [])

    return (
        <>
            <h1>最新产品</h1>
            {
                loading? <Loader />: error ? <Message message={error} type="error" /> : (
                    <Row>
                        {
                            products.map((item)=> {
                                return (
                                    <Col key={item._id} sm={24} md={12} lg={6} >
                                        <Product product={item} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                )
            }
            
        </>
    )
}

export default Home

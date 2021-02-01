import React from 'react'
import { Card } from 'antd';
import Rating from './Rating.js';
import { Link } from 'react-router-dom'
const { Meta } = Card;

const Product = ({ product }) => {
    return (
        <Card
            style={{margin: '10px'}}
            cover = {
                <Link to={`/products/${product._id}`}>
                    <img
                        style={{width: '100%'}}
                        alt="123"
                        src={product.image}
                    />
                </Link>
            }
        >
            <Meta
                title={<Link to={`/products/${product._id}`}>
                    {product.name}
                </Link>}
                description={
                    (
                        <div>
                            <div>
                                <Rating value={product.rating} text={`${product.numReviews}条评价`} />
                            </div>
                            <h3>￥{product.price}</h3>
                        </div>
                    )
                }
            />
        </Card>
    )
}

export default Product

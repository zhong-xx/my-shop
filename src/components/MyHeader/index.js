import React from 'react'
import './index.less'
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const MyHeader = () => {
    return (
        <header>
            <Link to="/"><h2>我的商城</h2></Link>
            <div className="right">
                <Link to="/cart" className="item">
                    <ShoppingCartOutlined />
                    购物车
                </Link>
                <Link to="/login" className="item">
                    <UserOutlined />
                    登录
                </Link>
            </div>
        </header>
    )
}

export default MyHeader

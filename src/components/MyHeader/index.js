import React from 'react'
import './index.less'
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { userLogout } from '../../actions/userActions'

const MyHeader = () => {
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.userLogin)

    function logout () {
        dispatch(userLogout())
    }

    const menu = (
        <Menu>
          <Menu.Item>
            <Link to="/profile">个人详情</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/login' onClick={logout}>退出</Link>
          </Menu.Item>
        </Menu>
      );

    return (
        <header>
            <Link to="/"><h2>我的商城</h2></Link>
            <div className="right">
                <Link to="/cart" className="item">
                    <ShoppingCartOutlined />
                    购物车
                </Link>
                        
                {
                    userInfo? 
                    (
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            {userInfo.name} <DownOutlined />
                            </a>
                        </Dropdown>
                    )
                    : 
                    (
                        <Link to="/login" className="item">
                            <UserOutlined />
                            登录
                        </Link>
                    )
                }
            </div>
        </header>
    )
}

export default MyHeader

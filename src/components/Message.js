import { Alert } from 'antd'
import React from 'react'

const Message = ({ type, message }) => {
    return (
        <Alert message={message} type={type} showIcon />
    )
}

export default Message

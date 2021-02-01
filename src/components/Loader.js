import React from 'react'
import { Spin } from 'antd'

const Loader = () => {
    return (
        <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <Spin  size="large"  tip="Loading..."/>
        </div>
    )
}

export default Loader

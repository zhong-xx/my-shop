import React from "react";
import { Form, Input, Button, Radio } from "antd";
import { savePaymentMethod } from "../actions/cartActions";
import { useSelector, useDispatch } from "react-redux";

const Payment = ({ prev, next }) => {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function onFinish(value) {
    dispatch(savePaymentMethod(value.paymentMethod));
    next()
  }

  return (
    <div style={{padding: '0 30%'}}>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ paymentMethod: cart.paymentMethod }}
      >
        <Form.Item
          label="选择支付方式"
          name="paymentMethod"
          rules={[{ required: true, message: "请选择支付方式" }]}
        >
          <Radio.Group>
            <Radio style={radioStyle} value="微信">
              微信
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={prev} style={{ marginRight: "10px" }}>
            上一步
          </Button>
          <Button type="primary" htmlType="submit">
            下一步
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Payment;

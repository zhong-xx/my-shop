import { Col, Row, Descriptions, Image, List, Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems, address, paymentMethod } = cart;

  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  cart.shippingPrice = cart.itemsPrice > 5000 ? 0 : 20;
  cart.totalPrice = Number(cart.itemsPrice) + Number(cart.shippingPrice);

  return (
    <Row>
      <Col span={14}>
        <div>
          <h2 style={{ fontWeight: 700 }}>收货地址</h2>
          <div>
            <span style={{ fontWeight: 700 }}>收件人地址：</span>
            <span style={{ color: "gray" }}>
              {address.province +
                "," +
                address.city +
                "," +
                address.address +
                "," +
                address.postalCode}
            </span>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <h2 style={{ fontWeight: 700 }}>支付方式</h2>
          <div>
            <span style={{ fontWeight: 700 }}>支付方法：</span>
            <span style={{ color: "gray" }}>{paymentMethod}</span>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <h2 style={{ fontWeight: 700 }}>产品订单</h2>
          <List
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item>
                <Row style={{ width: "100%" }}>
                  <Col span={4}>
                    <Image width={40} src={item.image} />
                  </Col>
                  <Col span={14} style={{ fontWeight: 700 }}>
                    {item.name}
                  </Col>
                  <Col span={6} style={{ fontWeight: 600 }}>
                    {item.qty +
                      " X " +
                      item.price +
                      " = " +
                      Number(item.qty) * Number(item.price)}
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </div>
      </Col>
      <Col span={2}></Col>
      <Col span={8} style={{marginTop: '20px'}}>
          <Descriptions column={1} bordered>
            <Descriptions.Item>
                <h2 style={{fontWeight: 700}}>订单详细</h2>
            </Descriptions.Item>
            <Descriptions.Item>
                <Row>
                    <Col span={12}>产品总价</Col>
                    <Col span={12}>${cart.itemsPrice}</Col>
                </Row>
            </Descriptions.Item>
            <Descriptions.Item>
                <Row>
                    <Col span={12}>运费</Col>
                    <Col span={12}>${cart.shippingPrice}</Col>
                </Row>
            </Descriptions.Item>
            <Descriptions.Item>
                <Row>
                    <Col span={12}>订单总价</Col>
                    <Col span={12}>${cart.totalPrice}</Col>
                </Row>
            </Descriptions.Item>
            <Descriptions.Item>
                <Button type="primary" block>提交订单</Button>
            </Descriptions.Item>
          </Descriptions>
      </Col>
    </Row>
  );
};

export default PlaceOrder;

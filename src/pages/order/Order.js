import { Col, Row, Descriptions, Image, List, Button, Alert } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { getOrderDetails } from "../../actions/orderActions";

const Order = ({ history, match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetails(match.params.id));
  }, []);

  const order = useSelector((state) => state.order);
  const {
    _id,
    user,
    isDelivered,
    isPaid,
    orderItems,
    shippingAddress,
    paymentMethod,
    totalPrice,
    shippingPrice,
  } = order.orderDetails;
  console.log(order.orderDetails);

  if (!order.orderDetails.orderItems) {
    return <div></div>;
  }

  return (
    <Row>
      <Col span={14}>
        <h2 style={{ fontWeight: 700, fontSize: "25px", marginTop: "20px" }}>
          订单号：{_id}
        </h2>
        <div>
          <h2 style={{ fontWeight: 700 }}>收货地址</h2>
          <p>
            <strong>姓名：</strong>
            <span style={{ color: "gray" }}>{user.name}</span>
          </p>
          <p>
            <strong>邮箱：</strong>
            <span style={{ color: "gray" }}>{user.email}</span>
          </p>
          <p>
            <strong>收件人地址：</strong>
            <span style={{ color: "gray" }}>
              {shippingAddress.province +
                "," +
                shippingAddress.city +
                "," +
                shippingAddress.address +
                "," +
                shippingAddress.postalCode}
            </span>
          </p>
          <Alert style={{marginTop: '10px'}} type={isDelivered ? "success" :"error"} message={isDelivered ? "已发货" :"未发货"}  />
        </div>
        <br />
        <hr />
        <br />
        <div>
          <h2 style={{ fontWeight: 700 }}>支付方式</h2>
          <p>
            <strong>支付方法：</strong>
            <span style={{ color: "gray" }}>{paymentMethod}</span>
          </p>
        </div>
        <Alert style={{marginTop: '10px'}} type={isPaid ? "success" :"error"} message={isPaid ? "已支付" :"未支付"} />
        <br />
        <hr />
        <br />
        <div>
          <h2 style={{ fontWeight: 700 }}>产品订单</h2>
          <List
            dataSource={orderItems}
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
      <Col span={8} style={{ marginTop: "20px" }}>
        <Descriptions column={1} bordered>
          <Descriptions.Item>
            <h2 style={{ fontWeight: 700 }}>订单详细</h2>
          </Descriptions.Item>
          <Descriptions.Item>
            <Row>
              <Col span={12}>产品总价</Col>
              <Col span={12}>${totalPrice - shippingPrice}</Col>
            </Row>
          </Descriptions.Item>
          <Descriptions.Item>
            <Row>
              <Col span={12}>运费</Col>
              <Col span={12}>${shippingPrice}</Col>
            </Row>
          </Descriptions.Item>
          <Descriptions.Item>
            <Row>
              <Col span={12}>订单总价</Col>
              <Col span={12}>${totalPrice}</Col>
            </Row>
          </Descriptions.Item>
          <Descriptions.Item>
            <Button type="primary" block>
              支付
            </Button>
          </Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  );
};

export default withRouter(Order);

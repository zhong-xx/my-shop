import React from "react";
import Shipping from "./Shipping";
import { Steps } from "antd";
import Payment from "./Payment";
import PlaceOrder from "./PlaceOrder";
const { Step } = Steps;

const PaySteps = () => {
  
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "收货地址",
      content: <Shipping next={next} />,
    },
    {
      title: "支付",
      content: <Payment prev={prev} next={next} />,
    },
    {
      title: "确认订单",
      content: <PlaceOrder />,
    },
  ];

  return (
    <div style={{marginTop: '20px'}}>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content" style={{marginTop: '20px'}}>{steps[current].content}</div>
    </div>
  );
};

export default PaySteps;

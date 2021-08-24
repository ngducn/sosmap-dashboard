import React from "react";
import { Card, Col, Row } from "antd";
import "./index.css";
const IntroduceBox = () => {
  return (
    <div className='site-card-wrapper'>
      <Row gutter={16}>
        <Col span={6}>
          <Card className='card-introduce' title='Card title' bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card className='card-introduce' title='Card title' bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card className='card-introduce' title='Card title' bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card className='card-introduce' title='Card title' bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default IntroduceBox;

import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import "./index.css";
import { ArrowUpOutlined } from "@ant-design/icons";

const IntroduceBox = () => {
  return (
    <div className='site-card-wrapper'>
      <Row gutter={16}>
        {/* Card 1 */}
        <Col
          span={6}
          className='ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 card-padding'
        >
          <Card className='card_box' title='Request Received'>
            <div className='statistic-card'>
              <Statistic
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
              <Statistic
                value={616}
                precision={0}
                valueStyle={{ color: "#cf1322" }}
              />
            </div>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col
          span={6}
          className='ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 card-padding'
        >
          <Card className='card_box' title='Donation Received'>
            <div className='statistic-card'>
              <Statistic
                value={12}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
              <Statistic
                value={528}
                precision={0}
                valueStyle={{ color: "#cf1322" }}
              />
            </div>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col
          span={6}
          className='ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 card-padding'
        >
          <Card className='card_box' title='Donation Scheduled'>
            <div className='statistic-card'>
              <Statistic
                value={10.46}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
              <Statistic
                value={489}
                precision={0}
                valueStyle={{ color: "#cf1322" }}
              />
            </div>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col
          span={6}
          className='ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 card-padding'
        >
          <Card className='card_box' title='Stock Capacity'>
            <div className='statistic-card'>
              <Statistic
                value={14.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
              <Statistic
                value={535}
                precision={0}
                valueStyle={{ color: "#cf1322" }}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default IntroduceBox;

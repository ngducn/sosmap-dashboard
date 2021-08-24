import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import "./index.css";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const IntroduceBox = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {/* Card 1 */}
        <Col
          span={6}
          className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 card-padding"
        >
          <Card
            className="card-introduce"
            title="Request Received"
            bordered={false}
          >
            <div className="statistic-card">
              <Statistic
                // title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <Statistic
                // title="Idle"
                value={616} //  hub data
                precision={0}
                valueStyle={{ color: "#cf1322" }}
                // prefix={<ArrowDownOutlined />}
                // suffix="%"
              />
            </div>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col
          span={6}
          className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 card-padding"
        >
          <Card
            className="card-introduce"
            title="Donation Received"
            bordered={false}
          >
            <div className="statistic-card">
              <Statistic
                // title="Active"
                value={12}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <Statistic
                // title="Idle"
                value={528} //hub data
                precision={0}
                valueStyle={{ color: "#cf1322" }}
                // prefix={<ArrowDownOutlined />}
                // suffix="%"
              />
            </div>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col
          span={6}
          className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 card-padding"
        >
          <Card
            className="card-introduce"
            title="Donation Scheduled"
            bordered={false}
          >
            <div className="statistic-card">
              <Statistic
                // title="Active"
                value={10.46}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <Statistic
                // title="Idle"
                value={489} // hub data
                precision={0}
                valueStyle={{ color: "#cf1322" }}
                // prefix={<ArrowDownOutlined />}
                // suffix="%"
              />
            </div>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col
          span={6}
          className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 card-padding"
        >
          <Card
            className="card-introduce"
            title="Stock Capacity"
            bordered={false}
          >
            <div className="statistic-card">
              <Statistic
                // title="Active"
                value={14.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <Statistic
                // title="Idle"
                value={535} //hub data
                precision={0}
                valueStyle={{ color: "#cf1322" }}
                // prefix={<ArrowDownOutlined />}
                // suffix="%"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default IntroduceBox;

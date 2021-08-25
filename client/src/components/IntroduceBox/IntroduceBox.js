import React from "react";
import { Card, Col, Row, Statistic, Progress } from "antd";
import "./index.css";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const IntroduceBox = () => {
  return (
    <div className='site-card-wrapper'>
      <Row gutter={16}>
        {/* Card 1 */}
        <Col
          span={6}
          className='ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 card-padding'
        >
          <Card className='card_box'>
            <Statistic
              title='Pending Requests'
              value={262}
              suffix=' existing requests'
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <CaretDownOutlined
                style={{ paddingTop: "3px", paddingRight: "4px" }}
              />
              24 requests this week
            </div>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col
          span={6}
          className='ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 card-padding'
        >
          <Card className='card_box'>
            <Statistic
              title='Total Requests Handled'
              value={1298}
              suffix=' handled requests'
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <CaretUpOutlined
                style={{ paddingTop: "3px", paddingRight: "4px" }}
              />
              58 requests this week
            </div>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col
          span={6}
          className='ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 card-padding'
        >
          <Card className='card_box'>
            <Statistic title='Weekly Goal' value={24} suffix='/ 50 requests' />
            <Progress
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
              percent={(24 / 50) * 100}
            />
          </Card>
        </Col>

        {/* Card 4 */}
        <Col
          span={6}
          className='ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 card-padding'
        >
          <Card className='card_box'>
            <Statistic title='District Coverage' value={78} suffix='%' />
            <div>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={78}
                showInfo={false}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default IntroduceBox;

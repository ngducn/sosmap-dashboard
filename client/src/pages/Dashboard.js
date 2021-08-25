import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Row, Col, Card, Progress, Typography } from "antd";
import {
  EnvironmentOutlined,
  UserOutlined,
  AlignLeftOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Chart from "../components/Charts/Chart";
import TableData from "../components/TableData";
import IntroduceBox from "../components/IntroduceBox/IntroduceBox";
import ExportTable from "../components/ExportTable";

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo' />
          <Menu theme='dark' mode='inline'>
            <Menu.Item style={{ fontSize: 19 }} key='5'>
              DASHBOARD
            </Menu.Item>
            <Menu.Item icon={<EnvironmentOutlined />} key='1'>
              Điểm Đăng Ký
            </Menu.Item>
            <Menu.Item icon={<TeamOutlined />} key='2'>
              Thành Viên
            </Menu.Item>
            <Menu.Item
              icon={<AlignLeftOutlined />}
              key='3'
              as={Link}
              to='/dashboard'
            >
              Thống Kê
            </Menu.Item>

            <Menu.Item key='49' icon={<UserOutlined />}>
              Thông Tin Tài Khoản
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Body */}
        <Layout style={{ backgroundColor: "#f0f2f5" }} className='site-layout'>
          <Header
            className='site-layout-background'
            style={{
              padding: 0,
              backgroundColor: "white",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 2px 2px",
            }}
          />
          <Content style={{ margin: "0 16px" }}>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* Components */}
              <IntroduceBox />
              <br></br>
              <Title level={4}>Weekly's Summary</Title>
              <Row gutter={16} justify='space-between'>
                <Col span={18}>
                  <Chart />
                </Col>
                <Col span={6}>
                  <Card>
                    Khẩu Trang
                    <Progress
                      percent={18}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                    />
                    Gạo
                    <Progress
                      percent={23}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                    />
                    Mì Gói
                    <Progress
                      percent={25}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                    />
                    Trứng
                    <Progress
                      percent={40}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                    />
                    Sữa
                    <Progress
                      percent={43}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                    />
                    Đồ bảo hộ
                    <Progress
                      percent={45}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                    />
                    Bao tay
                    <Progress
                      percent={50}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                    />
                    Rau củ quả
                    <Progress
                      percent={56}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                    />
                    Dụng cụ y tế
                    <Progress
                      percent={60}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                    />
                    Quần áo
                    <Progress
                      percent={100}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                    />
                    Tiền
                    <Progress
                      percent={120}
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                    />
                  </Card>
                </Col>
              </Row>
              <br></br>
              <ExportTable />
              <br></br>
              <br></br>
              <Title level={4}>Volunteers</Title>
              <TableData />
            </div>
          </Content>

          {/* Footer */}
          <Footer style={{ textAlign: "center" }}>
            SOS DashBoard Created by SOS team
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;

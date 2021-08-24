import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  EnvironmentOutlined,
  UserOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";
import DasBoardPage from "../DasBoardPage";
import IntroduceBox from "./IntroduceBox/IntroduceBox";
const { Header, Content, Footer, Sider } = Layout;
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1"></Menu.Item>

            <Menu.Item icon={<EnvironmentOutlined />} key="3">
              Điểm Đăng Ký
            </Menu.Item>
            <Menu.Item icon={<UserOutlined />} key="3">
              Thành Viên
            </Menu.Item>
            <Menu.Item icon={<AlignLeftOutlined />} key="1">
              Thống Kê
            </Menu.Item>

            <Menu.Item key="9" icon={<UserOutlined />}>
              Thông Tin Tài Khoản
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <IntroduceBox />
              <DasBoardPage />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            SOS DashBoard Created by SOS team
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default SideBar;

import React, { useState } from "react";
import { Table, Tag, Space, Button, Row, Col, Typography } from "antd";
import { SecurityScanTwoTone } from "@ant-design/icons";

const { Title } = Typography;
const { Column, ColumnGroup } = Table;

const ExportTable = () => {
  const data = [
    {
      key: "1",
      firstName: "Lan",
      PhoneNumber: "+84936729789",
      address: "Nguyen Van Linh, District 7",
      necessities: "Khẩu Trang",
    },
    {
      key: "2",
      firstName: "Hong",
      PhoneNumber: "+84936729789",
      address: "Ton Dan, District 4",
      necessities: "Rau củ quả, Mì Gói, Gạo",
    },
    {
      key: "3",
      firstName: "Trieu",
      PhoneNumber: "+84936729789",
      address: "Vo Thi Sau. District 3",
      necessities: "Gạo, Sữa",
    },
    {
      key: "4",
      firstName: "Dat Tan",
      PhoneNumber: "+84936729789",
      address: "Binh Phuoc, Thu Duc",
      necessities: "Trứng, Sữa, Mì Gói",
    },
    {
      key: "5",
      firstName: "Triet",
      PhoneNumber: "+84936729789",
      address: "Tan Thoi Nhat Ward, District 12",
      necessities: "Sữa",
    },
    {
      key: "6",
      firstName: "Nga",
      PhoneNumber: "+84936729789",
      address: "Ward 12, Go Vap",
      necessities: "Gạo",
    },
  ];

  const rowSelection = {};

  return (
    <div>
      <Row gutter={16} justify='space-between'>
        <Col span={12}>
          <Title level={4}>Requests</Title>
          <Table
            pagination={false}
            rowSelection={rowSelection}
            dataSource={data}
          >
            <Column title='Requestors' dataIndex='firstName' key='firstName' />
            <Column title='Phone' dataIndex='PhoneNumber' key='PhoneNumber' />
            <Column title='Address' dataIndex='address' key='address' />
            <Column
              title='Necessities'
              dataIndex='necessities'
              key='necessities'
            />
          </Table>
        </Col>
        <Col span={12}>
          <Title level={4}>Donations</Title>
          <Table
            pagination={false}
            rowSelection={rowSelection}
            dataSource={data}
          >
            <Column title='Donators' dataIndex='firstName' key='firstName' />
            <Column title='Phone' dataIndex='PhoneNumber' key='PhoneNumber' />
            <Column title='Address' dataIndex='address' key='address' />
            <Column
              title='Necessities'
              dataIndex='necessities'
              key='necessities'
            />
          </Table>
        </Col>
      </Row>

      <div style={{ float: "right", marginTop: 16 }}>
        <Button type='primary'>Export to Excel</Button>
      </div>
    </div>
  );
};

export default ExportTable;

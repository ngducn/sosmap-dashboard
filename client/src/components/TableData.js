import React from "react";
import { Table, Tag, Space, Button } from "antd";

const { Column, ColumnGroup } = Table;

const TableData = () => {
  const data = [
    {
      key: "1",
      firstName: "Lan",
      lastName: "Nguyen",
      PhoneNumber: "+84936729789",
      address: "Nguyen Van Linh, District 7",
      status: ["Receives", "Pending"],
    },
    {
      key: "2",
      firstName: "Hong",
      lastName: "Pham",
      PhoneNumber: "+84936729789",
      address: "Ton Dan, District 4",
      status: ["Receives", "Pending"],
    },
    {
      key: "3",
      firstName: "Trieu",
      lastName: "Tran",
      PhoneNumber: "+84936729789",
      address: "Vo Thi Sau. District 3",
      status: ["Receives", "Pending"],
    },
    {
      key: "4",
      firstName: "Dat Tan",
      lastName: "Nguyen",
      PhoneNumber: "+84936729789",
      address: "Binh Phuoc, Thu Duc",
      status: ["Receives", "Pending"],
    },
    {
      key: "5",
      firstName: "Triet",
      lastName: "Le",
      PhoneNumber: "+84936729789",
      address: "Tan Thoi Nhat Ward, District 12",
      status: ["Receives", "Pending"],
    },
    {
      key: "6",
      firstName: "Nga",
      lastName: "Tran",
      PhoneNumber: "+84936729789",
      address: "Ward 12, Go Vap",
      status: ["Receives", "Pending"],
    },
  ];
  return (
    <Table dataSource={data}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column title="Phone Number" dataIndex="PhoneNumber" key="PhoneNumber" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Status"
        dataIndex="status"
        key="status"
        render={(status) => (
          <>
            {status.map((status) => (
              <Tag color="blue" key={status}>
                {status}
              </Tag>
            ))}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <a>Confirmed with {record.lastName}</a>
            <Button type="primary">Delete</Button>
          </Space>
        )}
      />
    </Table>
  );
};

export default TableData;

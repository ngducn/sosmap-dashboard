import React from "react";
import { Table, Tag, Space } from "antd";

const { Column, ColumnGroup } = Table;

const TableData = () => {
  const data = [
    {
      key: "1",
      firstName: "Lan",
      lastName: "Nguyen",
      PhoneNumber: "5459872465",
      address: "Nguyen Van Linh, District 7",
      status: ["Receives", "Pending"],
    },
    {
      key: "2",
      firstName: "Hong",
      lastName: "Pham",
      PhoneNumber: "5459872465",
      address: "Ton Dan, District 4",
      status: ["Receives"],
    },
    {
      key: "3",
      firstName: "Trieu",
      lastName: "Tran",
      PhoneNumber: "5459872465",
      address: "Vo Thi Sau. District 3",
      status: ["Receives", "Pending"],
    },
  ];
  return (
    <Table dataSource={data}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column title="PhoneNumber" dataIndex="Numbers" key="Numbers" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="status"
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
            <a>Confirm {record.lastName}</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default TableData;

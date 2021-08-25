import React from "react";
import { Table, Tag, Space, Button } from "antd";

const { Column, ColumnGroup } = Table;

const TableData = () => {
  const data = [
    {
      key: "1",
      firstName: "Chinh",
      PhoneNumber: "+84936729789",
      address: "Nguyen Van Linh, District 7",
      status: ["Available"],
    },
    {
      key: "2",
      firstName: "Chuong",
      PhoneNumber: "+84936729789",
      address: "Ton Dan, District 4",
      status: ["Available"],
    },
    {
      key: "3",
      firstName: "Duc Anh",
      PhoneNumber: "+84936729789",
      address: "Vo Thi Sau. District 3",
      status: ["Busy"],
    },
    {
      key: "4",
      firstName: "Tuan",
      PhoneNumber: "+84936729789",
      address: "Binh Phuoc, Thu Duc",
      status: ["Available"],
    },
    {
      key: "5",
      firstName: "Tan Tan",
      PhoneNumber: "+84936729789",
      address: "Tan Thoi Nhat Ward, District 12",
      status: ["Available"],
    },
    {
      key: "6",
      firstName: "Lien",
      PhoneNumber: "+84936729789",
      address: "Ward 12, Go Vap",
      status: ["Busy"],
    },
  ];
  return (
    <Table dataSource={data}>
      <Column title='Name' dataIndex='firstName' key='firstName' />
      <Column title='Phone' dataIndex='PhoneNumber' key='PhoneNumber' />
      <Column title='Address' dataIndex='address' key='address' />
      <Column
        title='Status'
        dataIndex='status'
        key='status'
        render={(status) => (
          <>
            {status.map((status) => {
              let color = "";
              if (status === "Busy") {
                color = "volcano";
              } else {
                color = "green";
              }
              return (
                <Tag color={color} key={status}>
                  {status}
                </Tag>
              );
            })}
          </>
        )}
      />
      <Column
        title='Action'
        key='action'
        render={(text, record) => (
          <Space size='middle'>
            <Button type='primary'>Call</Button>
            <Button type='secondary'>Delete</Button>
          </Space>
        )}
      />
    </Table>
  );
};

export default TableData;

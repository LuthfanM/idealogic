import { Space, Table, Tag } from 'antd';
import React from 'react';

const UserTable = ({ data }) => {
  const columns= [
    {
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Alamat',
      dataIndex: 'address',
      key: 'address',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'P/W',
      dataIndex: 'gender',
      key: 'gender',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Tanggal Lahir',
      key: 'born_date',
      dataIndex: 'born_date',
      render: (text) => <a>{text}</a>,      
    },
    {
      title: 'Tanggal Input',
      key: 'created_at',
      dataIndex: 'created_at',
      render: (text) => <a>{text}</a>,      
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>[View]</a>
            <a>[Edit]</a>
            <a>[Delete]</a>
          </Space>
        ),
      },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default UserTable;

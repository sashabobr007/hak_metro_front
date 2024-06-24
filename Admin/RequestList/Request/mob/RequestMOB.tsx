import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import s from './RequestMOB.module.scss';
import { Flex, Table, TableProps, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { EditOutlined, LeftOutlined } from '@ant-design/icons';
import { ChatContext } from '@src/App';
const cn = classNames.bind(s);

interface DataType {
  key: string;
  name: string;
  data: string;
}

const RequestMOB = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const setIsChat = useContext(ChatContext);

  const columns: TableProps<DataType>['columns'] = [
    {
      dataIndex: 'name',
      key: 'name',
      width: 400,
    },
    {
      dataIndex: 'data',
      key: 'data',
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'ФИО',
      data: '111',
    },
    {
      key: '2',
      name: 'Номер телефона',
      data: '111',
    },
    {
      key: '3',
      name: 'Дата поездки',
      data: '111',
    },
    {
      key: '4',
      name: 'Время поездки',
      data: '111',
    },
    {
      key: '5',
      name: 'Станциия отправления',
      data: '111',
    },
    {
      key: '6',
      name: 'Станция прибытия',
      data: '111',
    },
    {
      key: '7',
      name: 'Место встречи',
      data: '111',
    },
    {
      key: '7',
      name: 'Описание места встречи',
      data: '111',
    },
    {
      key: '8',
      name: 'Наличие багажа',
      data: '111',
    },
    {
      key: '9',
      name: 'Комментарий',
      data: '111',
    },
  ];

  return (
    <div className={cn('container')}>
      <Flex justify="space-between" align="center" style={{ marginBottom: 40 }}>
        <Flex align="center" gap={30}>
          <LeftOutlined onClick={() => navigate(-1)} />
          <Typography.Title level={2} style={{ marginBottom: 0 }}>
            Мои заявки #{id}
          </Typography.Title>
        </Flex>

        <Typography.Link
          onClick={() => setIsChat(true)}
          style={{
            fontSize: 15,
          }}>
          Связаться с сотрудником <EditOutlined />
        </Typography.Link>
      </Flex>

      <Table
        bordered
        showHeader={false}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default RequestMOB;

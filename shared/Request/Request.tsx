import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import s from './Request.module.scss';
import {
  Button,
  Flex,
  Input,
  Modal,
  Space,
  Table,
  TableProps,
  Typography,
  message,
} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { EditOutlined, LeftOutlined } from '@ant-design/icons';
import ConvoyList from './ConvoyList/ConvoyList';
import { ChatContext } from '@src/App';
import EditForm from '@src/shared/EditForm/EditForm';
import dayjs from 'dayjs';
import { dateFormat, timeFormat } from '@src/const';
const cn = classNames.bind(s);

interface DataType {
  key: string;
  name: string;
  data: string;
}

const Request = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const setIsChat = useContext(ChatContext);
  const [editMode, setEditMode] = useState(false);

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
      key: '0',
      name: 'Статус заявки',
      data: '111',
    },
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

  const defaultData = {
    fio: 'Иванов Иван Иванович',
    tel: '+7962543543',
    dateTrip: dayjs(Date.now(), dateFormat),
    timeTrip: dayjs(Date.now(), timeFormat),
    startStation: 1,
    endStation: 2,
    place: 'fsgf',
    meetingPointText: 'fsgf',
    withBaggage: false,
    comment: 'fsgdgfidopgjifdjopihjgiodfjghjdfnhogofdojpf',
  };

  return (
    <div>
      <Flex justify="space-between" align="center" style={{ marginBottom: 40 }}>
        <Flex align="center" gap={30}>
          <LeftOutlined onClick={() => navigate(-1)} />
          <Flex align="center" gap={15}>
            <Typography.Title level={2} style={{ marginBottom: 0 }}>
              Информация о заявке #{id}
            </Typography.Title>
            <EditOutlined
              onClick={() => {
                setEditMode((prev) => !prev);
                if (editMode) {
                  message.success('Включен режим редактирования');
                } else {
                  message.warning('Режим редактирования выключен');
                }
              }}
              style={{ fontSize: 30, color: '#0066FF' }}
            />
          </Flex>
        </Flex>

        <Typography.Link
          onClick={() => setIsChat(true)}
          style={{
            fontSize: 15,
          }}>
          Связаться с сотрудником
        </Typography.Link>
      </Flex>

      {editMode ? (
        <EditForm dataDefault={defaultData} setEditMode={setEditMode} />
      ) : (
        <>
          <Table
            bordered
            showHeader={false}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
          <ConvoyList />
        </>
      )}
    </div>
  );
};

export default Request;

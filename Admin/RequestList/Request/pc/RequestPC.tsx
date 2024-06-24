import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import s from './RequestPC.module.scss';
import {
  Button,
  Flex,
  Input,
  Modal,
  Space,
  Spin,
  Table,
  TableProps,
  Tag,
  Typography,
} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { EditOutlined, LeftOutlined } from '@ant-design/icons';
import ConvoyList from './ConvoyList/ConvoyList';
import { PasInfoType, RequestType, endpointEnum } from '@src/api/myApi/api.types';
import { api } from '@src/api/myApi/api';
import { store } from '@src/store/store';
import { getRandomPlace } from '@src/utils/getRandomPlace';
import { statusCode } from '@src/App.types';
import { observer } from 'mobx-react-lite';
const cn = classNames.bind(s);

interface DataType {
  key: string;
  name: string;
  data: string;
}

const RequestPC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [requestData, setRequestData] = useState<RequestType[] | null>(null);
  const [passenger, setPassenger] = useState<PasInfoType | undefined>(undefined);

  useEffect(() => {
    api
      .getWithParams<RequestType[]>(endpointEnum.request, {
        id_bid: id ?? '0',
      })
      .then((data) => {
        setRequestData(data);
        setPassenger(store.getPassenger(data[0].id_pas));
      });
  }, []);

  const columns: TableProps<DataType>['columns'] = [
    {
      dataIndex: 'name',
      key: 'name',
      width: 400,
    },
    {
      dataIndex: 'data',
      key: 'data',
      render: (value, { name }, index) => {
        if (name === 'Статус заявки') {
          return (
            <Tag color={statusCode.find((item) => item.text === value)?.color}>
              {value}
            </Tag>
          );
        } else {
          return value;
        }
      },
    },
  ];

  console.log(requestData);

  const data: DataType[] =
    requestData && passenger
      ? [
          {
            key: '0',
            name: 'Статус заявки',
            data: requestData[0].status,
          },
          {
            key: '1',
            name: 'ФИО пассажира',
            data: passenger?.fio,
          },
          {
            key: '2',
            name: 'Номер телефона',
            data: passenger.phone,
          },
          {
            key: '3',
            name: 'Дата поездки',
            data: requestData[0].datetime,
          },
          {
            key: '4',
            name: 'Время поездки',
            data: requestData[0].time3,
          },
          {
            key: '5',
            name: 'Станциия отправления',
            data: store.getNameStation(requestData[0].id_st1),
          },
          {
            key: '6',
            name: 'Станция прибытия',
            data: store.getNameStation(requestData[0].id_st2),
          },
          {
            key: '7',
            name: 'Место встречи',
            data: getRandomPlace(),
          },
          {
            key: '8',
            name: 'Комментарий',
            data: requestData[0].comment,
          },
        ]
      : [];

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className={cn('container')}>
      <Flex align="center" gap={30} style={{ marginBottom: 40 }}>
        <LeftOutlined onClick={() => navigate(-1)} />
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          Информация о заявке #{id}
        </Typography.Title>
      </Flex>

      <Modal
        width={800}
        centered
        cancelText="отмена"
        okText="сохранить"
        title={
          <Typography.Title level={3} style={{ marginBottom: 20 }}>
            Обратная связь
          </Typography.Title>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p style={{ color: '#939393', marginBottom: 10 }}>
          Напишите свой отзыв о сопровождении сотрудником
        </p>
        <Input.TextArea placeholder="введите текст" />
      </Modal>

      {requestData && (
        <Table
          bordered
          showHeader={false}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      )}

      {id && requestData && (
        <ConvoyList
          id={id}
          convoys={requestData.map((item) => item.fio)}
          status={requestData[0].status}
          requestData={requestData}
        />
      )}
    </div>
  );
};

export default observer(RequestPC);

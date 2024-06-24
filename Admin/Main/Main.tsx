import { Flex, Form, Input, Modal, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { PhoneOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import s from './Main.module.scss';
import SosTable from './SosTable/SosTable';
import NavigationList from '@src/shared/NavigationList/NavigationList';
import MainStatList from '@src/shared/MainStatList/MainStatList';
import {
  EmergencyCaseType,
  EmergencyPostType,
  endpointEnum,
} from '@src/api/myApi/api.types';
import { api } from '@src/api/myApi/api';
import { currentDateFormat } from '@src/utils/timestampToTime';
const cn = classNames.bind(s);

const Main = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const renderModal = () => (
    <Modal
      width={700}
      centered
      cancelText="отмена"
      okText="сохранить"
      title={
        <Typography.Title level={3} style={{ marginBottom: 30 }}>
          Сообшить об экстренном случае
        </Typography.Title>
      }
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}>
      <p style={{ color: '#939393', marginBottom: 10 }}>
        Опишите экстренный случай, укажите номер заявки, дату, время и адрес
      </p>
      <Form
        form={form}
        onFinish={(values) =>
          api.send<EmergencyPostType, { message: string }>(
            endpointEnum.emergency_case_post,
            {
              ...values,
              id_emergency: 0,
              id_worker: 142,
              fio_worker: 'Болотов Г.Е.',
              date_emergency: currentDateFormat(),
            },
          )
        }>
        <Form.Item name={'text_emergency'}>
          <Input.TextArea placeholder="введите текст" />
        </Form.Item>
      </Form>
    </Modal>
  );

  const nav = [
    [
      {
        id: 1,
        title: 'Перейти к моим задачам',
        text: 'Кнопка для просмотра рабочих задач на ближайшие дни',
      },
      {
        id: 2,
        title: 'Карта метро',
        text: 'Открыть карту для построения маршрута',
      },
    ],
    [
      {
        id: 3,
        title: 'Время обеда',
        text: 'Выберите время обеда на сегодня',
      },
      {
        id: 4,
        title: 'Настроить рабочий день',
        text: 'Настроить ваш график и выходные',
      },
    ],
  ];

  const stat = [
    {
      id: 1,
      title: 'Среднее кол-во задач в день',
      text: '10 шт',
    },
    {
      id: 2,
      title: 'Рейтинг',
      text: '98 %',
      additional: 'Процент положительных отзывов пассажиров',
    },
  ];

  return (
    <div>
      {renderModal()}
      <Flex justify="space-between" align="center" style={{}}>
        <Typography.Title level={2}>Главная</Typography.Title>
        <Typography.Link onClick={() => setOpen(true)}>
          Связаться со специалистом <PhoneOutlined style={{ marginLeft: 5 }} />
        </Typography.Link>
      </Flex>

      <MainStatList list={stat} />
      <NavigationList list={nav} />

      <Typography.Title level={4} style={{ marginBottom: 15 }}>
        Сообщения об экстренных случаях
      </Typography.Title>
      <SosTable />
    </div>
  );
};

export default Main;

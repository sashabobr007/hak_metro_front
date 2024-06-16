import { Flex, Typography } from 'antd';
import React from 'react';
import s from './GeneralBlock.module.scss';
import classNames from 'classnames/bind';
import StatPanel from '@src/shared/StatPanel/StatPanel';
const cn = classNames.bind(s);

const GeneralBlock = () => {
  const workActivityData = [
    {
      id: 1,
      value: '200',
      text: 'задач',
    },
    {
      id: 2,
      value: '162',
      text: 'выполнено',
    },
    {
      id: 3,
      value: '6',
      text: 'сегодня',
    },
  ];

  const effectivityData = [
    {
      id: 1,
      value: '4,5',
      title: 'ср. время в пути',
      text: 'часов',
    },
    {
      id: 2,
      value: '40',
      title: 'ср. время с пассажирами',
      text: 'минут',
    },
    {
      id: 3,
      value: '50',
      title: 'ср. время свободное',
      text: 'минут',
    },
  ];
  return (
    <div>
      <Typography.Title level={4}>
        рабочая активность и загруженность команды
      </Typography.Title>
      <StatPanel style={{ marginBottom: 30 }} data={workActivityData} />

      <Typography.Title level={4}>эффективность сотрудников</Typography.Title>
      <StatPanel data={effectivityData} />
    </div>
  );
};

export default GeneralBlock;

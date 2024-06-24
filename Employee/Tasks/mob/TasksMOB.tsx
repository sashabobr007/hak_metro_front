import { Flex, Tabs, Typography } from 'antd';
import React from 'react';
import s from './TasksMOB.module.scss';
import classNames from 'classnames/bind';
import TaskTab from './TaskTab/TaskTab';
const cn = classNames.bind(s);

const TasksMOB = () => {
  const items = [
    {
      key: '1',
      label: 'Активные',
      children: <TaskTab type="active" />,
    },
    {
      key: '2',
      label: 'Архив',
      children: <TaskTab type="archive" />,
    },
  ];

  return (
    <div className={cn('container')}>
      <Typography.Title level={4} style={{ marginBottom: 20 }}>
        Мои задачи
      </Typography.Title>

      <Tabs items={items} />
    </div>
  );
};

export default TasksMOB;

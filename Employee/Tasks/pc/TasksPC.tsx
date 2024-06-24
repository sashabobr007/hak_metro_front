import { Flex, Typography } from 'antd';
import React from 'react';
import s from './TasksPC.module.scss';
import classNames from 'classnames/bind';
import TaskList from '../TaskList/TaskList';
import { observer } from 'mobx-react-lite';
import { store } from '@src/store/store';
const cn = classNames.bind(s);

const TasksPC = observer(() => {
  const data = store.analyticData;

  return (
    <div className={cn('container')}>
      <Typography.Title level={2} style={{ marginBottom: 40 }}>
        Список задач
      </Typography.Title>
      <Typography.Title level={5} style={{ marginBottom: 10 }}>
        Рабочая активность за месяц
      </Typography.Title>

      {data && (
        <Flex gap={15} className={cn('activity-state')}>
          <p className={cn('activity-state__item')}>
            {data.total_tasks} <span>задач</span>
          </p>
          <p className={cn('activity-state__item')}>
            {data.total_completed_tasks} <span>выполнено</span>
          </p>
          <p className={cn('activity-state__item')}>
            {data.today_tasks} <span>сегодня</span>
          </p>
        </Flex>
      )}

      <TaskList />
    </div>
  );
});

export default TasksPC;

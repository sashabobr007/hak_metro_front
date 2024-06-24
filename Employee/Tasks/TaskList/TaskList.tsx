import { Flex, Space, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import s from './TaskList.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as FlagIcon } from '@icons/flag.svg';
import { TaskType, endpointEnum } from '@src/api/myApi/api.types';
import { api } from '@src/api/myApi/api';
const cn = classNames.bind(s);

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskType[] | null>(null);
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();
  const getEndpoint = isActive
    ? endpointEnum.list_tasks_employee
    : endpointEnum.list_tasks_archive;

  useEffect(() => {
    api
      .getWithParams<TaskType[]>(getEndpoint, {
        id_worker: isActive ? '142' : '142',
      })
      .then((data) => setTasks(data));
  }, [isActive]);

  return (
    <div>
      <div className={cn('switcher')}>
        <button
          onClick={() => setIsActive(true)}
          className={cn('switcher__btn', { active: isActive })}>
          Активные
        </button>
        <button
          onClick={() => setIsActive(false)}
          className={cn('switcher__btn', { active: !isActive })}>
          Архив
        </button>
      </div>

      <div className={cn('requests-container')}>
        <div className={cn('requests-container__list')}>
          {tasks?.map((task, index) => (
            <div
              key={task.id_bid}
              onClick={() => navigate('./task/' + task.id_bid)}
              className={cn('request-item')}>
              <Flex
                justify="space-between"
                align="center"
                style={{ marginBottom: 20 }}>
                <Flex align="center" gap={20}>
                  <Typography.Title
                    style={{ marginBottom: 0 }}
                    className={cn('request-item__date')}
                    level={4}>
                    {task.time4.split(' ')[1]}
                  </Typography.Title>
                </Flex>

                <Flex align="center" gap={5}>
                  средний приоритет
                </Flex>
              </Flex>
              <Space direction="vertical">
                <Typography.Text className={cn('request-item__text')}>
                  Место встречи - у турникетов
                </Typography.Text>
                <Typography.Text className={cn('request-item__text')}>
                  {task.name_station1} - {task.name_station2}
                </Typography.Text>
              </Space>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;

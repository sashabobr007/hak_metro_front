import { Avatar, Flex, Space, Table, TableProps, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { ReactComponent as Filter } from '@icons/filter.svg';
import s from './RequestListPC.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import FilterDrawer from '@src/shared/FilterDrawer/FilterDrawer';
import { api } from '@src/api/myApi/api';
import { TaskType, endpointEnum } from '@src/api/myApi/api.types';
import { getRandomPlace } from '@src/utils/getRandomPlace';
const cn = classNames.bind(s);

interface DataType {
  key: string;
  employee: {
    image: string;
    name?: string;
    position?: string;
  };
  route: string;
  status: string;
  meetingTime: string;
  meetingPlace: string;
  requestNumber: number;
}

const RequestListPC = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<TaskType[] | null>(null);
  const dataSource = tasks?.map((task) => ({
    key: task.id_bid.toString(),
    employee: {
      image: `/persons/${Math.floor(Math.random() * 10) + 1}.jpg`,
    },
    route: `${task.name_station1} - ${task.name_station2}`,
    status: 'не выполнено',
    meetingTime: task.time3,
    meetingPlace: getRandomPlace() as string,
    requestNumber: +task.id_bid,
  }));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    api
      .getWithParams<TaskType[]>(endpointEnum.list_tasks_employee, {
        id_worker: '142',
      })
      .then((data) => {
        setTasks(data);
      });
  }, []);

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Сотрудник',
      dataIndex: 'employee',
      key: 'employee',
      render: (value: DataType['employee'], { requestNumber }) => (
        <Flex
          onClick={() => navigate('./' + requestNumber)}
          className={cn('hoverable-text')}
          gap={15}
          align="center">
          <Avatar size={48} src={value.image} />
          <Flex vertical>
            <span style={{ fontSize: 16 }}>{value.name}</span>
            <span style={{ color: '#939393', fontSize: 14 }}>{value.position}</span>
          </Flex>
        </Flex>
      ),
    },
    {
      title: 'Маршрут',
      dataIndex: 'route',
      key: 'route',
    },
    {
      title: 'Время встречи',
      dataIndex: 'meetingTime',
      key: 'meetingTime',
    },
    {
      title: 'Место встречи',
      dataIndex: 'meetingPlace',
      key: 'meetingPlace',
    },
    {
      title: 'Номер заявки',
      dataIndex: 'requestNumber',
      key: 'requestNumber',
    },
  ];

  return (
    <div className={cn('container')}>
      <Flex justify="space-between">
        <Typography.Title level={2}>Список заявок</Typography.Title>
        <Flex align="center" gap={5} onClick={() => setOpen(true)}>
          <Filter />
          <Typography.Link>фильтр</Typography.Link>
        </Flex>
      </Flex>

      <Table columns={columns} dataSource={dataSource} />
      <FilterDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default RequestListPC;

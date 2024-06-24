import { Avatar, Flex, Space, Table, TableProps, Tag, Typography } from 'antd';
import React, { useState } from 'react';
import { ReactComponent as Filter } from '@icons/filter.svg';
import { useNavigate } from 'react-router-dom';
import s from './RequestListMOB.module.scss';
import classNames from 'classnames/bind';
import TaskTags from '@src/shared/TaskTags/TaskTags';
import RequestBlock from '@src/shared/mob/RequestBlock/RequestBlock';
import FilterDrawer from '@src/shared/FilterDrawer/FilterDrawer';
import SingleTask from '@src/shared/mob/SingleTask/SingleTask';
import { store } from '@src/store/store';
import { statusCode } from '@src/App.types';
import { observer } from 'mobx-react-lite';
const cn = classNames.bind(s);

const RequestListMOB = () => {
  const [openTask, setOpenTask] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any | null>(null);

  return (
    <div className={cn('container')}>
      <FilterDrawer open={openFilter} onClose={() => setOpenFilter(false)} />

      <Typography.Title level={4} style={{ marginBottom: 20 }}>
        Задачи сотрудников
      </Typography.Title>

      <TaskTags listType={['green', 'orange', 'red']} />

      <Flex justify="space-between" align="center" style={{ marginBlock: 30 }}>
        <span style={{ color: '#aaa', fontSize: 15 }}>Список задач</span>
        <Flex align="center" gap={5} onClick={() => setOpenFilter(true)}>
          <Filter />
          <Typography.Link>фильтр</Typography.Link>
        </Flex>
      </Flex>

      <div>
        {store.tasks.map((el) => (
          <RequestBlock
            item={{
              stationStart: el.name_station1,
              stationEnd: el.name_station2,
              status: el.id_bid,
              time3: el.time3,
              title: el.time4.split(' ')[1],
            }}
            onClick={() => {
              setOpenTask(true);
              setSelectedTask(el);
            }}
          />
        ))}
      </div>

      <SingleTask
        open={openTask}
        setOpen={setOpenTask}
        selectedTask={selectedTask}
      />
    </div>
  );
};

export default observer(RequestListMOB);

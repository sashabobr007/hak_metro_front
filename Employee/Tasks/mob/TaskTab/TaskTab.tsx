import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import s from './TaskTab.module.scss';
import { Divider, Flex } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import RequestBlock from '@src/shared/mob/RequestBlock/RequestBlock';
import RequestList from '@src/shared/mob/RequestList/RequestList';
import { useNavigate } from 'react-router-dom';
import SingleTask from '@src/shared/mob/SingleTask/SingleTask';
import { TaskType, endpointEnum } from '@src/api/myApi/api.types';
import { api } from '@src/api/myApi/api';
import { store } from '@src/store/store';
import { observer } from 'mobx-react-lite';
const cn = classNames.bind(s);

const TaskTab = ({ type }: { type: 'active' | 'archive' }) => {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

  return (
    <>
      <Flex wrap="wrap" gap={10} style={{ marginBottom: 20 }}>
        <div className={cn('task-tag', 'green')}>
          <span>
            всего задач: <b>15</b>
          </span>
        </div>
        <div className={cn('task-tag', 'red')}>
          <span>
            задач на сегодня: <b>8</b>
          </span>
        </div>
      </Flex>

      {store.tasks && (
        <>
          {type === 'active' && <RequestList list={store.tasks} />}

          {type === 'active' ? (
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
                    setOpen(true);
                    setSelectedTask(el);
                  }}
                />
              ))}
            </div>
          ) : (
            <div>
              {store.arTasks.map((el) => (
                <RequestBlock
                  item={{
                    stationStart: el.name_station1,
                    stationEnd: el.name_station2,
                    status: el.id_bid,
                    time3: el.time3,
                    title: el.time4.split(' ')[1],
                  }}
                  onClick={() => {
                    setOpen(true);
                    setSelectedTask(el);
                  }}
                />
              ))}
            </div>
          )}
        </>
      )}

      {selectedTask && (
        <SingleTask open={open} setOpen={setOpen} selectedTask={selectedTask} />
      )}
    </>
  );
};

export default observer(TaskTab);

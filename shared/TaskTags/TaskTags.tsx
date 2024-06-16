import { Flex } from 'antd';
import React from 'react';
import s from './TaskTags.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(s);

interface TaskTagsProps {
  listType?: ('green' | 'orange' | 'red')[];
}

const TaskTags = ({ listType = ['green', 'orange', 'red'] }: TaskTagsProps) => {
  return (
    <Flex wrap="wrap" gap={10} style={{ marginBottom: 20 }}>
      {listType.includes('green') && (
        <div className={cn('task-tag', 'green')}>
          <span>
            Задач: <b>15</b>
          </span>
        </div>
      )}

      {listType.includes('orange') && (
        <div className={cn('task-tag', 'orange')}>
          <span>
            Выполнено: <b>8</b>
          </span>
        </div>
      )}

      {listType.includes('red') && (
        <div className={cn('task-tag', 'red')}>
          <span>
            Сегодня: <b>8</b>
          </span>
        </div>
      )}
    </Flex>
  );
};

export default TaskTags;

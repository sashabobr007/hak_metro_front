import PieChart from '@src/shared/PieChart/PieChart';
import { Flex, Space, Typography } from 'antd';
import React from 'react';
import s from './FeedBackBlockPC.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(s);

const FeedBackBlockPC = () => {
  const data01 = [
    {
      name: 'Group A',
      value: 400,
    },
    {
      name: 'Group B',
      value: 300,
    },
  ];

  return (
    <Flex align="center" className={cn('container')}>
      <div>
        <Typography.Title level={4} style={{ marginBottom: 0 }}>
          отзывы о сотрудниках
        </Typography.Title>
        <div style={{ position: 'relative' }}>
          <PieChart
            size={150}
            data={{
              chartData: data01,
              nameKey: 'name',
              dataKey: 'value',
            }}
          />
          <h1 className={cn('title-in')}>11 ч.</h1>
        </div>
      </div>

      <Flex gap={30} className={cn('diogram')}>
        <Space className={cn('diogram__label')} size={40} direction="vertical">
          <p>Отрицательные</p>
          <p>Положительные</p>
        </Space>

        <Space className={cn('diogram__value')} size={40} direction="vertical">
          <div className={cn('diogram__value-2')} style={{ width: 22 }}>
            <div className={cn('line')} />
            <span>11%</span>
          </div>
          <div className={cn('diogram__value-1')} style={{ width: 180 }}>
            <div className={cn('line')} />
            <span>89%</span>
          </div>
        </Space>
      </Flex>
    </Flex>
  );
};

export default FeedBackBlockPC;

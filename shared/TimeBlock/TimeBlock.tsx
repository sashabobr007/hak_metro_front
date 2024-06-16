import PieChart from '@src/shared/PieChart/PieChart';
import { Flex } from 'antd';
import React from 'react';
import s from './TimeBlock.module.scss';
import classNames from 'classnames/bind';
import ProgressLine from '@src/shared/ProgressLine/ProgressLine';
const cn = classNames.bind(s);

const TimeBlock = () => {
  const data01 = [
    {
      name: 'Group A',
      value: 400,
    },
    {
      name: 'Group B',
      value: 300,
    },
    {
      name: 'Group C',
      value: 300,
    },
  ];

  return (
    <div>
      <div style={{ position: 'relative', marginBottom: 20 }}>
        <PieChart
          size={250}
          data={{
            chartData: data01,
            nameKey: 'name',
            dataKey: 'value',
          }}
        />
        <div className={cn('title-in')}>
          <p className={cn('title-in__text')}>ср. раб. день за квартал</p>
          <h1 className={cn('title-in__value')}>
            11,2<span>часа</span>
          </h1>
        </div>
      </div>

      <div className={cn('lines-container')}>
        <ProgressLine
          data={{
            label: 'В пути',
            value: 220,
            totalValue: 400,
            symbol: 'ч',
          }}
        />
        <ProgressLine
          data={{
            label: 'На заявках',
            value: 100,
            totalValue: 400,
            symbol: 'ч',
            color: '#FFB940',
          }}
        />
        <ProgressLine
          data={{
            label: 'Отдыx',
            value: 50,
            totalValue: 400,
            symbol: 'ч',
            color: '#D098EC',
          }}
        />
      </div>
    </div>
  );
};

export default TimeBlock;

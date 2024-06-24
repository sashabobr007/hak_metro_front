import FeedBackBlock from '@src/shared/FeedBackBlock/FeedBackBlock';
import GeneralBlock from '@src/shared/GeneralBlock/GeneralBlock';
import TeamBlock from '@src/shared/TeamBlock/TeamBlock';
import TimeBlock from '@src/shared/TimeBlock/TimeBlock';
import { Flex, Typography } from 'antd';
import React from 'react';
import s from './AnalyticsPC.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(s);

const AnalyticsPC = () => {
  return (
    <div className={cn('container')}>
      <Typography.Title level={2}>Аналитика</Typography.Title>
      <Flex gap={50}>
        <Flex vertical gap={30}>
          <TeamBlock />
          <TimeBlock />
        </Flex>

        <Flex style={{ flex: 0.8 }} vertical gap={30}>
          <GeneralBlock />
          <FeedBackBlock />
        </Flex>
      </Flex>
    </div>
  );
};

export default AnalyticsPC;

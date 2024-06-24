import FeedBackBlock from '@src/shared/FeedBackBlock/FeedBackBlock';
import TeamBlock from '@src/shared/TeamBlock/TeamBlock';
import TimeBlock from '@src/shared/TimeBlock/TimeBlock';
import { Flex, Typography } from 'antd';
import s from './AnalyticsMOB.module.scss';
import classNames from 'classnames/bind';
import GeneralBlock from './GeneralBlock/GeneralBlock';
import TaskTags from '@src/shared/TaskTags/TaskTags';
const cn = classNames.bind(s);

const AnalyticsMOB = () => {
  return (
    <div className={cn('container')}>
      <Typography.Title level={4} style={{ marginBottom: 20 }}>
        Аналитика
      </Typography.Title>

      <TaskTags />

      <GeneralBlock />

      <Flex vertical gap={20}>
        <FeedBackBlock />
        <FeedBackBlock />
        <TeamBlock />
      </Flex>
    </div>
  );
};

export default AnalyticsMOB;

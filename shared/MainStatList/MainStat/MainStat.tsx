import { Flex, Typography } from 'antd';
import React from 'react';
import classNames from 'classnames/bind';
import s from './MainStat.module.scss';
const cn = classNames.bind(s);

interface MainStatProps {
  block: {
    id: number;
    title: string;
    text: string;
    additional?: string;
  };
}

const MainStat = ({ block }: MainStatProps) => {
  return (
    <Flex key={block.id} className={cn('container')} vertical gap={5}>
      <Typography.Title level={5} className={cn('title')}>
        {block.title}
      </Typography.Title>
      <p className={cn('text')}>
        {block.text} <span>{block.additional}</span>
      </p>
    </Flex>
  );
};

export default MainStat;

import React from 'react';
import classNames from 'classnames/bind';
import s from './RequestItem.module.scss';
import { Tag } from 'antd';
const cn = classNames.bind(s);

interface RequestItemProps {
  item: {
    id: string;
    tag: string;
    title: string;
    text: string;
  };
}

const RequestItem = ({ item }: RequestItemProps) => {
  return (
    <div key={item.id} className={cn('request-item')}>
      <div className={cn('request-item__head')}>
        <Tag color="#F4F4F8" style={{ color: 'black' }}>
          {item.tag}
        </Tag>
      </div>
      <span className={cn('request-item__title')}>{item.title}</span>
      <span className={cn('request-item__text')}>{item.text}</span>
    </div>
  );
};

export default RequestItem;

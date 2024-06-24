import { RightOutlined } from '@ant-design/icons';
import { Avatar, Col, Divider, Flex, Space } from 'antd';
import React from 'react';
import s from './EmployeeItem.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
const cn = classNames.bind(s);

interface EmployeeItem {
  col: {
    id: number;
    name: string;
    imageLink: string;
    tasks: number;
  };
}

const EmployeeItem = ({ col }: EmployeeItem) => {
  const { id, imageLink, name, tasks } = col;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/employee-profile/${id}`);
  };

  return (
    <Col
      onClick={handleClick}
      className={cn('container')}
      span={8}
      key={id + imageLink}>
      <Flex gap={20} align="center" style={{ position: 'relative' }}>
        <Avatar size={50} src={imageLink} />
        <Space direction="vertical">
          <p className={cn('title')}>{name}</p>
          <p style={{ fontSize: 14, color: '#939393' }}>{tasks} задач</p>
        </Space>
        <RightOutlined className={cn('arrow')} />
      </Flex>
      <Divider className={cn('divider')} />
    </Col>
  );
};

export default EmployeeItem;

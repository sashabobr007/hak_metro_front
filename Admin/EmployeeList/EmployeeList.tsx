import { RightOutlined } from '@ant-design/icons';
import { Avatar, Col, Divider, Flex, Row, Space, Typography } from 'antd';
import React from 'react';
import EmployeeItem from './EmployeeItem/EmployeeItem';
import { getRandomImage } from '@src/utils/getRandomImage';

const EmployeeList = () => {
  const data = [
    [
      {
        id: 1,
        name: 'Алексей петров',
        imageLink: getRandomImage(),
        tasks: 2,
      },
      {
        id: 2,
        name: 'Алексей петров',
        imageLink: getRandomImage(),
        tasks: 3,
      },
      {
        id: 3,
        name: 'Алексей петров',
        imageLink: getRandomImage(),
        tasks: 5,
      },
    ],
    [
      {
        id: 4,
        name: 'Алексей петров',
        imageLink: getRandomImage(),
        tasks: 9,
      },
      {
        id: 5,
        name: 'Алексей петров',
        imageLink: getRandomImage(),
        tasks: 5,
      },
      {
        id: 6,
        name: 'Алексей петров',
        imageLink: getRandomImage(),
        tasks: 4,
      },
    ],
    [
      {
        id: 7,
        name: 'Алексей петров',
        imageLink: getRandomImage(),
        tasks: 8,
      },
    ],
  ];

  return (
    <div>
      <Typography.Title level={2} style={{ marginBottom: 40 }}>
        Сотрудники
      </Typography.Title>
      <Typography.Title level={4}>Список сотрудников</Typography.Title>
      <Typography.Text style={{ color: '#939393' }}>
        Список сотрудников которые находятся под вашим руководством
      </Typography.Text>

      <div style={{ marginTop: 40 }}>
        {data.map((row, index) => (
          <Row gutter={32} key={index}>
            {row.map((col) => (
              <EmployeeItem col={col} />
            ))}
          </Row>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;

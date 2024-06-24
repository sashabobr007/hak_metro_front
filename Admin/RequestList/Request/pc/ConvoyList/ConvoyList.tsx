import { StatusEnum, statusCode } from '@src/App.types';
import { api } from '@src/api/myApi/api';
import {
  ChangeStatusType,
  RequestType,
  endpointEnum,
} from '@src/api/myApi/api.types';
import { getRandomImage } from '@src/utils/getRandomImage';
import { Avatar, Button, Flex, Space, Typography } from 'antd';
import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

interface ConvoyListProps {
  id: string;
  convoys: string[];
  status: string;
  requestData: RequestType[];
}

const ConvoyList = ({ id, convoys, status, requestData }: ConvoyListProps) => {
  const { time3, time_perenos } = requestData[0];
  const navigate = useNavigate();
  const changeStatus = () => {
    api.change<{ message: string }>(endpointEnum.change_status, {
      id_bid: id,
      status: StatusEnum.canceled,
    });
  };

  const makeLate = () => {
    api.change<{ message: string }>(endpointEnum.Late_worker, {
      id_bid: id,
      time_perenos: `${+time3 + (isNaN(+time_perenos) ? 0 : +time_perenos)}`,
    });
  };

  const data = convoys.map((item) => {
    const getImage = getRandomImage();
    return {
      name: item,
      position: 'Старший сопровождающий',
      image: getImage,
    };
  });

  return (
    <>
      <Typography.Title level={5} style={{ margin: '40px 0 20px 0' }}>
        Сопровождающий <span style={{ color: '#939393' }}>{convoys.length}</span>
      </Typography.Title>
      <Flex vertical gap={20} style={{ marginBottom: 30 }}>
        {data.map((person) => (
          <Flex
            onClick={() => navigate(`/employee-profile/${id}`)}
            key={person.name}
            gap={10}
            align="center">
            <Avatar size={40} src={<img src={person.image} alt="avatar" />} />
            <Space direction="vertical">
              <p>{person.name}</p>
              <p style={{ color: '#939393', fontSize: 12 }}>{person.position}</p>
            </Space>
          </Flex>
        ))}
      </Flex>
      <Space>
        <Button onClick={makeLate} type="default" danger>
          Опоздание
        </Button>
        <Button
          onClick={changeStatus}
          type="primary"
          style={{ background: 'black' }}>
          Отменить заявку
        </Button>
      </Space>
    </>
  );
};

export default ConvoyList;

import { ChatContext } from '@src/App';
import { Avatar, Button, Flex, Input, Modal, Space, Typography } from 'antd';
import React, { useContext, useState } from 'react';

const ConvoyList = () => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      name: 'Патрушев Игорь Рикардович',
      position: 'Старший сопровождающий',
    },
    {
      name: 'Патрушев Игорь Рикардович',
      position: 'Старший сопровождающий',
    },
  ];
  const url =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrZa7HIH68EmFZLYv8Ph6LmjnZMwNmfU4sw&s';

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const renderModal = () => (
    <Modal
      width={700}
      centered
      cancelText="отмена"
      okText="сохранить"
      title={
        <Typography.Title level={3} style={{ marginBottom: 30 }}>
          Сообшить об опоздании
        </Typography.Title>
      }
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}>
      <p style={{ color: '#939393', marginBottom: 10 }}>
        Выберите на сколько опаздывает пассажир
      </p>
      <Input.TextArea placeholder="введите текст" />
    </Modal>
  );

  return (
    <>
      {renderModal()}
      <Typography.Title level={5} style={{ margin: '40px 0 20px 0' }}>
        Сопровождающий <span style={{ color: '#939393' }}>2</span>
      </Typography.Title>
      <Flex vertical gap={20} style={{ marginBottom: 30 }}>
        {data.map((person) => (
          <Flex key={person.name} gap={10} align="center">
            <Avatar size={40} src={<img src={url} alt="avatar" />} />
            <Space direction="vertical">
              <p>{person.name}</p>
              <p style={{ color: '#939393', fontSize: 12 }}>{person.position}</p>
            </Space>
          </Flex>
        ))}
      </Flex>
      <Space>
        <Button type="default" danger>
          Отменить заявку
        </Button>
        <Button
          onClick={() => setOpen(true)}
          type="primary"
          style={{ background: 'black' }}>
          Опоздание
        </Button>
      </Space>
    </>
  );
};

export default ConvoyList;

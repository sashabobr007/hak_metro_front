import { Avatar, Flex, Space, Typography } from 'antd';
import s from './EmployeeProfileMOB.module.scss';
import classNames from 'classnames/bind';
import { timestampToDate } from '@src/utils/timestampToTime';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const cn = classNames.bind(s);

const EmployeeProfileMOB = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      label: 'Пол',
      value: 'жен',
    },
    {
      id: 2,
      label: 'Должность',
      value: 'Старший сопровождающий',
    },
    {
      id: 3,
      label: 'Личный телефон',
      value: '+7(963)432-23-43',
    },
    {
      id: 4,
      label: 'Рабочий телефон',
      value: '+7(962)543-44-11',
    },
    {
      id: 5,
      label: 'Telegram',
      value: '@erfggf',
    },
  ];

  const workSchedule = [
    {
      id: 1,
      label: 'Рабочее время',
      value: '12:30 - 13:45',
    },
    {
      id: 2,
      label: 'Смена',
      value: 'аьылвп',
    },
    {
      id: 3,
      label: 'Участок',
      value: '12:30 - 13:45',
    },
  ];

  return (
    <div className={cn('container')}>
      <Flex align="center" gap={10} style={{ marginBlock: 25 }}>
        <LeftOutlined onClick={() => navigate(-1)} />
        <Typography.Title level={4} style={{ marginBlock: 0 }}>
          Профиль сотрудника
        </Typography.Title>
      </Flex>

      <Flex align="center" gap={10} style={{ marginBottom: 30 }}>
        <Avatar
          size={70}
          className={cn('bio__image')}
          src={`/persons/${Math.floor(Math.random() * 10) + 1}.jpg`}
          alt="profile-photo"
        />
        <Space direction="vertical">
          <b style={{ fontSize: 16 }}>Алексей петров</b>
          <span style={{ color: '#aaa', fontSize: 16 }}>сотрудник</span>
        </Space>
      </Flex>

      <Flex vertical style={{ fontSize: 14 }} gap={30}>
        {data.map((item) => (
          <Space key={item.id} direction="vertical">
            <span style={{ color: '#aaa' }}>{item.label}</span>
            <span>{item.value}</span>
          </Space>
        ))}
      </Flex>

      <div className={cn('work-schedule')}>
        <Typography.Title level={4} style={{ marginBottom: 20 }}>
          Рабочий график
        </Typography.Title>
        <Flex vertical style={{ fontSize: 14 }} gap={30}>
          {workSchedule.map((item) => (
            <Space key={item.id} direction="vertical">
              <span style={{ color: '#aaa' }}>{item.label}</span>
              <span>{item.value}</span>
            </Space>
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default EmployeeProfileMOB;

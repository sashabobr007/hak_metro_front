import { Flex, Typography } from 'antd';
import s from './EmployeeProfilePC.module.scss';
import classNames from 'classnames/bind';
import { timestampToDate } from '@src/utils/timestampToTime';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const cn = classNames.bind(s);

const EmployeeProfilePC = () => {
  const currentDate = Date.now();
  const navigate = useNavigate();

  return (
    <div className={cn('container')}>
      <Flex align="center" gap={20} style={{ marginBottom: 40 }}>
        <LeftOutlined onClick={() => navigate(-1)} />
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          Профиль сотрудника
        </Typography.Title>
      </Flex>
      {/* {`/persons/${Math.floor(Math.random() * 10) + 1}.jpg`} */}
      <div className={cn('bio')}>
        <img
          className={cn('bio__image')}
          src={`/persons/${Math.floor(Math.random() * 10) + 1}.jpg`}
          alt="profile-photo"
        />

        <div>
          <h1>Общая информация</h1>
          <div className={cn('bio__data')}>
            <div className={cn('bio__data-item')}>
              <span className={cn('title')}>ФИО</span>
              <span className={cn('value')}>Иван Иванов Иванович</span>
            </div>
            <div className={cn('bio__data-item')}>
              <span className={cn('title')}>Пол</span>
              <span className={cn('value')}>Мужской</span>
            </div>
            <div className={cn('bio__data-item')}>
              <span className={cn('title')}>Должность</span>
              <span className={cn('value')}>Старший</span>
            </div>
          </div>
        </div>

        <div>
          <h1>Контакты</h1>
          <div className={cn('bio__data')}>
            <div className={cn('bio__data-item')}>
              <span className={cn('title')}>Личный телефона</span>
              <span className={cn('value')}>+7(432)543 42-42</span>
            </div>
            <div className={cn('bio__data-item')}>
              <span className={cn('title')}>Рабочий телефон</span>
              <span className={cn('value')}>+7(432)543 42-42</span>
            </div>
            <div className={cn('bio__data-item')}>
              <span className={cn('title')}>Telegram</span>
              <span className={cn('value')}>@gmaiom</span>
            </div>
          </div>
        </div>
      </div>

      <div className={cn('schedule-container')}>
        <div className={cn('schedule')}>
          <h1>Рабочий график на {timestampToDate(currentDate)}</h1>
          <Flex vertical gap={25}>
            <Flex gap={55}>
              <div className={cn('schedule__item')}>
                <span className={cn('title')}>Рабочее время</span>
                <span className={cn('value')}>11:00-19:00</span>
              </div>
              <div className={cn('schedule__item')}>
                <span className={cn('title')}>Смена</span>
                <span className={cn('value')}>№1</span>
              </div>
            </Flex>

            <Flex gap={55}>
              <div className={cn('schedule__item')}>
                <span className={cn('title')}>Участок</span>
                <span className={cn('value')}>ЦПУ-1</span>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfilePC;

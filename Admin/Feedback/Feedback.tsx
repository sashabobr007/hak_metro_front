import { Flex, Table, TableProps, Typography } from 'antd';
import React from 'react';
import s from './Feedback.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(s);

interface DataType {
  key: string;
  id: number;
  text: string;
  isPositive: boolean;
}

const Feedback = () => {
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'ID заявки',
      key: 'id',
      dataIndex: 'id',
      width: 200,
    },
    {
      title: 'Текст отзыва',
      key: 'text',
      dataIndex: 'text',
    },
    {
      title: 'Положительный / Отрицательный',
      key: 'isPositive',
      dataIndex: 'isPositive',
      width: 300,
      render: (isPositive) => (isPositive ? 'Да' : 'Нет'),
    },
  ];

  const data: DataType[] = [
    {
      key: '0',
      id: 817271,
      text: 'Профессиональный и доброжелательный сотрудник помог найти мой путь в метро - отличный сервис!',
      isPositive: true,
    },
    {
      key: '1',
      id: 817272,
      text: 'Отзывчивый сотрудник станции метро быстро помог разобраться с маршрутом - очень вежливо и с направлением',
      isPositive: true,
    },
    {
      key: '2',
      id: 817273,
      text: 'Внимательный сотрудник метро дал точное информацию и доброжелательно ответил на все мои вопросы.',
      isPositive: true,
    },
    {
      key: '4',
      id: 817274,
      text: 'Услужливый сотрудник метро помог найти нужный выход - большое спасибо за помощь и доброжелательность!',
      isPositive: true,
    },
  ];

  return (
    <div>
      <Typography.Title level={2} style={{ marginBottom: 40 }}>
        Обратная связь
      </Typography.Title>
      <Typography.Title style={{ marginBottom: 20 }} level={4}>
        Рабочая активность за месяц
      </Typography.Title>

      <Flex gap={15} className={cn('activity-state')}>
        <p className={cn('activity-state__item')}>
          95% <span>положительных отзывов</span>
        </p>
        <p className={cn('activity-state__item')}>
          104 <span>отзывов собрано</span>
        </p>
      </Flex>

      <Typography.Title style={{ marginBottom: 20 }} level={4}>
        Список отзывов пассажиров
      </Typography.Title>
      <Table bordered columns={columns} dataSource={data} />
    </div>
  );
};

export default Feedback;

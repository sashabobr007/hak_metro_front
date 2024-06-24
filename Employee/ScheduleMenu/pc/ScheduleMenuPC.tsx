import { Avatar, Flex, Typography } from 'antd';
import React, { useState } from 'react';
import AddTurn from './forms/AddTurn';
import ChangeWorkTime from './forms/ChangeWorkTime';
import DayOff from './forms/DayOff';
import Schedule from './forms/Schedule';
import Study from './forms/Study';
import WorkDate from './forms/WorkDate';
import Internship from './forms/Internship';
import LunchTime from './forms/LunchTime/LunchTime';
import { LeftOutlined } from '@ant-design/icons';
import NavigationList from '@src/shared/NavigationList/NavigationList';
import s from './ScheduleMenuPC.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(s);

export enum CurrentMenuEnum {
  workDate = 'workDate',
  schedule = 'schedule',
  dayOff = 'dayOff',
  lunchTime = 'lunchTime',
  addTurn = 'addTurn',
  study = 'study',
  changeWorkTime = 'changeWorkTime',
  internship = 'internship',
}

const CurrentMenuObject = {
  workDate: 'Дата выхода',
  schedule: 'Режим работы',
  dayOff: 'Выходной',
  lunchTime: 'Время обеда',
  addTurn: 'Дополнительная смена',
  study: 'Учеба',
  changeWorkTime: 'Изменить время работы',
  internship: 'Стажировка',
};

const ScheduleMenuPC = () => {
  const [currentMenu, setCurrentMenu] = useState<CurrentMenuEnum | null>(null);

  const data = [
    [
      {
        id: 1,
        title: 'Дата выхода',
        text: 'День выхода сотрудника на работу',
        link: CurrentMenuEnum.workDate,
      },
      {
        id: 2,
        title: 'Режим работы',
        text: 'Время работы сотрудника',
        link: CurrentMenuEnum.schedule,
      },
      {
        id: 3,
        title: 'Выходной',
        text: 'Добавить выходной',
        link: CurrentMenuEnum.dayOff,
      },
    ],
    [
      {
        id: 4,
        title: 'Время обеда - 13:30',
        text: 'Время обеда на сегодня',
      },
      {
        id: 5,
        title: 'Дополнительная смена',
        text: 'Смена не по графику',
        link: CurrentMenuEnum.addTurn,
      },
      //   {
      //     id: 6,
      //     title: 'Учеба',
      //     text: 'Учеба с отрывом от производства',
      //     link: CurrentMenuEnum.study,
      //   },
    ],
    [
      //   {
      //     id: 7,
      //     title: 'Изменить время работы',
      //     text: 'Изменения воемени радоты.',
      //     link: CurrentMenuEnum.changeWorkTime,
      //   },
      //   {
      //     id: 8,
      //     title: 'Стажировка',
      //     text: 'Cтажировка сотрудника',
      //     link: CurrentMenuEnum.internship,
      //   },
    ],
  ];

  return (
    <div className={cn('container')}>
      <Typography.Title level={2} style={{ marginBottom: 30 }}>
        Режим работы сотрудника
      </Typography.Title>
      <Flex align="center" gap={15} style={{ marginBottom: 30 }}>
        {currentMenu && <LeftOutlined onClick={() => setCurrentMenu(null)} />}
        <Typography.Title level={4} style={{ marginBottom: 0 }}>
          {currentMenu
            ? CurrentMenuObject[currentMenu]
            : 'Выберите куда хотите внести изменения'}
        </Typography.Title>
      </Flex>

      {!currentMenu && (
        <NavigationList
          onClick={(value) => setCurrentMenu(value as CurrentMenuEnum)}
          list={data}
        />
      )}
      {currentMenu && (
        <Flex gap={15} style={{ marginBottom: 20 }} align="center">
          <Avatar
            size={48}
            src={`/persons/${Math.floor(Math.random() * 10) + 1}.jpg`}
          />
          <Flex vertical gap={5}>
            <span style={{ fontSize: 16 }}>Ольга Прокофьева</span>
            <span style={{ color: '#939393' }}>сотрудник</span>
          </Flex>
        </Flex>
      )}
      {currentMenu === CurrentMenuEnum.addTurn && <AddTurn />}
      {currentMenu === CurrentMenuEnum.changeWorkTime && <ChangeWorkTime />}
      {currentMenu === CurrentMenuEnum.dayOff && <DayOff />}
      {currentMenu === CurrentMenuEnum.internship && <Internship />}
      {currentMenu === CurrentMenuEnum.lunchTime && <LunchTime />}
      {currentMenu === CurrentMenuEnum.schedule && <Schedule />}
      {currentMenu === CurrentMenuEnum.study && <Study />}
      {currentMenu === CurrentMenuEnum.workDate && <WorkDate />}
    </div>
  );
};

export default ScheduleMenuPC;

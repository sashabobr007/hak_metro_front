import {
  BarChartOutlined,
  CopyOutlined,
  NumberOutlined,
  PieChartOutlined,
  PlusOutlined,
  SlidersOutlined,
  SnippetsOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  AdminUrlEnum,
  EmployeeUrlEnum,
  OperatorUrlEnum,
  PassengerUrlEnum,
  SpecialistUrlEnum,
} from '@src/App.types';
import { store } from '@src/store/store';
import { UserRole } from '@src/store/store.types';

export const getMenuItemsMOB = () => {
  const { userRole } = store;

  if (userRole === UserRole.passenger) {
    return [
      {
        key: PassengerUrlEnum.main,
        label: 'Главная',
        icon: <NumberOutlined />,
      },
      {
        key: PassengerUrlEnum.myRequest,
        label: 'Мои заявки',
        icon: <SnippetsOutlined />,
      },
      {
        key: PassengerUrlEnum.createRequest,
        label: 'Новая заявка',
        icon: <PlusOutlined />,
      },
    ];
  }

  if (userRole === UserRole.employee) {
    return [
      {
        key: EmployeeUrlEnum.main,
        label: 'Главная',
        icon: <NumberOutlined />,
      },
      {
        key: EmployeeUrlEnum.tasks,
        label: 'Задачи',
        icon: <SnippetsOutlined />,
      },
      {
        key: EmployeeUrlEnum.scheduleMenu,
        label: 'Настройка графика',
        icon: <SlidersOutlined />,
      },
      {
        key: EmployeeUrlEnum.profile,
        label: 'Профиль',
        icon: <UserOutlined />,
      },
    ];
  }

  if (userRole === UserRole.operator) {
    return [
      {
        key: OperatorUrlEnum.createRequest,
        label: 'Новая заявка',
        icon: <PlusOutlined />,
      },
      {
        key: OperatorUrlEnum.addPassenger,
        label: 'Добавить пассажира',
        icon: <UserAddOutlined />,
      },
      {
        key: OperatorUrlEnum.requestList,
        label: 'Задачи всех сотрудников',
        icon: <SnippetsOutlined />,
      },
      {
        key: OperatorUrlEnum.analytics,
        label: 'Аналитика',
        icon: <PieChartOutlined />,
      },
    ];
  }

  if (userRole === UserRole.specialist) {
    return [
      {
        key: SpecialistUrlEnum.addEmployee,
        label: 'Добавить сотрудника',
        icon: <UserAddOutlined />,
      },
      {
        key: SpecialistUrlEnum.requestList,
        label: 'Задачи сотрудников',
        icon: <SnippetsOutlined />,
      },
      {
        key: SpecialistUrlEnum.analitics,
        label: 'Аналитика',
        icon: <PieChartOutlined />,
      },
    ];
  }

  if (userRole === UserRole.administrator) {
    return [
      {
        key: AdminUrlEnum.addEmployee,
        label: 'Добавить сотрудника',
        icon: <UserAddOutlined />,
      },
      {
        key: AdminUrlEnum.requestList,
        label: 'Задачи сотрудников',
        icon: <SnippetsOutlined />,
      },
      {
        key: AdminUrlEnum.analytics,
        label: 'Аналитика',
        icon: <PieChartOutlined />,
      },
    ];
  }

  return [];
};

import {
  AdminUrlEnum,
  EmployeeUrlEnum,
  OperatorUrlEnum,
  PassengerUrlEnum,
  SpecialistUrlEnum,
} from '@src/App.types';
import { store } from '@src/store/store';
import { UserRole } from '@src/store/store.types';

export const getMenuItems = () => {
  const { userRole } = store;

  if (userRole === UserRole.passenger) {
    return [
      {
        key: PassengerUrlEnum.main,
        label: 'Главная',
      },
      {
        key: PassengerUrlEnum.createRequest,
        label: 'Создать заявку',
      },
      {
        key: PassengerUrlEnum.myRequest,
        label: 'Мои заявки',
      },
      {
        key: PassengerUrlEnum.profile,
        label: 'Профиль',
      },
    ];
  }

  if (userRole === UserRole.employee) {
    return [
      {
        key: EmployeeUrlEnum.main,
        label: 'Главная',
      },
      {
        key: EmployeeUrlEnum.tasks,
        label: 'Список задач',
      },
      {
        key: EmployeeUrlEnum.map,
        label: 'Карта',
      },
      {
        key: EmployeeUrlEnum.analytics,
        label: 'Аналитика',
      },
      {
        key: EmployeeUrlEnum.feedback,
        label: 'Обратная связь',
      },
      {
        key: EmployeeUrlEnum.scheduleMenu,
        label: 'Режим работы сотрудника',
      },
    ];
  }

  if (userRole === UserRole.operator) {
    return [
      {
        key: OperatorUrlEnum.main,
        label: 'Главная',
      },
      {
        key: OperatorUrlEnum.createRequest,
        label: 'Создать заявку',
      },
      {
        key: OperatorUrlEnum.addPassenger,
        label: 'Добавить пассажира',
      },
      {
        key: OperatorUrlEnum.employeeProfile,
        label: 'Профиль сотрудника',
      },
      {
        key: OperatorUrlEnum.requestList,
        label: 'Спискок заявок',
      },
      {
        key: OperatorUrlEnum.analytics,
        label: 'Аналитика',
      },
    ];
  }

  if (userRole === UserRole.specialist) {
    return [
      {
        key: SpecialistUrlEnum.main,
        label: 'Главная',
      },
      {
        key: SpecialistUrlEnum.requestList,
        label: 'Список заявок',
      },
      {
        key: SpecialistUrlEnum.employeeList,
        label: 'Cотрудники',
      },

      {
        key: SpecialistUrlEnum.analitics,
        label: 'Аналитика',
      },
      {
        key: SpecialistUrlEnum.addEmployee,
        label: 'Добавить сотрудника',
      },
    ];
  }

  if (userRole === UserRole.administrator) {
    return [
      {
        key: AdminUrlEnum.main,
        label: 'Главная',
      },
      {
        key: AdminUrlEnum.requestList,
        label: 'Список заявок',
      },
      {
        key: AdminUrlEnum.employeeList,
        label: 'Сотрудники',
      },
      {
        key: AdminUrlEnum.analytics,
        label: 'Аналитика',
      },
      {
        key: AdminUrlEnum.feedback,
        label: 'Обратная связь',
      },
    ];
  }
};

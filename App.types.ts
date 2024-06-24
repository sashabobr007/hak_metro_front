export enum PassengerUrlEnum {
  main = '/',
  createRequest = '/create-request',
  myRequest = '/my-request',
  request = '/my-request/:id',
  profile = '/profile',
  page1 = '/page1',
  page2 = '/page2',
  sandbox = '/sandbox',
}

export enum SpecialistUrlEnum {
  addEmployee = '/add-employee',
  main = '/main',
  employeeProfile = '/employee-profile/:id',
  employeeList = '/employee-list',
  requestList = '/request-list',
  request = '/request-list/:id',
  analitics = '/analitics',
  datalens = 'datalens',
}

export enum EmployeeUrlEnum {
  main = '/main',
  tasks = '/tasks',
  task = '/tasks/task/:id',
  map = '/map',
  analytics = '/analytics',
  feedback = '/feedback',
  scheduleMenu = '/schedule-menu',
}

export enum OperatorUrlEnum {
  employeeProfile = '/employee-profile/:id',
  createRequest = '/create-request',
  addPassenger = '/add-passenger',
  main = '/main',
  requestList = '/request-list',
  request = '/request-list/:id',
  analytics = '/analytics',
  datalens = 'datalens',
}

export enum AdminUrlEnum {
  main = '/main',
  employeeList = '/employee-list',
  requestList = '/request-list',
  analytics = '/analytics',
  feedback = '/feedback',
  createRequest = '/create-request',
  employeeProfile = '/employee-profile/:id',
  addEmployee = '/add-employee',
  request = '/request-list/:id',
  datalens = 'datalens',
}

export enum StatusEnum {
  notApproved = 'Не подтверждена',
  work = 'В работе',
  finished = 'Заявка закончена',
  canceled = 'Отмена',
  pasengerLate = 'Пассажир опаздывает',
  inspectorLate = 'Инспектор опаздывает',
}

export const statusCode = [
  { text: StatusEnum.notApproved, color: '#aaa' },
  { text: StatusEnum.work, color: '#2F80ED' },
  { text: StatusEnum.finished, color: '#09C856' },
  { text: StatusEnum.canceled, color: '#CA0408' },
  { text: StatusEnum.pasengerLate, color: '#F5B401' },
  { text: StatusEnum.inspectorLate, color: '#F5B401' },
];

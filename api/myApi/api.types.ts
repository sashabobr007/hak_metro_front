export enum endpointEnum {
  stations = 'stations',
  pas_info_surnames = 'pas_info_surnames', // +
  pas_info = 'pas_info', // +
  emergency_case_get = 'emergency_case_get', // +
  emergency_case_post = 'emergency_case_post/',
  lunch_time = 'lunch_time',
  list_tasks_employee = 'list_tasks_employee', // +
  list_tasks_archive = 'list_tasks_archive', // +
  request = 'request',
  profile_worker = 'profile_worker',
  change_status = 'change_status', // +
  add_worker = 'add_worker',
  add_request = 'add_request', // +
  add_passenger = 'add_passenger',
  Late_worker = 'Late_worker',
  map_employee = 'map_employee',
  get_worker_info = 'get_worker_info',
  all = 'all',
  del_task = 'del_task',
}

export interface PasInfoType {
  phone: string;
  cat_pas: string;
  id_pas: string;
  fio: string;
  telegram: string;
}

export interface StationType {
  name_station: string;
  id_line: string;
  name_line: string;
  coordinate2: string;
  coordinate1: string;
  id_station: string;
}

export interface AddRequestType {
  id_bid: string;
  id_pas: string;
  datetime: string;
  time3: string;
  time4: string;
  cat_pas: string;
  status: string;
  tpz: string;
  insp_sex_m: string;
  insp_sex_f: string;
  time_over: string;
  id_st1: string;
  id_st2: string;
  otmena_datetime: string;
  neyavka_datetime: string;
  time_perenos: string;
  phone: string;
  telegram: string;
  feedback: string;
  place: 0;
  comment: 0;
  obed: 0;
}

export interface ResponseMessage {
  message: string;
}

export interface EmergencyCaseType {
  id_emergency: number;
  text_emergency: string;
  fio_worker: string;
  id_worker: string;
  date_emergency: string;
}

export interface TaskType {
  id_bid: string;
  st_from: string;
  wait_minutes: number;
  name_station1: string;
  path_minutes: number;
  time4: string;
  start_time: string;
  id_worker: string;
  on_place_time: string;
  time3: string;
  name_station2: string;
  minutes_to_st1: number;
}

export interface ChangeStatusType {
  id_bid: string;
  status: string;
}

export interface EmergencyPost {
  id_emergency: number;
  id_worker: string;
  fio_worker: string;
  text_emergency: string;
  date_emergency: string;
}

export interface RequestType {
  id_bid: string;
  id_pas: string;
  datetime: string;
  time3: string;
  time4: string;
  cat_pas: string;
  status: string;
  tpz: string;
  insp_sex_m: string;
  insp_sex_f: string;
  time_over: string;
  id_st1: string;
  id_st2: string;
  otmena_datetime: any;
  neyavka_datetime: any;
  time_perenos: string;
  phone: string;
  telegram: string;
  feedback: string;
  place: any;
  comment: any;
  obed: any;
  id_worker: string;
  fio: string;
}

export interface MapPoint {
  name_station1: string;
  name_station2: string;
  p1c1: string;
  p1c2: string;
  p2c1: string;
  p2c2: string;
}

export interface RouteCoord {
  start: [number, number];
  end: [number, number];
}

export interface AnalyticDataType {
  total_tasks: number;
  total_completed_tasks: number;
  today_tasks: number;
  time_in_way: number;
  time_in_tasks: number;
  time_free: number;
}

export interface EmergencyPostType {
  id_emergency: number;
  id_worker: string;
  fio_worker: string;
  text_emergency: string;
  date_emergency: string;
}

export interface ProfileType {
  fio_worker: string;
  rank: string;
  sex: string;
  mobile_phone: string;
  phone_job: string;
  tabel_number: string;
  health: string;
  date: string;
  time_work: string;
  uchastok: string;
  smena: string;
}

export interface WorkerAllInfoType {
  id_bid: string;
  id_worker: string;
  st_from: string;
  start_time: string;
  on_place_time: string;
  wait_minutes: number;
  time3: string;
  name_station1: string;
  name_station2: string;
  path_minutes: number;
  time4: string;
  minutes_to_st1: number;
  date: string;
  time_work: string;
  uchastok: string;
  smena: string;
  fio: string;
  rank: string;
  sex: string;
  mobile_phone: string;
  phone_job: string;
  tabel_number: string;
  health: string;
  id_pas: string;
  datetime: string;
  cat_pas: string;
  status: string;
  tpz: string;
  insp_sex_m: string;
  insp_sex_f: string;
  time_over: string;
  id_st1: string;
  id_st2: string;
  otmena_datetime: any;
  neyavka_datetime: any;
  time_perenos: string;
  phone: string;
  telegram: string;
  feedback: string;
  place: any;
  comment: any;
  obed: any;
  end_time: string;
}

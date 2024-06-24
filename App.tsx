import './App.scss';
import { Layout } from 'antd';
import AsideMenu from './shared/AsideMenu/AsideMenu';
import Chat from './shared/Chat/Chat';
import React, { useEffect, useState } from 'react';
import { CloseCircleFilled, WechatFilled } from '@ant-design/icons';
import { PassengerUrlEnum } from './App.types';
import PassengerRoute from './routes/PassengerRoute';
import SpecialistRoute from './routes/SpecialistRoute';
import OperatorRoute from './routes/OperatorRoute';
import EmployeeRoute from './routes/EmployeeRoute';
import AdminRoute from './routes/AdminRoute';
import BottomMenu from './shared/BottomMenu/BottomMenu';
import Header from './shared/Header/Header';
import { store } from './store/store';
import { api } from './api/myApi/api';
import {
  AnalyticDataType,
  MapPoint,
  PasInfoType,
  StationType,
  TaskType,
  endpointEnum,
} from './api/myApi/api.types';
import { observer } from 'mobx-react-lite';
import { getCoordinates } from './utils/getCoordinates';
import { currentDateFormat } from './utils/timestampToTime';
import { AllType } from './store/store.types';
const { Content } = Layout;

export const ChatContext = React.createContext({} as (value: boolean) => void);

const App = observer(() => {
  const [isChat, setIsChat] = useState(false);

  useEffect(() => {
    if (store.stations.length === 0) {
      api
        .get<StationType[]>(endpointEnum.stations)
        .then((data) => store.setStations(data));
    }

    if (store.passengers.length === 0) {
      api
        .get<PasInfoType[]>(endpointEnum.pas_info)
        .then((data) => store.setPassengers(data));
    }

    if (store.passengers.length === 0) {
      api
        .get<PasInfoType[]>(endpointEnum.pas_info)
        .then((data) => store.setPassengers(data));
    }

    if (store.tasks.length === 0) {
      api
        .getWithParams<TaskType[]>(endpointEnum.list_tasks_employee, {
          id_worker: '142',
        })
        .then((data) => store.setTasks(data));
    }

    if (store.tasks.length === 0) {
      api
        .getWithParams<TaskType[]>(endpointEnum.list_tasks_archive, {
          id_worker: '142',
        })
        .then((data) => store.setArTasks(data));
    }

    if (store.tasks.length === 0) {
      api
        .getWithParams<MapPoint[]>(endpointEnum.map_employee, {
          id_worker: '142',
        })
        .then((data) => {
          const result = data.map((item) => ({
            start: getCoordinates(item.name_station1),
            end: getCoordinates(item.name_station2),
          }));
          store.setMapPoints(result);
        });
    }

    if (!store.analyticData) {
      api
        .getWithParams<AnalyticDataType>(endpointEnum.get_worker_info, {
          id_worker: '142',
          date: currentDateFormat(),
        })
        .then((data) => store.setAnalyticData(data));
    }

    api.get<AllType[]>(endpointEnum.all).then((data) => store.setAll(data));
  }, []);

  return (
    <main>
      <Layout>
        <AsideMenu defaultPageUrl={PassengerUrlEnum.main} />
        <ChatContext.Provider value={setIsChat}>
          <Layout>
            <Content
              className="content"
              id="content"
              style={{ overflowY: 'scroll' }}>
              <Header />
              <PassengerRoute />
              <SpecialistRoute />
              <OperatorRoute />
              <EmployeeRoute />
              <AdminRoute />
              <BottomMenu />
            </Content>
          </Layout>
        </ChatContext.Provider>

        <div className="chat__btn" onClick={() => setIsChat(!isChat)}>
          {isChat ? (
            <CloseCircleFilled style={{ fontSize: 30, color: 'red' }} />
          ) : (
            <WechatFilled style={{ fontSize: 30, color: 'red' }} />
          )}
        </div>
        {window.innerWidth > 1024 && <Chat isChat={isChat} setIsChat={setIsChat} />}
      </Layout>
    </main>
  );
});

export default App;

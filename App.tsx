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
import { PasInfoType, StationType, endpointEnum } from './api/myApi/api.types';
const { Content } = Layout;

export const ChatContext = React.createContext({} as (value: boolean) => void);

const App = () => {
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
};

export default App;

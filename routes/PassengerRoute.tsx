import React, { Suspense, lazy } from 'react';
import { PassengerUrlEnum } from '@src/App.types';
import { store } from '@src/store/store';
import { UserRole } from '@src/store/store.types';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

const CreateRequest = lazy(
  () => import('@src/pages/Passanger/CreateRequest/CreateRequest'),
);
const Main = lazy(() => import('@src/pages/Passanger/Main/Main'));
const MyRequest = lazy(() => import('@src/pages/Passanger/MyRequest/MyRequest'));
const Request = lazy(() => import('@src/pages/Passanger/MyRequest/Request/Request'));
const Profile = lazy(() => import('@src/pages/Passanger/Profile/Profile'));
const Sandbox = lazy(() => import('@src/pages/Sandbox/Sandbox'));

const PassengerRoute = observer(() => {
  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        {store.userRole === UserRole.passenger && (
          <>
            <Route path={PassengerUrlEnum.main} element={<Main />} />
            <Route
              path={PassengerUrlEnum.createRequest}
              element={<CreateRequest />}
            />
            <Route path={PassengerUrlEnum.myRequest} element={<MyRequest />} />
            <Route path={PassengerUrlEnum.request} element={<Request />} />
            <Route path={PassengerUrlEnum.profile} element={<Profile />} />
            <Route path={PassengerUrlEnum.sandbox} element={<Sandbox />} />
            <Route path={'/*'} element={<Main />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
});

export default PassengerRoute;

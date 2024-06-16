import React, { Suspense, lazy } from 'react';
import { OperatorUrlEnum } from '@src/App.types';
import { store } from '@src/store/store';
import { UserRole } from '@src/store/store.types';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

const AddPassenger = lazy(
  () => import('@src/pages/Operator/AddPassenger/AddPassenger'),
);
const Analytics = lazy(() => import('@src/pages/Operator/Analytics/Analytics'));
const CreateRequest = lazy(
  () => import('@src/pages/Operator/CreateRequest/CreateRequest'),
);
const EmployeeProfile = lazy(
  () => import('@src/pages/Operator/EmployeeProfile/EmployeeProfile'),
);
const Main = lazy(() => import('@src/pages/Operator/Main/Main'));
const Request = lazy(
  () => import('@src/pages/Operator/RequestList/Request/Request'),
);
const RequestList = lazy(
  () => import('@src/pages/Operator/RequestList/RequestList'),
);

const OperatorRoute = observer(() => {
  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        {store.userRole === UserRole.operator && (
          <>
            <Route
              path={OperatorUrlEnum.createRequest}
              element={<CreateRequest />}
            />
            <Route path={OperatorUrlEnum.addPassenger} element={<AddPassenger />} />
            <Route path={OperatorUrlEnum.analytics} element={<Analytics />} />
            <Route path={OperatorUrlEnum.main} element={<Main />} />
            <Route path={OperatorUrlEnum.requestList} element={<RequestList />} />
            <Route path={OperatorUrlEnum.request} element={<Request />} />
            <Route
              path={OperatorUrlEnum.employeeProfile}
              element={<EmployeeProfile />}
            />
            <Route path={'/*'} element={<CreateRequest />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
});

export default OperatorRoute;

import React, { Suspense, lazy } from 'react';
import { AdminUrlEnum } from '@src/App.types';
import { store } from '@src/store/store';
import { UserRole } from '@src/store/store.types';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';
import CreateRequest from '@src/pages/Admin/CreateRequest/CreateRequest';
import EmployeeProfile from '@src/pages/Admin/EmployeeProfile/EmployeeProfile';
import AddEmployee from '@src/pages/Admin/AddEmployee/AddEmployee';
import Request from '@src/pages/Admin/RequestList/Request/Request';

const Analytics = lazy(() => import('@src/pages/Admin/Analytics/Analytics'));
const EmployeeList = lazy(
  () => import('@src/pages/Admin/EmployeeList/EmployeeList'),
);
const Feedback = lazy(() => import('@src/pages/Admin/Feedback/Feedback'));
const Main = lazy(() => import('@src/pages/Admin/Main/Main'));
const RequestList = lazy(() => import('@src/pages/Admin/RequestList/RequestList'));

const AdminRoute = observer(() => {
  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        {store.userRole === UserRole.administrator && (
          <>
            <Route path={AdminUrlEnum.main} element={<Main />} />
            <Route path={AdminUrlEnum.analytics} element={<Analytics />} />
            <Route path={AdminUrlEnum.employeeList} element={<EmployeeList />} />
            <Route
              path={AdminUrlEnum.employeeProfile}
              element={<EmployeeProfile />}
            />
            <Route path={AdminUrlEnum.feedback} element={<Feedback />} />
            <Route path={AdminUrlEnum.requestList} element={<RequestList />} />
            <Route path={AdminUrlEnum.createRequest} element={<CreateRequest />} />
            <Route path={AdminUrlEnum.addEmployee} element={<AddEmployee />} />
            <Route path={AdminUrlEnum.request} element={<Request />} />
            <Route path={'/*'} element={<Analytics />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
});

export default AdminRoute;

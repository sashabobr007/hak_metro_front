import React, { Suspense, lazy } from 'react';
import { SpecialistUrlEnum } from '@src/App.types';
import { store } from '@src/store/store';
import { UserRole } from '@src/store/store.types';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';

const AddEmployee = lazy(
  () => import('@src/pages/SpecialList/AddEmployee/AddEmployee'),
);
const Analytics = lazy(() => import('@src/pages/SpecialList/Analytics/Analytics'));
const EmployeeList = lazy(
  () => import('@src/pages/SpecialList/EmployeeList/EmployeeList'),
);
const EmployeeProfile = lazy(
  () => import('@src/pages/SpecialList/EmployeeProfile/EmployeeProfile'),
);
const Main = lazy(() => import('@src/pages/SpecialList/Main/Main'));
const Request = lazy(
  () => import('@src/pages/SpecialList/RequestList/Request/Request'),
);
const RequestList = lazy(
  () => import('@src/pages/SpecialList/RequestList/RequestList'),
);

const SpecialistRoute = observer(() => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {store.userRole === UserRole.specialist && (
          <>
            <Route path={SpecialistUrlEnum.addEmployee} element={<AddEmployee />} />
            <Route path={SpecialistUrlEnum.analitics} element={<Analytics />} />
            <Route
              path={SpecialistUrlEnum.employeeList}
              element={<EmployeeList />}
            />
            <Route
              path={SpecialistUrlEnum.employeeProfile}
              element={<EmployeeProfile />}
            />
            <Route path={SpecialistUrlEnum.main} element={<Main />} />
            <Route path={SpecialistUrlEnum.requestList} element={<RequestList />} />
            <Route path={SpecialistUrlEnum.request} element={<Request />} />
            <Route path={'/*'} element={<AddEmployee />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
});

export default SpecialistRoute;

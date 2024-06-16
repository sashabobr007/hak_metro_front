import React, { Suspense, lazy } from 'react';
import { EmployeeUrlEnum } from '@src/App.types';
import { store } from '@src/store/store';
import { UserRole } from '@src/store/store.types';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';
import EmployeeProfile from '@src/pages/Employee/EmployeeProfile/EmployeeProfile';

const Analytics = lazy(() => import('@src/pages/Employee/Analytics/Analytics'));
const Feedback = lazy(() => import('@src/pages/Employee/Feedback/Feedback'));
const Main = lazy(() => import('@src/pages/Employee/Main/Main'));
const Map = lazy(() => import('@src/pages/Employee/Map/Map'));
const ScheduleMenu = lazy(
  () => import('@src/pages/Employee/ScheduleMenu/ScheduleMenu'),
);
const Task = lazy(() => import('@src/pages/Employee/Task/Task'));
const Tasks = lazy(() => import('@src/pages/Employee/Tasks/Tasks'));

const EmployeeRoute = observer(() => {
  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        {store.userRole === UserRole.employee && (
          <>
            <Route path={EmployeeUrlEnum.main} element={<Main />} />
            <Route path={EmployeeUrlEnum.analytics} element={<Analytics />} />
            <Route path={EmployeeUrlEnum.map} element={<Map />} />
            <Route path={EmployeeUrlEnum.task} element={<Task />} />
            <Route path={EmployeeUrlEnum.tasks} element={<Tasks />} />
            <Route path={EmployeeUrlEnum.feedback} element={<Feedback />} />
            <Route path={EmployeeUrlEnum.scheduleMenu} element={<ScheduleMenu />} />
            <Route path={EmployeeUrlEnum.profile} element={<EmployeeProfile />} />
            <Route path={'/*'} element={<Main />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
});

export default EmployeeRoute;

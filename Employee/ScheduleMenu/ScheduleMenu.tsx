import React from 'react';
import ScheduleMenuMOB from './mob/ScheduleMenuMOB';
import ScheduleMenuPC from './pc/ScheduleMenuPC';

const ScheduleMenu = () => {
  return (
    <>
      <ScheduleMenuMOB />
      <ScheduleMenuPC />
    </>
  );
};

export default ScheduleMenu;

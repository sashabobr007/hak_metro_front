import React from 'react';
import TasksPC from './pc/TasksPC';
import TasksMOB from './mob/TasksMOB';

const Tasks = () => {
  return (
    <>
      <TasksPC />
      <TasksMOB />
    </>
  );
};

export default Tasks;

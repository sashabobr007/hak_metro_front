import React from 'react';
import EmployeeProfileMOB from './mob/EmployeeProfileMOB';
import EmployeeProfilePC from './pc/EmployeeProfilePC';

const EmployeeProfile = () => {
  return (
    <>
      <EmployeeProfileMOB />
      <EmployeeProfilePC />
    </>
  );
};

export default EmployeeProfile;

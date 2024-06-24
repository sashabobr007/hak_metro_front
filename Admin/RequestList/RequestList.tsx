import React from 'react';
import RequestListMOB from './mob/RequestListMOB';
import RequestListPC from './pc/RequestListPC';

const RequestList = () => {
  return (
    <>
      {window.innerWidth <= 1025 && <RequestListMOB />}
      <RequestListPC />
    </>
  );
};

export default RequestList;

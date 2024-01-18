import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import {Alert,SuccessAlert} from '@remote-scope/alert';
import DangerousAlert from '@remote-scope/alert'
const Alerts = () => {
  return (
    <>
      <Breadcrumb pageName="Alerts" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">

        <Alert title='Warning' des='This is description!'/>
        <DangerousAlert title='dangerous' des='ok' />
          
          
        </div>
      </div>
    </>
  );
};

export default Alerts;

import React from'react';
import { Outlet } from 'react-router';
import Head from '../../components/Head/index';
import './index.css';

export default function DefaultHeadLayout() {

  return (
    <div className="default-head-layout-container">
      <div className="head-container">
        <Head logoType={2}></Head>
      </div>
      {/* 所有的子级route都会渲染在这里 */}
      <Outlet />
    </div>
  );
}
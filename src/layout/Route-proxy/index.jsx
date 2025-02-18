import React from 'react';
import { Outlet } from 'react-router';
import { useNavigate,useLocation } from 'react-router';

export default function RouteProxy() {
   
  return (
    <Outlet />
  );
}

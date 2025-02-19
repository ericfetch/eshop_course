

import React, { useEffect, useState } from 'react';
export default function UserLogin() {
  
  useEffect(() => {
    const user = new window.EshopUser({
      root: document.getElementById('user'),
    });
  },[]);
  return (
    <div id="user"></div>
  );

}
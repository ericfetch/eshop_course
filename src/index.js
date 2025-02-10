import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from 'react-redux'

import store from './store/index'
import './index.css';

import HomeLayout from './layout/Home-layout';
import Home from './pages/Home'
import Search from './pages/Search';
import GoodsDetail from './pages/GoodsDetail';
import Cart from './pages/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<HomeLayout />}>
          <Route index element={<Home></Home>}></Route>
        </Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/detail' element={<GoodsDetail />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
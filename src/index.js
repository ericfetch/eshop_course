import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';

import store from './store/index';
import './index.css';

import HomeLayout from './layout/Home-layout';
import Home from './pages/Home';
import Search from './pages/Search';
import GoodsDetail from './pages/GoodsDetail';
import Cart from './pages/Cart';
import DoOrder from './pages/DoOrder';
import OrderSuccess from './pages/OrderSuccess';
import Todo from './pages/Todo';
import RouteProxy from './layout/Route-proxy';
import DefaultHheadLayout from './layout/Default-head-layout';

// import CRoute from './CRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes >
        <Route element={<RouteProxy />}>
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<Home></Home>}></Route>
          </Route>
          <Route element={<DefaultHheadLayout />}>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/detail' element={<GoodsDetail />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/order' element={<DoOrder />}></Route>
            <Route path='/order/success' element={<OrderSuccess />}></Route>
            <Route path='/todo' element={<Todo />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <CRoute>
      <CRoute path='/search' element={<Search />}></CRoute>
      <CRoute path='/detail' element={<GoodsDetail />}></CRoute>
      <CRoute path='/cart' element={<Cart />}></CRoute>
      <CRoute path='/order' element={<DoOrder />}></CRoute>
      <CRoute path='/order/success' element={<OrderSuccess />}></CRoute>
      <CRoute path='/todo' element={<Todo />}>
        <CRoute path='/ss' element={<div>ss</div>}></CRoute>
      </CRoute>
    </CRoute> */}
  </Provider>
);
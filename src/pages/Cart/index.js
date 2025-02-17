import React from'react';
import { useNavigate } from 'react-router';
import CheckBox from '../../components/CheckBox';
import Head from '../../components/Head';
import GoodsCard from '../../components/GoodsCard';
import NumOperation from '../../components/NumOperation';
import CartSuspend from '../../components/CartSuspend';

import CartSumary from '../../components/CartSumary';
import './index.css';
export default function Cart() {
  // const navigator = useNavigate();

  const handleSubmit = () => {
    //    navigator('/order'); 
  };
  return (
    <div className="cart-page">
      <CartSuspend />
          
      <div className="cart-container">
        <div className="left">
          <h1>全部商品(35)</h1>
          <div className="cart-select-all">
            <CheckBox />
            <div style={{ marginLeft: '10px' }}>选择全部</div>
          </div>
          <div className="cart-items">
            <div className="cart-item">
              <CheckBox />
              <div style={{ marginLeft: '15px' }}> <GoodsCard type={2} /></div>
              <div style={{ marginLeft: '50px' }}>
                <NumOperation border />
              </div>
            </div>
            <div className="cart-item">
              <CheckBox />
              <div style={{ marginLeft: '15px' }}> <GoodsCard type={2} /></div>
              <div style={{ marginLeft: '50px' }}>
                <NumOperation border />
              </div>
            </div>
            <div className="cart-item">
              <CheckBox />
              <div style={{ marginLeft: '15px' }}> <GoodsCard type={2} /></div>
              <div style={{ marginLeft: '50px' }}>
                <NumOperation border />
              </div>
            </div>
            <div className="cart-item">
              <CheckBox />
              <div style={{ marginLeft: '15px' }}> <GoodsCard type={2} /></div>
              <div style={{ marginLeft: '50px' }}>
                <NumOperation border />
              </div>
            </div>

          </div>
        </div>
        <div className="right">
          <CartSumary onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
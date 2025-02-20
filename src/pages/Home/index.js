import React, { useEffect } from 'react';
import './index.css';
import CateSelect from '../../components/CateSelect';
import Head from '../../components/Head';
import BannerHomeSwiper from '../../components/BannerHomeSwiper';
import BannerTwos from '../../components/BannerTwos';
import UserLogin from '../../components/UserLogin';
import GoodsCard from '../../components/GoodsCard';
import CartSuspend from '../../components/CartSuspend';

export default function Home() {

  return (
    <>
      <CartSuspend/>
      <Head></Head>
      <div className="home-content">
        <div className="function-area">
          <CateSelect></CateSelect>
          <div className='mid-area'>
            <div className="banners-area">
              <BannerHomeSwiper></BannerHomeSwiper>

            </div>
            <div className='banners-area'>
              <BannerTwos></BannerTwos>
              <div style={{ marginLeft: '20px' }}></div>
              <BannerTwos></BannerTwos>
            </div>
          </div>
          <UserLogin></UserLogin>
        </div>
        <div className='recommend-area'>
          {
            new Array(20).fill(0).map((item,index) => {
              return <GoodsCard key={index}></GoodsCard>;
            })
          }
        </div>
      </div>
    </>
  );
}
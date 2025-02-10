

import React from 'react';
import './index.css';
import banner02 from '../../assets/banner02.png';
import banner03 from '../../assets/banner03.png';
export default function BannerTwos() {
    return (
        <div className="banner-twos">
            <div className="title">  二级分类名  </div>
            <div className='banner-imgs'>
                <img src={banner02} alt="" />
                <img src={banner03} alt="" />
            </div>
        </div>
    )
}
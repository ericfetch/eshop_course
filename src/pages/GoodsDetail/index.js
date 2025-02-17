

import { useState } from "react";
import Head from '../../components/Head'
import GoodsCard from '../../components/GoodsCard'
import ImgBox from '../../components/ImgBox'
import goods02 from '../../assets/goods02.png'

import './index.css'
import Tabs from '../../components/Tabs'
import NumOperation from "../../components/NumOperation";
import CartSuspend from "../../components/CartSuspend";

export default function GoodsDetail() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (index) => {
        setTabIndex(index)
    }

    return (
        <div className="goods-detail">
            <CartSuspend/>
         
            <div className="detail-content">
                <div className="left">
                    <div className="goods-info">
                        <div className="goods-img">
                            <ImgBox data={[{ src: goods02, alt: '商品名稱' }]}></ImgBox>
                        </div>
                        <div className="goods-sku">
                            <div className="name">一個很長的商品名稱，我也不知道會有多長，但就是有可能會很長就對了，如果真的很長最多就是這麼長。</div>
                            <div className="sales">已售 9999999</div>
                            <div className="price">
                                <span className='market-price-label'>特价</span>
                                <span className='unit'>TWD</span>
                                <span className='price-num'>2323232</span>
                                <div className='original-price'>
                                    原价 TWD 9999999
                                </div>
                            </div>
                            <div className="buyNum">
                                <span>数量：</span>
                               <NumOperation/>
                            </div>
                            <div className='buy-btn'>加入购物车</div>
                        </div>
                    </div>
                    <div className="goods-detail-render">
                        <Tabs onChange={handleTabChange} data={['商品详情', '商品评价']} />
                        <div className="content">
                            {
                                tabIndex === 0 && <div className="tab-content">
                                    <div className="desc">
                                        <p>商品详情</p> <br />
                                    </div>
                                </div>
                            }
                            {
                                tabIndex === 1 && <div className="tab-content">
                                    <div className="desc">
                                        <p>商品评价</p> <br />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="title">你也许会喜欢^</div>
                    <div className='recommend-list'>
                        <GoodsCard></GoodsCard>
                    </div>
                </div>
            </div>
        </div>
    )
}
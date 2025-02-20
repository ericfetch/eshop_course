import React, { useEffect } from 'react';
import './index.css';
import goods01 from '../../assets/goods01.png';
import useNavigate from '../../CRoute/useNavigate.js';
import useAppear from '../../Hooks/useAppear.js';
export default function GoodsCard(props) {
  const { type = 1 } = props;
  const navigator = useNavigate();
  const [ref, isAppear] = useAppear({
    threshold: 0,
    rootMargin: '40px',
    once: true
  });
  const hanldeToDetailPage = () => {
    // 跳轉到商品詳細頁面
    navigator('/detail');
  };
  
  useEffect(() => {
    console.log('isAppear',isAppear);
    
  },[isAppear]);

  const renderGoodsCard = () => {
    if (type === 1) {
      return (
        <div className="goods-card" onClick={hanldeToDetailPage}>
          <div className="cover">
            <img src={goods01} alt="" />
          </div>
          <div className='info'>
            <div className="name">很長的商品名稱，也不知道要寫什麼但這樣夠長了再多就刪掉。</div>
            <div className="sales">
              999,999 售出
            </div>
            <div className="price">
              <span className='unit'>TWD</span>
              <span className='value'>1,234,567</span>
            </div>
          </div>
        </div>
      );
    } else if (type === 2) {
      return (
        <div className="goods-card-type2" onClick={hanldeToDetailPage}>
          <div className="cover">
            <img src={goods01} alt="" />
          </div>
          <div className='info'>
            <div className="name">很長的商品名稱，也不知道要寫什麼但這樣夠長了再多就刪掉。</div>
            <span className='unit'>TWD</span>
            <span className='value'>1,234,567</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="carrot-container">
          <div className="image-wrapper">
            <img
              src="/images/carrots.jpg"
              alt="一堆橙色胡萝卜"
            />
          </div>
          <p className="carrot-text">
            某個很長但名稱，被截斷...
          </p>
        </div>
      );
    }
  };

  return (
    <div ref={ref}>
      {
        renderGoodsCard()
      }
    </div>
  );
}
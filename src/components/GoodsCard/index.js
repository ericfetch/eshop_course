


import './index.css'
import goods01 from '../../assets/goods01.png'

export default function GoodsCard() {
    return (
        <div className="goods-card">
            <div className="cover">
                <img src={goods01} alt="" />
            </div>
            <div className='info'>
                <div class="name">很長的商品名稱，也不知道要寫什麼但這樣夠長了再多就刪掉。</div>
                <div class="sales">
                    999,999 售出
                </div>
                <div class="price">
                    <span className='unit'>TWD</span>
                    <span className='value'>1,234,567</span>
                </div>
            </div>
        </div>
    )
}
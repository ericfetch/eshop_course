import CheckBox from "../../components/CheckBox";
import Head from "../../components/Head";
import GoodsCard from "../../components/GoodsCard";
import NumOperation from "../../components/NumOperation"
import CartSuspend from "../../components/CartSuspend";
import goods01 from "../../assets/goods01.png";
import './index.css'

export default function Cart() {
    return (
        <div className="cart-page">
            <CartSuspend />
            <div className="head-container">
                <Head logoType={2} />
            </div>
            <div className="cart-container">
                <div class="left">
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
                <div class="right">
                    <div className="first-row">
                        <div className="title">明细</div>
                        <div className="des">
                            <span>已选</span>
                            <span style={{ fontSize: '20px', fontWeight: 500, color: '#1F2022', margin: '0 4px' }}>20</span>
                            <span>件商品</span>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="goods-preview">
                            <img src={goods01} alt="" srcset="" />
                        </div><div className="goods-preview">
                            <img src={goods01} alt="" srcset="" />
                        </div>
                        <div className="goods-preview">
                            <img src={goods01} alt="" srcset="" />
                        </div>
                        <div className="goods-preview">
                            <img src={goods01} alt="" srcset="" />
                        </div>
                        <div className="goods-preview">
                            <img src={goods01} alt="" srcset="" />
                        </div>
                        <div className="goods-preview more">
                            等20件商品
                        </div>
                    </div>
                    <div className="third-row">
                        <div>商品总价</div>
                        <div className="price"><span>TWD</span>
                            <span>99999</span>
                        </div>
                    </div>
                    <div className="submit-btn">结账去</div>
                </div>
            </div>
        </div>
    )
}
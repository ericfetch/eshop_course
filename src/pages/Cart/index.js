import CheckBox from "../../components/CheckBox";
import Head from "../../components/Head";
import GoodsCard from "../../components/GoodsCard";
import NumOperation from "../../components/NumOperation";
import './index.css'

export default function Cart() {
    return (
        <div className="cart-page">
            <div className="head-container">
                <Head logoType={2} />
            </div>
            <div className="cart-container">
                <h1>全部商品(35)</h1>
                <div className="cart-select-all">
                    <CheckBox />
                    <div style={{ marginLeft: '10px' }}>选择全部</div>
                </div>
                <div className="cart-items">
                    <div className="cart-item">
                        <CheckBox />
                        <GoodsCard type= {2} />
                        <NumOperation />
                    </div>
                </div>
            </div>
        </div>
    )
}
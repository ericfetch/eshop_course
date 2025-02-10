import CartSumary from "../../components/CartSumary";
import Head from "../../components/Head";
import './index.css'


export default function DoOrder() {
    return (
        <div className="do-order">
            <div class="head-container">
                <Head  logoType={2} />
            </div>
            <div className="order-container">
                <div class="left"></div>
                <div class="right">
                    <CartSumary />
                </div>
            </div>
        </div>
    )
}
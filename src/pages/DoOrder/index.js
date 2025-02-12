import AddressSelect from "../../components/AddressSelect";
import CartSumary from "../../components/CartSumary";
import Head from "../../components/Head";
import PaySelect from "../../components/PaySelect";
import './index.css'


export default function DoOrder() {
    return (
        <div className="do-order">
            <div className="head-container">
                <Head  logoType={2} />
            </div>
            <div className="order-container">
                <div className="left">

                    <div className="address-area">
                        <AddressSelect />
                    </div>
                    <div className="pay-area">
                        <PaySelect />
                    </div>
                    <div className="invoice-area"></div>
                </div>
                <div className="right">
                    <CartSumary />
                </div>
            </div>
        </div>
    )
}
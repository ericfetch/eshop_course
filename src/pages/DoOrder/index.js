import AddressSelect from "../../components/AddressSelect";
import CartSumary from "../../components/CartSumary";
import Head from "../../components/Head";
import PaySelect from "../../components/PaySelect";
import { useNavigate } from "react-router";
import './index.css'


export default function DoOrder() {
    const navigate = useNavigate();

    const handleNext = () => {  
        navigate('/order/success')
    }
    return (
        <div className="do-order">
         
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
                    <CartSumary onSubmit={handleNext} />
                </div>
            </div>
        </div>
    )
}
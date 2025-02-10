
import { useNavigate } from 'react-router'
import './index.css'
import cartIcon from '../../assets/cart_icon.png'

export default function CartSuspend() {

    const navigator = useNavigate();
     
    const handleToCartPage = () => {
        navigator('/cart')
    }

    return (

        <div className='cart-suspend' onClick={handleToCartPage} >
            
            <img className='cart-icon' src={cartIcon} alt="" srcset="" />
            <div>购物车</div>
            <div className='suspend-count'>12</div>
        </div>
    )
}
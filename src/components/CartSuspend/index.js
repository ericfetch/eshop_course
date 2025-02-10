

import './index.css'
import cartIcon from '../../assets/cart_icon.png'

export default function CartSuspend() {

    return (

        <div className='cart-suspend' >
            
            <img className='cart-icon' src={cartIcon} alt="" srcset="" />
            <div>购物车</div>
            <div className='suspend-count'>12</div>
        </div>
    )
}
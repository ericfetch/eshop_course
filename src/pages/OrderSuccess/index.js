import Head from '../../components/Head'
import success_icon from '../../assets/success.png'

import './index.css'    

export default function OrderSuccess() {
    return (
        <div className="order-success">
           
            <div className='success-container'>
                <img className='success-icon' src={success_icon} alt="" />
                <div style={{marginTop: '20px'}}>下单成功！</div>
                <div className='btn'>返回首页</div>
            </div>
        </div>
    )
}

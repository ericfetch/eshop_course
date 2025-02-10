import { useState } from 'react'

import reduce_icon from '../../assets/reduce_icon.png'
import plus_icon from '../../assets/plus_icon.png'
import './index.css'
export default function NumOperation(props) {
    const { border = false } = props;
    const [value, setValue] = useState(1);

    const countNum = (actionType) => {
        if (actionType === 'plus') {
            setValue(value + 1);
        } else if (actionType === 'reduce' && value >= 1) {
            setValue(value - 1);
        }
    }

    return <div class={`numOperation ${border ? 'border' : ''}`}>
        <div className='num-btn' onClick={() => { countNum('reduce') }}>
            <img src={reduce_icon} alt="" srcset="" />
        </div>
        <div className='num-value'>{value}</div>
        <div className='num-btn' onClick={() => { countNum('plus') }}>
            <img src={plus_icon} alt="" srcset="" />
        </div>
    </div>
}
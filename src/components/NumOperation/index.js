import { useState } from'react'
import './index.css'
export default function NumOperation(props) {
    const [value, setValue]=useState(1);

    return <div class="numOperation">
        <div className='num-btn' onClick={()=>setValue(value-1)}>-</div>
        <div>{value}</div>
        <div className='num-btn' onClick={()=>setValue(value+1)}>+</div>
    </div>
}
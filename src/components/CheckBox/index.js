
import { useState } from 'react'
import img_check_active from '../../assets/check_active.png'
import './index.css'
export default function CheckBox(props) {

    const [checked, setChecked] = useState(props.checked)

    return (
        <div className="checkbox">
            {
                checked ? (
                    <div class="unchecked" onClick={() => setChecked(false)}></div>
                ) : (<img className='checked' src={img_check_active} alt="check" onClick={() => setChecked(true)} />)
            }
        </div>
    )
}
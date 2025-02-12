
import { useEffect, useState } from 'react';
import img_radio_checked from '../../assets/form_radio_checked.png';
import './index.css'
export default function Radio(props) {
    const { onChange = () => { }, checked = false } = props;
    const [active, setActive] = useState(checked);

    const handleCheck = (value) => {
        setActive(value);
        onChange()
    }
    useEffect(() => {
        setActive(checked);
    }, [checked])

    return (
        <div className="form-radio">
            {
                checked ?
                    <img style={{ width: '20px', height: '20px' }} onClick={() => { handleCheck(false) }} src={img_radio_checked} alt="" />

                    :
                    <div onClick={() => { handleCheck(true) }} className="radio-checked"></div>
            }
        </div>

    )
}
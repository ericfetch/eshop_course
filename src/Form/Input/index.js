
import './index.css'
export default function Input(props) {
    const { placeholder, value, onChange } = props;
    return (
        <input placeholder={placeholder} value={value} onChange={onChange} className="form-input" type="text " />
    )
}
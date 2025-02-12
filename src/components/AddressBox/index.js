import img_local from '../../assets/local.png'
import img_del from '../../assets/del.png'
import './index.css'
export default function AddressBox(props) {
    const { data = {}, active = false,onSelect = () => { } } = props;

    const hanldeClick = () => {
        onSelect()
    }
    return (
        <div
            onClick={hanldeClick}
            className={`address-box ${active ? 'active' : ''}`}>
            <div className="address-first">

                <div className="province">
                    <img className='local-icon' src={img_local} alt="" />
                    <div>{data.name}</div>
                </div>

                <img src={img_del} alt="" />

            </div>

            <div className="address">
                {data.address}
            </div>

            <div className="contact">
                {data.contact}
            </div>

        </div>
    )
}
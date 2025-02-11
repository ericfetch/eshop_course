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
            <div class="address-first">

                <div class="province">
                    <img className='local-icon' src={img_local} alt="" />
                    <div>{data.name}</div>
                </div>

                <img src={img_del} alt="" />

            </div>

            <div class="address">
                {data.address}
            </div>

            <div class="contact">
                {data.contact}
            </div>

        </div>
    )
}
import img_local from '../../assets/local.png'
import img_del from '../../assets/del.png'
import './index.css'
export default function AddressBox() {

    return (
        <div className="address-box">
            <div class="first">
                <img src={img_local} alt="" />
                <div class="province">
                    台南市 中西区
                </div>
                <img src={img_del} alt="" />

            </div>

            <div class="address">敬業三路 888 巷 77 弄 20號 5 樓之 2</div>

            <div class="contact">
                王小明 0912345678
            </div>

        </div>
    )
}
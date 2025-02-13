import { useEffect, useState } from "react";
import AddressBox from "../AddressBox";
import AddressModal from "../AddressModal";
import img_default_local from "../../assets/img_default_location.png";
import add_icon from "../../assets/plus_icon.png";
import './index.css'
export default function AddressSelect() {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null);
    const [addressIndex,setAddressIndex]=useState(0)
    const [addVisible, setAddVisible] = useState(false);
    useEffect(() => {
        setData([
            {
                name: "Local Address",
                address: "123 Main St, Anytown USA",
                contact: "123-456-7890"
            },
            {
                name: "Local Address",
                address: "123 Main St, Anytown USA",
                contact: "123-456-7890"
            },
            {
                name: "Local Address",
                address: "123 Main St, Anytown USA",
                contact: "123-456-7890"
            },
            {
                name: "Local Address",
                address: "123 Main St, Anytown USA",
                contact: "123-456-7890"
            }
        ])
    }, [])

    const handleAddressSelect = (item, index) => {
        setSelected(item);
        setAddressIndex(index)
    }
    return (
        <div className="address-select">
            <div className="first">
                <div className="address-title">收货地址</div>
                <div className="address-add small">
                    <img src={add_icon} alt="" />
                    <span style={{ marginLeft: "10px" }} onClick={() => { setAddVisible(true) }}>新增地址</span>
                </div>
            </div>
            {
                data.length > 0 ?
                    <div className="address-list">
                        {
                            data.map((item, index) => {
                                return <AddressBox 
                                key={index} 
                                data={item} 
                                active={addressIndex===index}
                                onSelect={()=>{handleAddressSelect(item,index)}}/>
                            })
                        }
                    </div>
                    : <div className="empty">
                        <img src={img_default_local} alt=""  />
                        <div className="address-add">
                            <img src={add_icon} alt=""  />
                            <span style={{ marginLeft: "10px" }}>新增地址</span>
                        </div>
                    </div>
            }
            <AddressModal visible={addVisible} onClose={() => { setAddVisible(false) }} />
        </div>
    )
}
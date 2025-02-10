import { useState } from "react";
import AddressBox from "../AddressBox";

export default function AddressSelect() {
    const [data, setData]         = useState([]);

    return (
        <div className="address-select">
            {
                data.length > 0 ?
                    <div className="address-list">
                        <AddressBox/>
                    </div>
                    : <div>No address found</div>
            }
        </div>
    )
}
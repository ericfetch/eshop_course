
import React, { useState } from "react";
import "./index.css";
export default function ImgBox(props) {
    const { data=[] } = props;
    const [current, setCurrent] = useState(0);

    return (
        <div className="img-box">
            <img src={data[current]?.src} alt="" />
            <div class="img-box-swiper">
                {
                    data.length > 0 && data.map((item, index) => (
                        <div key={index} className={`img-box-swiper-item ${current === index ? 'active' : ''}`} onClick={() => setCurrent(index)}>
                            <img src={item.src} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
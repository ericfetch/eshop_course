
import React, { useState } from "react";
import "./index.css";

export default function RadioGroup(props) {
    const { children } = props
    const [checkedIndex, setCheckedIndex] = useState(null);
    const handleRadioChange = (index) => {
        setCheckedIndex(index);
    }

    return (
        <div className="radio-group">
            {children.map((child, index) => {
                return (
                    <div>{
                        React.cloneElement(child, {
                            onChange: () => { handleRadioChange(index) },
                            checked: checkedIndex === index
                        })
                    }</div>
                )
            })}
        </div>
    )

}

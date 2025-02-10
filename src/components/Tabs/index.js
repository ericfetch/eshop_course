
import React, { useState } from 'react'
import './index.css'

export default function Tabs(props) {
    const { data = [], onChange = () => { } } = props;
    const [activeTab, setActiveTab] = useState(0)
    const handleClick = (index) => {
        setActiveTab(index)
        onChange(index)
    }
    return (
        <div className="tabs">
            {data.map((item, index) => (
                <div className={`tab ${activeTab === index ? 'active' : ''}`} key={index} onClick={() => { handleClick(index) }}>{item}</div>
            ))
            }

        </div>
    )
}
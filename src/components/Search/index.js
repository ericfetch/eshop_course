import React, { useState } from 'react'
import { useNavigate} from 'react-router'
import './index.css'

export default function Search() {

    const [focusing, setFocusing] = useState(false) // 控制搜索框是否聚焦
    let navigate = useNavigate();

    const handleToSearchPage = () => {  
        // 跳转到搜索结果页面
        navigate("/search")
    }
    return (
        <div className="search-wrapper">
            <div className="search">
                <input type="text"
                    placeholder="Search"
                    onFocus={() => setFocusing(true)}
                    onBlur={() => setFocusing(false)} />
                <div className='button' onClick={handleToSearchPage}>搜寻</div>
            </div>

            <div className="keys">
                <div className="key">显示器支架</div>
                <div className="key">游戏本</div>
                <div className="key">平板电脑</div>
            </div>
            {
                focusing && <div className="pannel">
                    <div className="keys-history">
                        <div className="title">搜寻历史</div>
                    </div>
                    <div className="lookhistory">
                        <div className="title">商品查看历史</div>
                    </div>
                </div>
            }
        </div>
    )
}


import React, { useState } from "react";
import './index.css'
import Avatar from "../Avatar";


export default function UserLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    return (
        <div className="user-login">
            <div className="user-base-info">
                <Avatar></Avatar>
                <div>
                    <div className="name">hi~晚上好</div>
                    <div className="sub-title">注册</div>
                </div>
            </div>
            <div className="tips">
                <div className="title">
                    登入購物平臺後更多優惠
                </div>
                <div className="sub-title">登入可享，專屬優惠，貼心推薦！</div>
            </div>
            <div className="action">
                立即登入
            </div>
        </div>
    )

}
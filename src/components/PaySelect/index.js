import Input from "../../Form/Input"
import Radio from "../../Form/Radio"
import useRadioGroup from "../../Form/RadioGroup/useRadioGroup.js"
import useValidate from "../../Form/useValidate.js"
import "./index.css"
export default function PaySelect() {
    const [register,value]  = useRadioGroup();
    const [InputCreditCard, values, errors] = useValidate(
        <Input placeholder="xx-xx-xx" />,
        { required: true, creditCard: true }
    )

    console.log(errors,value);
    return (
        <div className="pay-select">
            <div className="pay-select-title">付款方式</div>
            <div className="pay-select-form">

                <div className="pay-select-card-radio">
                    <Radio {...register()} />
                    <div className="pay-select-card-radio-label">信用卡一次付清</div>
                </div>
                <div className="pay-select-card">
                    <div>信息卡卡号<span className="required">*</span></div>
                    <div>信息卡有效期限<span className="required">*</span></div>
                    <div>安全驗證碼<span className="required">*</span></div>
                    <div> {InputCreditCard}</div>
                    <div><Input placeholder="MM/YY" /></div>
                    <div><Input placeholder="CVV" /></div>

                </div>
                <div className="pay-select-card-note">本公司採用 OOXX 科技 OX 金流交易系統，消費者刷卡時直接在銀行端系統中交易，本公司不會留下您的信用卡資料，以保障你的權益，資料傳輸過程採用嚴密的 SSL 2048bit 加密技術保護。</div>

            </div>
            <div className="pay-select-form">
                <div className="pay-select-card-radio">
                    <Radio {...register()} />
                    <div className="pay-select-card-radio-label">ATM轉帳</div>
                </div>
                <div className="pay-select-card-note">下一步將連至第三方金流選擇銀行並取得繳費資訊</div>
            </div>

        </div>
    )
}
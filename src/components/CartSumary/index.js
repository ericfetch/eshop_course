
import './index.css'
import goods01 from "../../assets/goods01.png";
export default function CartSumary(props) {
    const { onSubmit=()=>{} } = props;

    const handleClick = () => { 
        onSubmit()
    }
    return (
        <div className="cart-sumary">
            <div className="first-row">
                <div className="title">明细</div>
                <div className="des">
                    <span>已选</span>
                    <span style={{ fontSize: '20px', fontWeight: 500, color: '#1F2022', margin: '0 4px' }}>20</span>
                    <span>件商品</span>
                </div>
            </div>
            <div className="second-row">
                <div className="goods-preview">
                    <img src={goods01} alt=""  />
                </div><div className="goods-preview">
                    <img src={goods01} alt=""  />
                </div>
                <div className="goods-preview">
                    <img src={goods01} alt=""  />
                </div>
                <div className="goods-preview">
                    <img src={goods01} alt=""  />
                </div>
                <div className="goods-preview">
                    <img src={goods01} alt=""  />
                </div>
                <div className="goods-preview more">
                    等20件商品
                </div>
            </div>
            <div className="third-row">
                <div>商品总价</div>
                <div className="price"><span>TWD</span>
                    <span>99999</span>
                </div>
            </div>
            <div className="submit-btn" onClick={handleClick}>结账去</div>
        </div>
    )
}
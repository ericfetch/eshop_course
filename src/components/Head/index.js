import { useNavigate } from'react-router'
import './index.css'
import logo from '../../assets/logo.png'
import logo_red from '../../assets/logo_red.png'
import cartlogo from '../../assets/cart_logo.png'
import Search from '../Search'

export default function Head(props) {
    const {logoType=1}=props;
    const navigate = useNavigate();
    const handleBackHome = () => {
        navigate('/')
    }
    return (
        <div className="head">
            <div className="logo" onClick={handleBackHome}>
                <img src={logoType===1? logo: logo_red} alt="logo"></img>
            </div>
            <div className="search-container">
               <Search></Search>
            </div>
            <div className="cart">
                <img src={cartlogo} alt="" />
            </div>
        </div>
    )
}
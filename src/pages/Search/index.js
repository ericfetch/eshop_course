import Head from "../../components/Head";
import GoodsCard from "../../components/GoodsCard";
import CartSuspend from "../../components/CartSuspend";
import './index.css'

export default function Search() {

    return (
        <div className="search-page">
            <CartSuspend />
        

            <div className="search-list">
            <GoodsCard></GoodsCard>
            <GoodsCard></GoodsCard>
            <GoodsCard></GoodsCard>
            <GoodsCard></GoodsCard>
            <GoodsCard></GoodsCard>
            <GoodsCard></GoodsCard>
            <GoodsCard></GoodsCard>
            <GoodsCard></GoodsCard>
            <GoodsCard></GoodsCard>
            <GoodsCard></GoodsCard>
            <GoodsCard></GoodsCard>
            <GoodsCard></GoodsCard>     
            </div>
        </div>
    )
}
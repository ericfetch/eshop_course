import './index.css'
import CateSelect from "../../components/CateSelect";
import Head from "../../components/Head";
import BannerHomeSwiper from '../../components/BannerHomeSwiper';
import BannerTwos from '../../components/BannerTwos';
import UserLogin from '../../components/UserLogin';
import GoodsCard from '../../components/GoodsCard';

export default function Home() {

    return (
        <>
            <Head></Head>
            <div className="home-content">
                <div className="function-area">
                    <CateSelect></CateSelect>
                    <div className='mid-area'>
                        <div className="banners-area">
                            <BannerHomeSwiper></BannerHomeSwiper>

                        </div>
                        <div className='banners-area'>
                            <BannerTwos></BannerTwos>
                            <div style={{ marginLeft: '20px' }}></div>
                            <BannerTwos></BannerTwos>
                        </div>
                    </div>
                    <UserLogin></UserLogin>
                </div>
                <div className='recommend-area'>
                    <GoodsCard></GoodsCard>
                    <GoodsCard></GoodsCard>
                    <GoodsCard></GoodsCard>
                    <GoodsCard></GoodsCard>
                    <GoodsCard></GoodsCard>
                    <GoodsCard></GoodsCard>
                </div>
            </div>
        </>
    )
}
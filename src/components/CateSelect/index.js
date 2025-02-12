import { useState } from 'react'
import './index.css'
import img_title from '../../assets/cate_select_title.png'
import img_right_arrow from '../../assets/right_arrow.png'
import img_right_arrow_active from '../../assets/right_arrow_active.png'


export default function CateSelect() {
    const [isOpen, setIsOpen] = useState(false)
    const [index, setIndex] = useState(0)
    const [data, setData] = useState([{ name: '电脑' }, { name: '手机' }, { name: '相机' }])

    const handleMouseUp = (i) => {
        setIsOpen(true)
        setIndex(i)
    }

    return (
        <div className={`cate-select ${isOpen ? 'opened' : ''}`}   >
            <img className='cate-select-title' src={img_title} alt="" srcset="" />
            {
                data.length > 0 ? (
                    data.map((item, i) => {
                        return (
                            <div
                                onMouseEnter={() => { handleMouseUp(i) }}
                                onMouseLeave={() => { setIsOpen(false); setIndex(0); }}
                                className={`cate-select-item ${i === index ? 'active' : ''}`}>
                                <div>{item.name}</div>
                                <img className='cate-select-item-arrow' src={img_right_arrow_active} alt="" srcset="" />
                            </div>
                        )
                    })
                ) : (
                    <div></div>
                )
            }
            {
                isOpen && (
                    <div className="cate-select-pannel">
                        <div className='cate-select-pannel-title'>电脑</div>
                        <div className='cate-select-pannel-item'>笔记本</div>
                    </div>
                )

            }
        </div>
    )
}
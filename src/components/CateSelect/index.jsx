import React, { useState } from 'react';
import './index.css';
import img_title from '../../assets/cate_select_title.png';
import img_right_arrow from '../../assets/right_arrow.png';
import img_right_arrow_active from '../../assets/right_arrow_active.png';


export default function CateSelect(props) {
  const { onchange=() => {} } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([
    { name: '电脑',children: [{ name: '笔记本' }, { name: '台式机' }] }, 
    { name: '手机',children: [{ name: '小米' }, { name: '华为' }] },
    { name: '相机',children: [{ name: '单反' }, { name: 'dslr' }] },
    { name: '耳机',children: [{ name: '蓝牙耳机' }, { name: '有线耳机' }] },
    { name: '路由器',children: [{ name: '无线路由器' }, { name: '有线路由器' }] },
    { name: '电源',children: [{ name: '电源适配器' }, { name: '电源插座' }] },
    { name: '鼠标',children: [{ name: '鼠标垫' }, { name: '鼠标套装' }] },
    { name: '键盘',children: [{ name: '机械键盘' }, { name: '塑料键盘' }] },
    { name: '显示器',children: [{ name: '显示器壳' }, { name: '显示器支架' }] },
    { name: '内存',children: [{ name: '固态内存' }, { name: 'DDR4内存' }] },
    { name: '硬盘',children: [{ name: '固态硬盘' }, { name: '机械硬盘' }] },
  ]);

  const handleMouseUp = (i) => {
    setIsOpen(true);
    setIndex(i);
  };

  const handleClick = (name) => {
    onchange(name);
  };

  return (
    <div className={`cate-select ${isOpen ? 'opened' : ''}`}   >
      <img className='cate-select-title' src={img_title} alt="" srcSet="" />
      {
        data.length > 0 ? (
          data.map((item, i) => {
            return (
              <div
                key={i}
                onMouseEnter={() => { handleMouseUp(i); }}
                onMouseLeave={() => { setIsOpen(false); setIndex(0); }}
                className={`cate-select-item ${i === index ? 'active' : ''}`}>
                <div>{item.name}</div>
                <img className='cate-select-item-arrow' src={img_right_arrow_active} alt="" srcSet="" />
              </div>
            );
          })
        ) : (
          <div></div>
        )
      }
      {
        isOpen && (
          <div className="cate-select-pannel">
            {
              data.length>0&&data.map((item, i) => {
                return (
                  <>
                    <div className='cate-select-pannel-title'>{item.name}</div>
                    <div className='cate-select-pannel-content'>
                      {
                        item.children.map((child, j) => {
                          return (
                            <div key={j} className='cate-select-pannel-item' onClick={() => {handleClick(child.name);}}>{child.name}</div>
                          );
                        })
                      }
                    </div>
                  </>
                );
              })
                
            }
            
          </div>
        )

      }
    </div>
  );
}
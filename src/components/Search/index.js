import React, { useEffect, useRef, useState } from 'react';
import { useNavigate,useLocation } from 'react-router';
import  useSearchKeys  from '../../Hooks/useSearchKeys.js';
import './index.css';
import axios from 'axios';
import useGoodsRecords from '../../Hooks/useGoodsRecords.js';

export default function Search() {

  const [focusing, setFocusing] = useState(false); // 控制搜索框是否聚焦
  const [searchkeys, setSearchkeys,clearSearchkeys]=useSearchKeys(); // 搜索历史
  const [records,clearRecords]=useGoodsRecords(); // 商品记录
  const inputRef = useRef(null );
  const navigate = useNavigate();
  const location = useLocation();


  const search = (key) => {
    // axios.get('/api/search', {
    //   params: {
    //     key: key
    //   }
    // }).then(res => {
    //   console.log(res.data);
      
    // });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get('key');
    if (key) {
      setSearchkeys(key);
      inputRef.current.value = key;
      search(key);
    }
  }, []);

  const handleSearch=() => {
    const key=inputRef.current.value;
    if(location.pathname === '/search'){
      setSearchkeys(key);
      search(key);
    }else{
      setSearchkeys(key);
      navigate('/search?key='+key);
    }
  };


 
  return (
    <div className="search-wrapper">
      <div className="search">
        <input type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Search"
          onFocus={() => setFocusing(true)}
          onBlur={() => setFocusing(false)} />
        <div className='search-bt' onClick={handleSearch}>搜寻</div>
      </div>

      <div className="keys">
        {searchkeys.length>0&&searchkeys.map((key,index) => {
          return <div className="key" key={index} onClick={() => handleSearch(key)}>{key}</div>;
        })}
      </div>
      {
        focusing && <div className="pannel">
          <div className="keys-history">
            <div className="title">搜寻历史</div>
            {searchkeys.length>0&&searchkeys.map((key,index) => {
              return <div className="key" key={index} onClick={() => handleSearch(key)}>{key}</div>;
            })}
          </div>
          <div className="lookhistory">
            <div className="title">商品查看历史</div>
            {records.length>0&&records.map((record,index) => {
              return <div className="record" key={index} onClick={() => navigate('/goods/'+record.id)}>{record.title}</div>;
            })}
          </div>
        </div>
      }
    </div>
  );
}
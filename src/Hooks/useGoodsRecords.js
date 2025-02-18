
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function useGoodsRecords() {
  const [goodsRecords, setGoodsRecords] = useState([]);


  useEffect(() => {
    // 调用接口获取商品记录
    // Send a POST request

    // GET request for remote image in node.js
    axios({
      method: 'get',
      url: '/api/search',
     
    })
      .then(function (response) {
        const {data={}}=response;
        const {data:records}=data;
        setGoodsRecords(records);
      });
    
  },[]);


  const clearGoodsRecords = () => {
    // 调用接口清空商品记录

    // 清空本地数据
    setGoodsRecords([]);
  };

  return [goodsRecords, clearGoodsRecords];
}
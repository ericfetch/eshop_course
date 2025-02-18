
import { useEffect, useState } from 'react';
export default function useSearchKeys () {

  // initialize searchKeys state
  
  const [searchKeys, setSearchKeys] = useState([]);

  useEffect(() => {
    localStorage.getItem('searchKeys') && setSearchKeys(JSON.parse(localStorage.getItem('searchKeys')));
  },[]);

  const addSearchKey = (key) => {
    if (searchKeys.includes(key)) {
      return;
    }
    localStorage.setItem('searchKeys', JSON.stringify([...searchKeys, key]));
    setSearchKeys([...searchKeys, key]);

  };

  const clearSearchkeys = () => {
    localStorage.setItem('searchKeys', JSON.stringify([]));
    setSearchKeys([]);
  };

  return [searchKeys, addSearchKey,clearSearchkeys];
}
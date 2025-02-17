import react, { useEffect, useState } from 'react';

export default function useUrl() {
  const [url, setUrl] = useState(window.location.pathname);

  useEffect(() => {
    window.onpopstate = () => {
        
      setUrl(window.location.pathname);
    };
  }, []);

  return [url, setUrl];
}
import react from 'react';

export default function useNavigate() {
  const navaigate = (href) => {
    window.history.pushState({}, '', href);
    dispatchEvent(new PopStateEvent('popstate'));
  };
   
  return navaigate;
}
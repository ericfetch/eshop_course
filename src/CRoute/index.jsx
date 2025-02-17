import React, { useEffect } from 'react';
import useUrl from './useUrl';

const urlMap = {};

export default function CRoute(props) {
  const { children, path, element, filter } = props;
  const [u, _] = useUrl();


  // 递归处理子路由
  const parseRoutes = (child, url, ele) => {
    if (child === undefined) {
      urlMap[url] = ele;
    } else {
      if (Array.isArray(child)) {
        child.forEach((c) => {
          parseRoutes(c.props.children, c.props.path, c.props.element);
        });
      } else {
        urlMap[url] = ele;
        parseRoutes(child.props.children, child.props.path, child.props.element);
      }
    }
  };

  parseRoutes(children, path, element);

  // 根本location.pathname 渲染对应组件
  const render = (u) => {
    let isContinue = true;
    if (filter) {
      isContinue = filter();
    }
    if (!isContinue) {
      return <div>404 Not Found</div>;
    }
    if (urlMap[u]) {
      return urlMap[u];
    } else {
      return <div>404 Not Found</div>;
    }
  };

  return <>{render(u)}</>;
}
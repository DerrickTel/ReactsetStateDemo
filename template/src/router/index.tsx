import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import MyRoute from './myRoute'

// pages
const Home = lazy(() => import('@/pages/home'));
const NotFound = lazy(() => import('@/pages/notFound'));


const Application = () => (
  <BrowserRouter
    basename="/"
  >
    {/* 这里是简单的loading，可以加入自己写的自定义ReactNode */}
    <Suspense fallback={<div>加载中...</div>}>
      <Switch>
        <MyRoute title="首页" exact path="/" component={Home} />

        <MyRoute title="页面不见啦" path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Application;

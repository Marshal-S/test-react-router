import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import { HomeView } from './home';
import { HomeIndex1View } from './home-index1';
import { HomeIndex2View } from './home-index2';
import { HomeIndex3View } from './home-index3';
import { HomeIndex4View } from './home-index4';
import { SettingUserView } from './setting-user';
import { SettingLoveView } from './setting-love';
import { SettingView } from './setting';
import { LoginView } from './login';
import { NotFoundView } from './not-found';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.ondragstart = () => false //关闭拖拽效果
  }, [])

  // const routes = useRoutes([
  //   { 
  //     path: '/home', 
  //     element: <HomeView />, 
  //     children: [
  //       {path: 'index1', element: <HomeIndex1View />},
  //       {path: 'index2', element: <HomeIndex2View />},
  //       {path: 'index3', element: <HomeIndex3View />},
  //       {path: 'index4', element: <HomeIndex4View />},
  //       {path: '', element: <Navigate to="index1" />},
  //   ]},
  //   {path: '/login', element: <LoginView />},
  //   {path: '/', element: <Navigate to="/login" />},
  // ])
  // return routes

  // const getRoutes = (children: any[]) => {
  //   return children.map((e, index) => {
  //     return (
  //       <Route key={index} path={e.path} element={e.element} >
  //         {
  //           e.children && getRoutes(e.children)
  //         }
  //       </Route>
  //     )
  //   })
  // }
  // return (
  //   <Routes>
  //     {
  //       getRoutes(routesList)
  //     }
  //   </Routes>
  // );

  return (
    <Routes>
      <Route path='/home' element={<HomeView />} >
        <Route path='index1' element={<HomeIndex1View />} />
        <Route path='index2' element={<HomeIndex2View />} />
        <Route path='index3' element={<HomeIndex3View />} />
        <Route path='index4' element={<HomeIndex4View />} />
        {/* 重定向 */}
        <Route path="" element={<Navigate to="index1" />} />

        <Route path='setting' element={<SettingView />}>
          <Route path='user' element={<SettingUserView />} />
          <Route path='love' element={<SettingLoveView />} />
          {/* 重定向 */}
          <Route path="" element={<Navigate to="user" />} />

          <Route path='*' element={<NotFoundView />} />
        </Route>

        <Route path='*' element={<NotFoundView />} />
      </Route>

      <Route path='/login' element={<LoginView />} />
      {/* 重定向 */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* 匹配所有路由，优先级比较低 */}
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
}

export default App;

import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import { loginNavigate } from "./utils"
import { browerHistory } from "."

export const HomeView = (props: any) => {
	const navigate = useNavigate()
	const location = useLocation()

	const [pathname, setPathname] = useState<string>(location.pathname)

	useEffect(() => {
		//返回时会监听到
		const unlisten = browerHistory.listen((res) => {
			setPathname(res.location.pathname)
		})
		return () => {
			//销毁时记得取消监听
			unlisten()
		}
	}, [])

	const titles = [{
		name: '首页一',
		path: '/home/index1'
	}, {
		name: '首页二',
		path: '/home/index2'
	}, {
		name: '首页三',
		path: '/home/index3'
	}, {
		name: '设置页面',
		path: '/home/setting/user',
		matchpath: '/home/setting' //用于处理外层包含关系的内容
	}]

	return (
		<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
			<div style={{ width: '100%', height: 100, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#999' }}>
				<Link to='/home/index3' state='我是link传递的信息' >link跳转</Link>
				<NavLink to='/home/index4' state='我是navlink传递的信息' >navlink跳转</NavLink>

				{
					titles.map(function (item, index) {
						return (
							<div 
								key={index} 
								style={{ 
									cursor: 'pointer',
									backgroundColor: pathname.includes(item.matchpath ? item.matchpath : item.path) ? 'skyblue' : '#fff'
								}} 
								onClick={() => {
									navigate(item.path, {
										state: '我传递的信息是' + item.path
									})
									setPathname(item.path)
								}} >{item.name}</div>
						)
					})
				}
				<div style={{ cursor: 'pointer', color: 'red' }} onClick={() => {
					loginNavigate(navigate)
				}}>退出登录</div>
			</div>
			<div style={{ display: 'flex', width: '100%', height: '100%' }}>
				<Outlet />
			</div>
		</div>
	)
}

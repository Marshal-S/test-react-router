import { useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { browerHistory } from "."

export const SettingView = (props: any) => {
	const navigate = useNavigate()
	const location = useLocation()
	const [pathname, setPathname] = useState<any>(location.pathname)

	useEffect(() => {
		//返回时会监听到
		const unlisten = browerHistory.listen((res) => {
			setPathname(res.location.pathname)
		})
		return () => {
			unlisten()
		}
	}, [])

	const titles = [{
		name: '基本信息',
		path: '/home/setting/user'
	}, {
		name: '爱好收藏',
		path: '/home/setting/love'
	}]

	return (
		<div style={{ flex: 1, display: 'flex' }}>
			<div style={{ width: 100, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#ddd' }}>
				{
					titles.map(function (item, index) {
						return (
							<div
								key={index}
								style={{
									cursor: 'pointer',
									backgroundColor: pathname === item.path ? 'skyblue' : '#fff'
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
			</div>
			<div style={{ display: 'flex', flex: 1, margin: 40 }}>
				<Outlet />
			</div>
		</div>
	)
}
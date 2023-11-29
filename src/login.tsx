import { useLocation, useNavigate } from "react-router-dom"

export const LoginView = (props: any) => {
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<div style={{ width: '100vw', display: 'flex', flexDirection: 'column' }} >
			<div style={{ width: '100%', height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<div style={{ fontSize: 24, color: 'black' }} >登录页面</div>
			</div>

			<div style={{ width: '100%', height: 100, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#999' }}>
				<div style={{ cursor: 'pointer', color: 'black' }} onClick={() => {
					navigate(location.state ? location.state : '/home/index1')
				}} >登录成功(混合操作，返回原来页面或者进入首页)</div>
				<div style={{ cursor: 'pointer', color: 'black' }} onClick={() => {
					navigate('/home/index1')
				}} >点击登录进入首页</div>
				<div style={{ cursor: 'pointer', color: 'black' }} onClick={() => {
					navigate('/home/setting/user')
				}}>进入设置页面</div>
			</div>
		</div>
	)
}
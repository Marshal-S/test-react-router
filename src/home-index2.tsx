import { useLocation } from "react-router-dom"

export const HomeIndex2View = (props: any) => {

	const location = useLocation()
	return (
		<div>
			我是首页2：{location.state}
		</div>
	)
}
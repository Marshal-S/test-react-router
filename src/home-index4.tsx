import { useLocation } from "react-router-dom"

export const HomeIndex4View = (props: any) => {
	const location = useLocation() 

	return (
		<div>
			我是首页4：{location.state}
		</div>
	)
}
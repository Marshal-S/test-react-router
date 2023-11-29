import { useLocation } from "react-router-dom"

export const HomeIndex3View = (props: any) => {
	const location = useLocation() 

	return (
		<div>
			我是首页3：{location.state}
		</div>
	)
}
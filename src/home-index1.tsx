import { useEffect } from "react"
import { useLocation, useSearchParams } from "react-router-dom"

export const HomeIndex1View = (props: any) => {

	const location = useLocation()
	const params = useSearchParams()

	useEffect(() => {
		console.log('location:', location)
		console.log('params:', params)
	}, [])

	return (
		<div>
			我是首页1: {params[0].get('id')}
		</div>
	)
}
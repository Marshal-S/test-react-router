
export const loginNavigate = (navigate: Function) => {
	navigate('/login', {
		state: window.location.pathname
	})
}

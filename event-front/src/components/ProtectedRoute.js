import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AppContainer from '../containers/App'

const ProtectedRoute = ({ session }) => {
	return session.authenticated ? (
		<AppContainer>
			<Outlet />
		</AppContainer>
	) : (
		<Navigate to={'/login'} />
	)
}

export default ProtectedRoute

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { sessionRestoreRequest } from './store/authentication/actions'
import AppRouter from './components/AppRouter'

const App = () => {
	const dispatch = useDispatch()

	const restoreSession = () => {
		dispatch(sessionRestoreRequest())
	}

	useEffect(() => {
		restoreSession()
	}, [])

	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
}

export default App

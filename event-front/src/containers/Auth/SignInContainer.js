import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { sessionCreateRequest } from '../../store/authentication/actions'
import { SignIn } from '../../components/Authentication'

const SignIpContainer = () => {
	const dispatch = useDispatch()
	const history = useNavigate()
	const { authenticated } = useSelector((state) => state.authentication)

	useEffect(() => {
		if (authenticated) history('/')
	}, [])

	const handleUserSignIn = (data) => {
		dispatch(sessionCreateRequest({ data, history }))
	}

	return <SignIn signInUser={handleUserSignIn} />
}

export default SignIpContainer

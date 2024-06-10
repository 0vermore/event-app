import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { userCreateRequest } from '../../store/users/actions'
import { SignUp } from '../../components/Authentication'

const SignUpContainer = () => {
	const dispatch = useDispatch()
	const history = useNavigate()
	const { authenticated } = useSelector((state) => state.authentication)

	useEffect(() => {
		if (authenticated) history('/')
	}, [])

	const handleUserSignUp = (data) => {
		dispatch(userCreateRequest({ data, history }))
	}

	return <SignUp signUpUser={handleUserSignUp} />
}

export default SignUpContainer

export const USER_CREATE_REQUEST = 'USER_CREATE_REQUEST'
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'
export const USER_CREATE_FAILURE = 'USER_CREATE_FAILURE'

export const userCreateRequest = (payload, history) => ({
	type: USER_CREATE_REQUEST,
	payload,
	history,
})

export const userCreateSuccess = (payload) => ({
	type: USER_CREATE_SUCCESS,
	payload,
})

export const userCreateFailure = (error) => ({
	type: USER_CREATE_FAILURE,
	error,
})

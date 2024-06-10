export const SESSION_CREATE_REQUEST = 'SESSION_CREATE_REQUEST'
export const SESSION_CREATE_SUCCESS = 'SESSION_CREATE_SUCCESS'
export const SESSION_CREATE_FAILURE = 'SESSION_CREATE_FAILURE'
export const SESSION_DELETE_REQUEST = 'SESSION_DELETE_REQUEST'
export const SESSION_DELETE_SUCCESS = 'SESSION_DELETE_SUCCESS'
export const SESSION_DELETE_FAILURE = 'SESSION_DELETE_FAILURE'
export const SESSION_RESTORE_REQUEST = 'SESSION_RESTORE_REQUEST'
export const SESSION_RESTORE_SUCCESS = 'SESSION_RESTORE_SUCCESS'
export const SESSION_RESTORE_FAILURE = 'SESSION_RESTORE_FAILURE'

export const sessionCreateRequest = (payload) => ({
	type: SESSION_CREATE_REQUEST,
	payload,
})

export const sessionCreateSuccess = (item) => ({
	type: SESSION_CREATE_SUCCESS,
	payload: item,
})

export const sessionCreateFailure = (error) => ({
	type: SESSION_CREATE_FAILURE,
	payload: error,
})

export const sessionDeleteRequest = (payload) => ({
	type: SESSION_DELETE_REQUEST,
	payload,
})

export const sessionDeleteSuccess = (payload) => ({
	type: SESSION_DELETE_SUCCESS,
	payload,
})

export const sessionDeleteFailure = (error) => ({
	type: SESSION_DELETE_FAILURE,
	payload: error,
})

export const sessionRestoreRequest = (payload) => ({
	type: SESSION_RESTORE_REQUEST,
	payload,
})

export const sessionRestoreSuccess = (payload) => ({
	type: SESSION_RESTORE_SUCCESS,
	payload,
})

export const sessionRestoreFailure = (error) => ({
	type: SESSION_RESTORE_FAILURE,
	payload: error,
})

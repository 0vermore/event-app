export const MESSAGES_GET_REQUEST = 'MESSAGES_GET_REQUEST'
export const MESSAGES_GET_SUCCESS = 'MESSAGES_GET_SUCCESS'
export const MESSAGES_GET_FAILURE = 'MESSAGES_GET_FAILURE'

export const MESSAGE_CREATE_REQUEST = 'MESSAGE_CREATE_REQUEST'
export const MESSAGE_CREATE_SUCCESS = 'MESSAGE_CREATE_SUCCESS'
export const MESSAGE_CREATE_FAILURE = 'MESSAGE_CREATE_FAILURE'

export const MESSAGES_UPDATE_LIST = 'MESSAGES_UPDATE_LIST'

export const messagesGetRequest = (payload) => ({
	type: MESSAGES_GET_REQUEST,
	payload,
})

export const messagesGetSuccess = (payload) => ({
	type: MESSAGES_GET_SUCCESS,
	payload,
})

export const messagesGetFailure = (error) => ({
	type: MESSAGES_GET_FAILURE,
	error,
})

export const messageCreateRequest = (payload) => ({
	type: MESSAGE_CREATE_REQUEST,
	payload,
})

export const messageCreateSuccess = (payload) => ({
	type: MESSAGE_CREATE_SUCCESS,
	payload,
})

export const messageCreateFailure = (payload) => ({
	type: MESSAGE_CREATE_FAILURE,
	payload,
})

export const messagesUpdateList = (payload) => ({
	type: MESSAGES_UPDATE_LIST,
	payload,
})

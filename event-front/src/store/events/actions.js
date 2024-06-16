export const EVENTS_GET_REQUEST = 'EVENTS_GET_REQUEST'
export const EVENTS_GET_SUCCESS = 'EVENTS_GET_SUCCESS'
export const EVENTS_GET_FAILURE = 'EVENTS_GET_FAILURE'

export const EVENT_GET_REQUEST = 'EVENT_GET_REQUEST'
export const EVENT_GET_SUCCESS = 'EVENT_GET_SUCCESS'
export const EVENT_GET_FAILURE = 'EVENT_GET_FAILURE'

export const EVENT_CREATE_REQUEST = 'EVENT_CREATE_REQUEST'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'
export const EVENT_CREATE_FAILURE = 'EVENT_CREATE_FAILURE'

export const EVENT_UPDATE_REQUEST = 'EVENT_UPDATE_REQUEST'
export const EVENT_UPDATE_SUCCESS = 'EVENT_UPDATE_SUCCESS'
export const EVENT_UPDATE_FAILURE = 'EVENT_UPDATE_FAILURE'

export const EVENT_DELETE_REQUEST = 'EVENT_DELETE_REQUEST'
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'
export const EVENT_DELETE_FAILURE = 'EVENT_DELETE_FAILURE'

export const eventsGetRequest = (payload) => ({
	type: EVENTS_GET_REQUEST,
	payload,
})

export const eventsGetSuccess = (payload) => ({
	type: EVENTS_GET_SUCCESS,
	payload,
})

export const eventsGetFailure = (error) => ({
	type: EVENTS_GET_FAILURE,
	error,
})

export const eventGetRequest = (payload) => ({
	type: EVENT_GET_REQUEST,
	payload,
})

export const eventGetSuccess = (payload) => ({
	type: EVENT_GET_SUCCESS,
	payload,
})

export const eventGetFailure = (error) => ({
	type: EVENT_GET_FAILURE,
	error,
})

export const eventCreateRequest = (payload) => ({
	type: EVENT_CREATE_REQUEST,
	payload,
})

export const eventCreateSuccess = (payload) => ({
	type: EVENT_CREATE_SUCCESS,
	payload,
})

export const eventCreateFailure = (payload) => ({
	type: EVENT_CREATE_FAILURE,
	payload,
})

export const eventUpdateRequest = (payload) => ({
	type: EVENT_UPDATE_REQUEST,
	payload,
})

export const eventUpdateSuccess = (payload) => ({
	type: EVENT_UPDATE_SUCCESS,
	payload,
})

export const eventUpdateFailure = (error) => ({
	type: EVENT_UPDATE_FAILURE,
	error,
})

export const eventDeleteRequest = (payload) => ({
	type: EVENT_DELETE_REQUEST,
	payload,
})

export const eventDeleteSuccess = (payload) => ({
	type: EVENT_DELETE_SUCCESS,
	payload,
})

export const eventDeleteFailure = (error) => ({
	type: EVENT_DELETE_FAILURE,
	error,
})

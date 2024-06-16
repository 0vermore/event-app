import {
	MESSAGES_GET_REQUEST,
	MESSAGES_GET_SUCCESS,
	MESSAGES_GET_FAILURE,
	MESSAGE_CREATE_REQUEST,
	MESSAGE_CREATE_SUCCESS,
	MESSAGE_CREATE_FAILURE,
	MESSAGES_UPDATE_LIST,
} from './actions'

const initialState = {
	items: [],
	fetching: false,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case MESSAGES_GET_REQUEST:
			return { ...state, fetching: true }
		case MESSAGES_GET_SUCCESS:
			return {
				...state,
				items: payload,
				fetching: false,
			}
		case MESSAGES_GET_FAILURE:
			return { ...state, fetching: false }

		case MESSAGE_CREATE_REQUEST:
			return { ...state }
		case MESSAGE_CREATE_SUCCESS:
			return {
				...state,
				// items: [payload, ...state.items],
			}
		case MESSAGE_CREATE_FAILURE:
			return { ...state, error: payload }

		case MESSAGES_UPDATE_LIST:
			return {
				...state,
				items: [payload, ...state.items],
			}

		default:
			return state
	}
}

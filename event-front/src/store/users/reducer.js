import { USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_CREATE_FAILURE } from './actions'

const initialState = {
	user: {},
	fetching: false,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case USER_CREATE_REQUEST:
			return { ...state, fetching: true }
		case USER_CREATE_SUCCESS:
			return { ...state, user: payload, fetching: false }
		case USER_CREATE_FAILURE:
			return { ...state, fetching: false }

		default:
			return state
	}
}

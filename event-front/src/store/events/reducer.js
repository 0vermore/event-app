import {
	EVENTS_GET_REQUEST,
	EVENTS_GET_SUCCESS,
	EVENTS_GET_FAILURE,
	EVENT_GET_REQUEST,
	EVENT_GET_SUCCESS,
	EVENT_GET_FAILURE,
	EVENT_CREATE_REQUEST,
	EVENT_CREATE_SUCCESS,
	EVENT_CREATE_FAILURE,
	EVENT_UPDATE_REQUEST,
	EVENT_UPDATE_SUCCESS,
	EVENT_UPDATE_FAILURE,
	EVENT_DELETE_REQUEST,
	EVENT_DELETE_SUCCESS,
	EVENT_DELETE_FAILURE,
} from './actions'

const initialState = {
	items: [],
	item: {},
	fetching: false,
	itemFetching: false,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case EVENTS_GET_REQUEST:
			return { ...state, fetching: true }
		case EVENTS_GET_SUCCESS:
			return {
				...state,
				items: payload,
				fetching: false,
			}
		case EVENTS_GET_FAILURE:
			return { ...state, fetching: false }

		case EVENT_GET_REQUEST:
			return { ...state, itemFetching: true }
		case EVENT_GET_SUCCESS:
			return { ...state, item: payload, itemFetching: false }
		case EVENT_GET_FAILURE:
			return { ...state, itemFetching: false }

		case EVENT_CREATE_REQUEST:
			return { ...state }
		case EVENT_CREATE_SUCCESS:
			return {
				...state,
				items: [payload, ...state.items],
			}
		case EVENT_CREATE_FAILURE:
			return { ...state, error: payload }

		case EVENT_UPDATE_REQUEST:
			return { ...state }
		case EVENT_UPDATE_SUCCESS:
			return {
				...state,
				items: state.items.map((i) => (i.id == payload.id ? payload : i)),
			}
		case EVENT_UPDATE_FAILURE:
			return { ...state }

		case EVENT_DELETE_REQUEST:
			return { ...state }
		case EVENT_DELETE_SUCCESS:
			return {
				...state,
				items: state.items.filter((item) => item.id !== payload),
			}
		case EVENT_DELETE_FAILURE:
			return { ...state }

		default:
			return state
	}
}

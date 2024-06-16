import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from './actions'

import Api from '../../lib/api'

export default function* watcherSaga() {
	yield takeLatest(actions.MESSAGES_GET_REQUEST, watchResourcesGetRequest)
	yield takeLatest(actions.MESSAGE_CREATE_REQUEST, watchResourceCreateRequest)
}

function* watchResourcesGetRequest({ payload: { event_id } }) {
	try {
		const response = yield call(Api.Messages.get, event_id)

		yield put(actions.messagesGetSuccess(response.data))
	} catch (error) {
		yield put(actions.messagesGetFailure(error))
	}
}

function* watchResourceCreateRequest({ payload: { event_id, params } }) {
	try {
		const response = yield call(Api.Messages.create, event_id, params)

		yield put(actions.messageCreateSuccess(response.data))
	} catch (error) {
		yield put(actions.messageCreateFailure(error))
	}
}

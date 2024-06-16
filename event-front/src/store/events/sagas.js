import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from './actions'

import Api from '../../lib/api'

export default function* watcherSaga() {
	yield takeLatest(actions.EVENTS_GET_REQUEST, watchResourcesGetRequest)
	yield takeLatest(actions.EVENT_GET_REQUEST, watchResourceGetRequest)
	yield takeLatest(actions.EVENT_CREATE_REQUEST, watchResourceCreateRequest)
	yield takeLatest(actions.EVENT_UPDATE_REQUEST, watchResourceUpdateRequest)
	yield takeLatest(actions.EVENT_DELETE_REQUEST, watchResourceDeleteRequest)
}

function* watchResourcesGetRequest({ payload: { params } }) {
	try {
		const response = yield call(Api.Events.get, '', params)

		yield put(actions.eventsGetSuccess(response.data))
	} catch (error) {
		yield put(actions.eventsGetFailure(error))
	}
}

function* watchResourceGetRequest({ payload: { id, params } }) {
	try {
		const response = yield call(Api.Events.get, id, params)

		yield put(actions.eventGetSuccess(response.data))
	} catch (error) {
		yield put(actions.eventGetFailure(error))
	}
}

function* watchResourceCreateRequest({ payload: { data, history } }) {
	try {
		const response = yield call(Api.Events.create, data)

		yield put(actions.eventCreateSuccess(response.data))
		history('/')
	} catch (error) {
		yield put(actions.eventCreateFailure(error))
	}
}

function* watchResourceUpdateRequest({ payload: { id, data } }) {
	try {
		const response = yield call(Api.Events.update, id, data)

		yield put(actions.eventUpdateSuccess(response.data))
	} catch (error) {
		yield put(actions.eventUpdateFailure(error))
	}
}

function* watchResourceDeleteRequest({ payload: { id } }) {
	try {
		yield call(Api.Events.delete, id)

		yield put(actions.eventDeleteSuccess(payload.id))
	} catch (error) {
		yield put(actions.eventDeleteFailure(error))
	}
}

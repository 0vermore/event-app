import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from './actions'

import Api from '../../lib/api'

export default function* watcherSaga() {
	yield takeLatest(actions.SESSION_CREATE_REQUEST, watchResourceCreateRequest),
		yield takeLatest(actions.SESSION_DELETE_REQUEST, watchResourceDeleteRequest),
		yield takeLatest(actions.SESSION_RESTORE_REQUEST, watchResourceRestoreRequest)
}

function* watchResourceCreateRequest({ payload: { data, history } }) {
	try {
		const response = yield call(Api.Session.create, data)

		yield put(actions.sessionCreateSuccess(response.data))
		localStorage.setItem('session', JSON.stringify(response.data))
		history('/')
	} catch (error) {
		yield put(actions.sessionCreateFailure(error.response.data.errors))
	}
}

function* watchResourceDeleteRequest({ payload: { history } }) {
	try {
		yield call(Api.Session.delete)

		yield put(actions.sessionDeleteSuccess())

		localStorage.clear()
		history('/login')
	} catch (error) {
		yield put(actions.sessionDeleteFailure(error))
	}
}

function* watchResourceRestoreRequest() {
	try {
		const response = yield call(Api.Session.restore)

		yield put(actions.sessionRestoreSuccess(response.data))
		localStorage.setItem('session', JSON.stringify(response.data))
	} catch (error) {
		yield put(actions.sessionRestoreFailure(error))
	}
}

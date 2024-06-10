import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from './actions'
import { sessionCreateSuccess } from '../authentication/actions'

import Api from '../../lib/api'

export default function* watcherSaga() {
	yield takeLatest(actions.USER_CREATE_REQUEST, watchResourceCreateRequest)
}

function* watchResourceCreateRequest({ payload: { data, history } }) {
	try {
		const response = yield call(Api.User.create, data)

		yield put(actions.userCreateSuccess(response.data))
		yield put(sessionCreateSuccess(response.data))
		localStorage.setItem('session', JSON.stringify(response.data))
		history('/')
	} catch (error) {
		yield put(actions.userCreateFailure(error))
	}
}

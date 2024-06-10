import { fork, all } from 'redux-saga/effects'
import authenticationSaga from './authentication/sagas'
import usersSaga from './users/sagas'

export function* rootWatcherSaga() {
	yield all([fork(authenticationSaga), fork(usersSaga)])
}

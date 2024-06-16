import { fork, all } from 'redux-saga/effects'
import authenticationSaga from './authentication/sagas'
import usersSaga from './users/sagas'
import eventsSaga from './events/sagas'
import messagesSaga from './messages/sagas'

export function* rootWatcherSaga() {
	yield all([fork(authenticationSaga), fork(usersSaga), fork(eventsSaga), fork(messagesSaga)])
}
